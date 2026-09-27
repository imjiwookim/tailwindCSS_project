export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : "w-24"}
        px-4 py-3 rounded-xl
        body-lg text-black
        bg-primary-400
        hover:bg-primary-600
        active:bg-primary-700
        disabled:cursor-not-allowed
        disabled:bg-neutral-200
        disabled:text-neutral-100
      `}
    >
      {text}
    </button>
  );
}
