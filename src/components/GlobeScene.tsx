import { geoEquirectangular, geoGraticule10, geoPath } from "d3-geo";
import {
  AmbientLight,
  BackSide,
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { feature, mesh } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import { useEffect, useRef } from "react";
import worldAtlasUrl from "world-atlas/countries-110m.json?url";

const mapWidth = 2048;
const mapHeight = 1024;
const globeRadius = 1.34;
const minimumFrameFill = 0.9;

type WorldTopology = Topology<{ countries: GeometryCollection }>;

function createEarthTexture(topology: WorldTopology) {
  const canvas = document.createElement("canvas");
  canvas.width = mapWidth;
  canvas.height = mapHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("The browser could not create the globe map texture.");
  }

  const countriesObject = topology.objects.countries;
  if (!countriesObject) {
    throw new Error("The world map data did not contain country boundaries.");
  }

  const countries = feature(topology, countriesObject);
  const coastlines = mesh(
    topology,
    countriesObject,
    (first, second) => first === second,
  );
  const borders = mesh(
    topology,
    countriesObject,
    (first, second) => first !== second,
  );
  const projection = geoEquirectangular()
    .scale(mapWidth / (2 * Math.PI))
    .translate([mapWidth / 2, mapHeight / 2]);
  const path = geoPath(projection, context);

  context.fillStyle = "#101936";
  context.fillRect(0, 0, mapWidth, mapHeight);

  context.beginPath();
  path(geoGraticule10());
  context.strokeStyle = "rgba(154, 166, 231, 0.16)";
  context.lineWidth = 1;
  context.stroke();

  context.beginPath();
  path(countries);
  context.fillStyle = "#6974df";
  context.fill("evenodd");

  context.beginPath();
  path(coastlines);
  context.strokeStyle = "#c5c9ff";
  context.lineWidth = 1.5;
  context.stroke();

  context.beginPath();
  path(borders);
  context.strokeStyle = "rgba(214, 217, 255, 0.48)";
  context.lineWidth = 0.65;
  context.stroke();

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

type GlobeSceneProps = {
  isSpinning: boolean;
  onError: (message: string) => void;
};

export function GlobeScene({ isSpinning, onError }: GlobeSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    let renderer: WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let earthTexture: CanvasTexture | undefined;
    let earthMaterial: MeshStandardMaterial | undefined;
    let frame = 0;
    let disposed = false;

    const scene = new Scene();
    const camera = new PerspectiveCamera(34, 1, 0.1, 40);
    camera.position.set(0, 0, 5.4);
    const earthGroup = new Group();
    scene.add(earthGroup);

    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(host.clientWidth, host.clientHeight, false);
      renderer.outputColorSpace = SRGBColorSpace;
      renderer.domElement.setAttribute("tabindex", "-1");
      host.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      const halfVerticalFov = Math.tan((camera.fov * Math.PI) / 360);
      controls.minDistance =
        globeRadius /
        (Math.min(halfVerticalFov, halfVerticalFov * camera.aspect) *
          minimumFrameFill);
      controls.maxDistance = 6.5;
      controls.listenToKeyEvents(host);
      controls.autoRotate = isSpinning;
      controls.autoRotateSpeed = 0.45;
      controlsRef.current = controls;
      renderer.domElement.setAttribute(
        "aria-label",
        "Interactive Earth map. Drag or use arrow keys to rotate; scroll to zoom.",
      );
      renderer.domElement.setAttribute("role", "img");
      renderer.domElement.setAttribute("tabindex", "0");
    } catch (cause) {
      const message =
        cause instanceof Error ? cause.message : "Unknown WebGL error";
      onErrorRef.current(`The interactive globe could not start: ${message}`);
      controlsRef.current = null;
      controls?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      return;
    }

    const ambientLight = new AmbientLight(new Color("#aab3ff"), 2.2);
    const keyLight = new DirectionalLight(new Color("#ffffff"), 3.4);
    keyLight.position.set(-3, 2, 5);
    scene.add(ambientLight, keyLight);

    const globeGeometry = new SphereGeometry(1.3, 96, 72);
    const atmosphereGeometry = new SphereGeometry(1.34, 64, 48);
    const atmosphereMaterial = new MeshBasicMaterial({
      color: "#6877ff",
      transparent: true,
      opacity: 0.13,
      side: BackSide,
      depthWrite: false,
    });
    earthGroup.add(new Mesh(atmosphereGeometry, atmosphereMaterial));

    const resizeObserver = new ResizeObserver(() => {
      if (!renderer || !host.clientWidth || !host.clientHeight) {
        return;
      }
      renderer.setSize(host.clientWidth, host.clientHeight, false);
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      const halfVerticalFov = Math.tan((camera.fov * Math.PI) / 360);
      controls.minDistance =
        globeRadius /
        (Math.min(halfVerticalFov, halfVerticalFov * camera.aspect) *
          minimumFrameFill);
      controls.update();
    });
    resizeObserver.observe(host);

    const render = () => {
      if (disposed || !renderer || !controls) {
        return;
      }
      controls.update();
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!frame) {
            render();
          }
        } else {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { rootMargin: "100px" },
    );
    visibilityObserver.observe(host);

    const loadMap = async () => {
      const response = await fetch(worldAtlasUrl);
      if (!response.ok) {
        throw new Error(`World map data returned HTTP ${response.status}.`);
      }

      const topology = (await response.json()) as WorldTopology;
      if (disposed) {
        return;
      }

      earthTexture = createEarthTexture(topology);
      earthMaterial = new MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.84,
        metalness: 0.02,
      });
      const earth = new Mesh(globeGeometry, earthMaterial);
      earthGroup.add(earth);
    };

    void loadMap().catch((cause: unknown) => {
      if (disposed) {
        return;
      }
      const message =
        cause instanceof Error ? cause.message : "Unknown map loading error";
      onErrorRef.current(`The interactive globe map could not load: ${message}`);
    });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      controls?.dispose();
      controlsRef.current = null;
      earthTexture?.dispose();
      earthMaterial?.dispose();
      globeGeometry.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isSpinning;
    }
  }, [isSpinning]);

  return <div ref={hostRef} className="globe-canvas" />;
}

export default GlobeScene;
