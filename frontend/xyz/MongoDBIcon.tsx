import React from "react";

export const MongoDBIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
    >
        <defs>
            <style>
                {`
          @keyframes mongo-float {
            0%   { transform: translateY(0px) scale(1); }
            50%  { transform: translateY(-2px) scale(1.02); }
            100% { transform: translateY(0px) scale(1); }
          }

          @keyframes mongo-glow {
            0%   { opacity: 0.7; }
            50%  { opacity: 1; }
            100% { opacity: 0.7; }
          }

          .mongo-leaf {
            transform-origin: center;
            animation: mongo-float 3s ease-in-out infinite;
          }

          .mongo-core {
            animation: mongo-glow 2.5s ease-in-out infinite;
          }
        `}
            </style>
        </defs>

        <path className="mongo-leaf" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.154-1.86-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
);