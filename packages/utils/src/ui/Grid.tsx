export default function Grid() {
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="test col-span-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum sint
        illo doloribus, sapiente hic odit conseq uuntur vero! Nostrum impedit sint fugit
        distinctio ratione in et dolore fuga, ab porro.
      </div>
      <div className="test prose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum sint
        illo doloribus, sapiente hic odit consequuntur vero! Nostrum impedit sint fugit
        distinctio ratione in et dolore fuga, ab porro.
      </div>
      <div className="test row-span-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum sint
        illo doloribus, sapiente hic odit consequuntur vero! Nostrum impedit sint fugit
        distinctio ratione in et dolore fuga, ab porro.
      </div>
      <div className="test">
        <div className="stack">
          <div className="bg-teal-400 text-xl">으으으아아</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum sint
            illo doloribus, sapiente hic odit consequuntur vero! Nostrum impedit sint
            fugit distinctio ratione in et dolore fuga, ab porro.
          </div>
        </div>
      </div>
      <div className="test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum sint
        illo doloribus, sapiente hic odit consequuntur vero! Nostrum impedit sint fugit
        distinctio ratione in et dolore fuga, ab porro.
      </div>
    </div>
  );
}
