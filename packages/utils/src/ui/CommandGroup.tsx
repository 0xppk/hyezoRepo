import { Combobox } from "@headlessui/react";

type Props = {
  commands: { id: number; name: string; group: string; shortcut?: string }[];
  group: string;
};

export const CommandGroup = ({ commands, group }: Props) => {
  return (
    <>
      {/* only show the header when there are commands belonging to this group */}
      {commands.filter(command => command.group === group).length >= 1 && (
        <div className="bg-accent/50 flex h-6 flex-shrink-0 items-center">
          <span className="px-3.5 text-xs text-slate-100">{group}</span>
        </div>
      )}
      {commands
        .filter(command => command.group === group)
        .map((command, idx) => (
          <Combobox.Option key={idx} value={command}>
            {({ active }) => (
              <div
                className={`hover:bg-primary/40 flex h-[46px] w-full cursor-default items-center text-white transition-colors duration-100 ease-in 
                 ${active ? "bg-primary/40" : ""}`}
              >
                <div className="flex w-full items-center px-3.5">
                  {/* <div className="mr-3 flex w-4 items-center justify-center">
                    {mapCommandGroupToIcon(command.group.toLowerCase())}
                  </div> */}
                  <span className="flex flex-auto text-left text-sm">{command.name}</span>
                  <span className="text-[10px]">{command.shortcut}</span>
                </div>
              </div>
            )}
          </Combobox.Option>
        ))}
    </>
  );
};
