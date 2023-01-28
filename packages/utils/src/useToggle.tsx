import { useState } from "react";

export default function useToggle(defaultValue: boolean = false): [boolean, (value?: boolean) => void] {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const toggler = (value?: boolean) => {
    setIsOpen(currentValue => (typeof value === "boolean" ? value : !currentValue));
  };

  return [isOpen, toggler];
}
