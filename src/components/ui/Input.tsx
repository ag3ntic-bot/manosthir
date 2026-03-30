import React from "react";

interface InputProps {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
  required?: boolean;
}

export function Input({
  label,
  error,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className = "",
  required,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-text-primary font-[family-name:var(--font-body)]"
        >
          {label}
        </label>
      )}
      <input
        data-testid="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 border border-border rounded-[8px] text-text-primary bg-white placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 font-[family-name:var(--font-body)] ${
          error ? "border-error ring-1 ring-error" : ""
        }`}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}

export default Input;
