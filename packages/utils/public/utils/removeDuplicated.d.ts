interface RemovedObject extends Record<string, any> {
    id?: number;
    title: string;
}
declare function removeDuplicated(list: RemovedObject[]): RemovedObject[];

export { removeDuplicated };
