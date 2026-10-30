export const CPlusPlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 20 100 60"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <style>{`
        @keyframes plus-1-rotate {
          40% {
            transform: rotate(720deg);
            opacity: 1;
          }
          80% {
            transform: rotate(720deg) translateX(55px) scale(2);
            opacity: 1;
          }
          90% {
            transform: rotate(720deg) translateX(55px) scale(2);
            opacity: 1;
          }
          100% {
            transform: rotate(720deg) translateX(55px) scale(2);
            opacity: 0;
          }
        }

        @keyframes plus-2-rotate {
          40% {
            transform: rotate(720deg);
            opacity: 1;
          }
          80% {
            transform: rotate(720deg) translateX(30px) scale(2);
            opacity: 1;
          }
          100% {
            transform: rotate(720deg) translateX(30px) scale(2);
            opacity: 0;
          }
        }

        .cpp-arc {
          stroke: #6195CB;
          stroke-width: 15;
          stroke-dasharray: 100;
          fill: transparent;
          transform-origin: 30px 50px;
          transform: rotate(32deg);
        }

        .cpp-plus {
          fill: #6195CB;
          transform-origin: 30px 50px;
          opacity: 0;
        }

        .cpp-plus-1 {
          animation: plus-1-rotate 5s infinite;
        }

        .cpp-plus-2 {
          animation: plus-2-rotate 5s infinite;
        }
      `}</style>
    </defs>

    <circle className="cpp-arc" cx="30" cy="50" r="20" />

    <g className="cpp-plus cpp-plus-1">
      <rect x="25" y="48" width="10" height="4" />
      <rect x="28" y="45" width="4" height="10" />
    </g>

    <g className="cpp-plus cpp-plus-2">
      <rect x="25" y="48" width="10" height="4" />
      <rect x="28" y="45" width="4" height="10" />
    </g>
  </svg>
);