"use client";
import { useSelect } from "@/hooks";
import { useEffect, useState } from "react";
import { SelectInterface } from "@/interface";

export function Select({
  placeholder,
  className,
  options,
  error,
  nested,
  name,
  setValue: setFormValue,
  variant = "primary",
  value = "itself",
  label = "itself",
}: SelectInterface) {
  const [hoveredOption, setHoveredOption] = useState<any>(undefined);
  const [selectedValue, setSelectedValue] = useState<any>(undefined);
  const [selectedLabel, setSelectedLabel] = useState<any>(undefined);
  const { isOpen, toggle, close } = useSelect();

  const clear = () => {
    setHoveredOption(undefined);
  };

  const setValue = (selectedOption: any) => {
    if (value === "itself") {
      setSelectedValue(selectedOption);
      setSelectedLabel(selectedOption);
    } else {
      setSelectedValue(selectedOption[value]);
      setSelectedLabel(selectedOption[label]);
    }

    close(clear);
  };

  useEffect(() => {
    if (setFormValue && name) {
      setFormValue(name, selectedValue);
    }
  }, [selectedValue, name, setFormValue]);

  return (
    <div className={`select__wrapper ${isOpen ? "open" : ""}`}>
      <div
        className={`select ${variant} ${className || ""} ${
          error ? "error" : ""
        }`}
      >
        <span className="select__placeholder" onClick={() => toggle(clear)}>
          {selectedLabel || placeholder}
        </span>
        <div className={`options ${hoveredOption ? "close" : ""}`}>
          {options.map((option, index) => (
            <span
              className={`option ${
                nested && option[nested]?.length ? "nested" : ""
              }`}
              onMouseOver={() =>
                setHoveredOption(option?.id ? option.id : option)
              }
              onMouseOut={() => setHoveredOption(undefined)}
              key={index}
            >
              <span className="label" onClick={() => setValue(option)}>
                {label === "itself" ? option : option[label]}
              </span>
              {nested && option[nested]?.length ? (
                <div
                  className="nested__option--button"
                  onClick={() =>
                    setHoveredOption(option?.id ? option.id : option)
                  }
                />
              ) : null}
              {nested && option[nested]?.length ? (
                <div
                  className={`children ${
                    option === hoveredOption || option?.id === hoveredOption
                      ? "open"
                      : ""
                  }`}
                >
                  <span
                    className="option button--back"
                    onClick={() => setHoveredOption(undefined)}
                  >
                    back
                  </span>
                  {option[nested].map((child: any, index: number) => (
                    <span
                      className="option"
                      onClick={() => setValue(child)}
                      key={index}
                    >
                      {label === "itself" ? child : child[label]}
                    </span>
                  ))}
                </div>
              ) : null}
            </span>
          ))}
        </div>
      </div>
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
