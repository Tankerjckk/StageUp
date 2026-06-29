"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  placeholder: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
};

export function SelectField({
  placeholder,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value ?? "");
  const ref = useRef<HTMLDivElement | null>(null);

  const selectedValue = value ?? internalValue;
  const selectedOption = options.find((option) => option.value === selectedValue);

  function handleSelect(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-4 text-left text-[15px] font-medium outline-none transition ${
          isOpen
            ? "border-purple-500 ring-4 ring-purple-100"
            : "border-neutral-200 hover:border-purple-200"
        }`}
      >
        <span className={selectedOption ? "text-neutral-900" : "text-neutral-400"}>
          {selectedOption?.label ?? placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`text-neutral-400 transition ${
            isOpen ? "rotate-180 text-purple-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_24px_70px_rgba(20,20,40,0.12)]">
          {options.map((option) => {
            const isSelected = option.value === selectedValue;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[14px] font-semibold transition ${
                  isSelected
                    ? "bg-purple-50 text-purple-700"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {option.label}

                {isSelected && <Check size={17} strokeWidth={3} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}