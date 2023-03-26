type Props = {
    commands: {
        id: number;
        name: string;
        group: string;
        shortcut?: string;
    }[];
    group: string;
};
declare const CommandGroup: ({ commands, group }: Props) => JSX.Element;

export { CommandGroup };
