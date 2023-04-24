interface RemovedObject extends Record<string, any> {
  id?: number;
  title: string;
}

export function removeDuplicated<T>(arr: T[], uniqueKey: keyof T): T[] {
  const uniqueArray = arr.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(t => t[uniqueKey as keyof typeof t] === obj[uniqueKey as keyof T]),
  );
  return uniqueArray;
}
