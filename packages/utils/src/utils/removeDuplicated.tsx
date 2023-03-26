interface RemovedObject extends Record<string, any> {
  id?: number;
  title: string;
}

export function removeDuplicated(list: RemovedObject[]) {
  const uniqueArray = list.filter(
    (obj, index, self) => index === self.findIndex(t => t.name === obj.name),
  );
  return uniqueArray;
}
