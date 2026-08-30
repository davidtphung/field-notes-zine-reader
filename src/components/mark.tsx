export function FieldMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="5"
        y="4"
        width="18"
        height="24"
        rx="1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M23 8h4.2c.5 0 .8.4.8.9V27c0 .6-.4 1-.9 1H10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 12c3.2 1.2 6.4.2 9.6.8 2.2.4 3.8 1.4 6.4 1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9 17c2.8-.8 5.6.6 8.4.2 2.8-.4 4.6-1.6 7.6-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ""}`.trim()}>
      <FieldMark className="wordmark-mark" />
      <span className="wordmark-field">Field</span>
      <span className="wordmark-notes">Notes</span>
    </span>
  );
}
