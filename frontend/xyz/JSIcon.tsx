export const JSIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <style>{`
        @keyframes stopper-ani {
          50% { transform: rotate(0); }
          60% { transform: rotate(-90deg); }
          90% { transform: rotate(-90deg); }
          100% { transform: rotate(0); }
        }

        @keyframes pool-ani {
          50% { transform: scale(0); }
          100% { transform: scale(1); }
        }

        @keyframes wave-ani {
          0% { x: 0px; }
          100% { x: -100px; }
        }

        @keyframes fill-ani {
          50% { y: 18px; }
          100% { y: 80px; }
        }

        .js-cup {
          fill: transparent;
          stroke: #f7df1f;
          stroke-width: 2;
        }

        .js-text {
          font-size: 30px;
          font-weight: bold;
          fill: white;
        }

        .js-stopper {
          transform-origin: 75px 65px;
          animation: stopper-ani 5s infinite;
        }

        .js-pool {
          transform: scale(0);
          transform-origin: 75px 75px;
          animation: pool-ani 5s infinite;
          fill: #f7df1f;
        }

        .wave-box {
          animation: wave-ani 5s infinite linear, fill-ani 5s infinite alternate;
        }
      `}</style>

      <pattern id="wave" width="0.1" height="1">
        <path
          fill="#f7df1f"
          d="M 0 10 C 3 12, 5 15, 14 10 C 17 9, 20 5, 30 10 L 30 60 L 0 60 z"
        />
      </pattern>

      <mask id="wave-mask">
        <rect x="25" y="25" width="50" height="50" fill="white" />
      </mask>
    </defs>

    <ellipse className="js-pool" cx="75" cy="75" rx="25" ry="10" />

    <path className="js-cup" d="M 25 25 L 25 75 L 75 75 L 75 25" />

    <g className="js-stopper">
      <rect x="75" y="65" width="1" height="5" fill="#f7df1f" />
      <rect x="75" y="70" width="3" height="5" fill="#f7df1f" />
    </g>

    <rect
      className="wave-box"
      mask="url(#wave-mask)"
      fill="url(#wave)"
      x="0"
      y="80"
      width="300"
      height="100"
    />

    <text className="js-text" x="45" y="70">
      JS
    </text>
  </svg>
);