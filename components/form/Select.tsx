"use client";
import { useEffect, useState } from "react";
import { SelectInterface } from "@/interface";
import { useSelect } from "@/hooks";

export function Select({
  placeholder,
  className,
  options,
  error,
  variant = "primary",
  value = "itself",
  label = "itself",
}: SelectInterface) {
  const [selectedValue, setSelectedValue] = useState<any>(undefined);
  const [selectedLabel, setSelectedLabel] = useState<any>(undefined);
  const { isOpen, toggle } = useSelect();

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const setValue = (selectedOption: any) => {
    if (value === "itself") {
      setSelectedValue(selectedOption);
      setSelectedLabel(selectedOption);
    } else {
      setSelectedValue(selectedOption[value]);
      setSelectedLabel(selectedOption[label]);
    }
  };

  return (
    <div className={`select__wrapper ${isOpen ? "open" : ""}`}>
      <div
        className={`select ${variant} ${className || ""} ${
          error ? "error" : ""
        }`}
        onClick={toggle}
      >
        <span className="select__placeholder">
          {selectedLabel || placeholder}
        </span>
        <div className="options">
          {options.map((option, index) => (
            <span
              className="option"
              onClick={() => setValue(option)}
              key={index}
            >
              {label === "itself" ? option : option[label]}
            </span>
          ))}
        </div>
      </div>
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
