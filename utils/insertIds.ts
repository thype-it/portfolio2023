export default function insertIds<T, TWithId>(content: T[]): TWithId[] {
  const res = content.map((item, index) => ({
    id: index.toString(),
    ...item,
  }));

  return res as TWithId[];
}
