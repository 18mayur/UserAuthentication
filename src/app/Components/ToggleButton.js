export default function ToggleButton({ active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`toggle-btn ${active ? "active" : ""}`}
    >
      <span>{active ? "SIGN IN" : "SIGN UP"}</span>
      <div className="knob" />
    </button>
  );
}
