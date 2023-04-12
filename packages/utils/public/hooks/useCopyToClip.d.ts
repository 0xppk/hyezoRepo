type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;
/**
 * @see https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 * @example
 * export default function Component() {
  const [value, copy] = useCopyToClipboard()
  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => copy('A')}>A</button>
        <button onClick={() => copy('B')}>B</button>
        <button onClick={() => copy('C')}>C</button>
      </div>
      <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
    </>
  )
}
 */
declare function useCopyToClipboard(): [CopiedValue, CopyFn];

export { useCopyToClipboard as default };
