export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  disabled = false,
  autoComplete = "off",
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="body-sm text-neutral-400">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className="
          w-full px-4 py-3 rounded-xl
          body-md
          bg-primary-300 text-neutral-700
          placeholder:text-neutral-300
          border-2 border-transparent
          outline-none
          focus:border-primary-700 focus:text-neutral-700
          disabled:cursor-not-allowed
          disabled:bg-neutral-200
          disabled:text-neutral-300
          disabled:placeholder:text-neutral-300
        "
      />
    </div>
  );
}
