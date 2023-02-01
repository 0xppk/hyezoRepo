'use strict';

var react = require('react');

function useToggle(defaultValue = false) {
  const [isOpen, setIsOpen] = react.useState(defaultValue);
  const toggler = (value) => {
    setIsOpen((currentValue) => typeof value === "boolean" ? value : !currentValue);
  };
  return [isOpen, toggler];
}

module.exports = useToggle;
