import { useState } from 'react';

function useToggle(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const toggler = (value) => {
    setIsOpen((currentValue) => typeof value === "boolean" ? value : !currentValue);
  };
  return [isOpen, toggler];
}

export { useToggle as default };
