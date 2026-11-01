export function WorldTransition() {
  return (
    <div className="world-transition" aria-labelledby="world-transition-title">
      <div className="world-transition-label" aria-hidden="true">
        <span>WORLD STATE / SIMULATED</span>
        <span>NO LIVE DATA</span>
      </div>
      <svg
        className="world-transition-art"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern
            id="archive-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              className="archive-grid-path"
              d="M48 0H0V48"
              fill="none"
              stroke="#858dff"
              strokeOpacity=".16"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="archive-core">
            <stop offset="0%" stopColor="#c2c6ff" stopOpacity=".85" />
            <stop offset="24%" stopColor="#858dff" stopOpacity=".38" />
            <stop offset="100%" stopColor="#5b65dc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="archive-horizon" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#858dff" stopOpacity="0" />
            <stop offset="53%" stopColor="#858dff" stopOpacity=".7" />
            <stop offset="100%" stopColor="#5b65dc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#archive-grid)" />
        <circle
          className="archive-core-glow"
          cx="720"
          cy="470"
          r="360"
          fill="url(#archive-core)"
        />
        <g className="archive-rays" fill="none">
          <path d="M0 454h1440M120 0v900M300 0v900M480 0v900M660 0v900M840 0v900M1020 0v900M1200 0v900M1380 0v900" />
          <path d="M0 520c230-70 440-70 720 0s490 70 720 0M0 590c230-70 440-70 720 0s490 70 720 0M0 660c230-70 440-70 720 0s490 70 720 0" />
        </g>
        <path
          className="archive-horizon"
          d="M0 474h1440"
          stroke="url(#archive-horizon)"
        />
        <circle className="archive-ring" cx="720" cy="474" r="170" />
        <circle
          className="archive-ring archive-ring-wide"
          cx="720"
          cy="474"
          r="280"
        />
        <path
          className="archive-signal-line"
          d="M0 474h544l28-40 24 78 44-116 38 156 42-104 35 26h685"
        />
      </svg>
      <div className="world-transition-copy">
        <span>02 / SIGNAL EXPANSION</span>
        <h2 id="world-transition-title">
          Beneath the surface,
          <br />
          <em>the archive wakes.</em>
        </h2>
        <p>The simulation ends here. The human record begins below.</p>
      </div>
      <div className="world-transition-coordinate" aria-hidden="true">
        <span>ARCHIVE SIGNAL / 02</span>
        <span>DECRYPTION IN PROGRESS</span>
      </div>
    </div>
  );
}
