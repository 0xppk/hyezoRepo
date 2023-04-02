/**
 * @see https://usehooks-ts.com/react-hook/use-debounce
 * @example
 * import { ChangeEvent, useEffect, useState } from 'react'

export default function Component() {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

 */
declare function useDebounce<T>(value: T, delay?: number): T;

export { useDebounce as default };
