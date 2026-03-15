"use client";

export function ProductInput({ title, value, onBlur, type }) {
  return (
    <label>
      <p className="text-black/50 mb-xs">{title}</p>
      <div className="input-wrapper">
        <input
          defaultValue={value}
          type={type}
          onBlur={(e) => {
            const success = onBlur(e.target.value);
            if (!success) e.target.value = value;
          }}
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
}
