"use client";

export default function MessengerButton() {
  return (
    <>
      <a
        href="https://m.me/angeloramos.photography"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Messenger"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00c6ff 0%, #0078ff 100%)",
          boxShadow: "0 4px 20px rgba(0, 120, 255, 0.45)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(0, 120, 255, 0.6)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(0, 120, 255, 0.45)";
        }}
      >
        {/* Messenger icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="30"
          height="30"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.44 5.504 3.698 7.205V22l3.378-1.858C10.003 20.374 10.987 20.5 12 20.5c5.523 0 10-4.145 10-9.257S17.523 2 12 2zm1.008 12.457l-2.545-2.715-4.97 2.715 5.467-5.799 2.607 2.715 4.908-2.715-5.467 5.799z"/>
        </svg>
      </a>

      {/* Tooltip label */}
      <div
        style={{
          position: "fixed",
          bottom: "38px",
          right: "96px",
          zIndex: 9998,
          background: "rgba(0,0,0,0.75)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 500,
          padding: "6px 12px",
          borderRadius: "20px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          opacity: 0,
          animation: "messengerTooltipFade 3s ease 1.5s forwards",
        }}
      >
        Message us on Messenger!
      </div>

      <style>{`
        @keyframes messengerTooltipFade {
          0%   { opacity: 0; transform: translateX(8px); }
          20%  { opacity: 1; transform: translateX(0); }
          80%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(8px); }
        }
      `}</style>
    </>
  );
}
