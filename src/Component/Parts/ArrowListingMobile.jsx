import React from "react";

export default function ArrowListingMobile() {
  return (
    <div className="mt-10">
      <div className="text-[#D7CCB6] text-sm text-center">Листайте вправо</div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <div>
          <svg
            className="rotate-180"
            width="53"
            height="24"
            viewBox="0 0 53 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.700195 12.4059L52.4004 12.3137M52.4004 12.3137V12.3137C48.6599 14.7317 45.3875 17.806 42.7409 21.3883L41.0866 23.6274M52.4004 12.3137V12.3137C48.6599 9.89573 45.3875 6.82142 42.7409 3.23912L41.0866 1"
              stroke="#DAC394"
              strokeWidth="0.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <svg
            className="animate-move-right"
            width="53"
            height="24"
            viewBox="0 0 53 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.700195 12.4059L52.4004 12.3137M52.4004 12.3137V12.3137C48.6599 14.7317 45.3875 17.806 42.7409 21.3883L41.0866 23.6274M52.4004 12.3137V12.3137C48.6599 9.89573 45.3875 6.82142 42.7409 3.23912L41.0866 1"
              stroke="#DAC394"
              strokeWidth="0.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
