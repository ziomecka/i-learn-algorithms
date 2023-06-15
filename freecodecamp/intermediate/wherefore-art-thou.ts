export function whereforeArtThou<V extends Record<string, any>>(
  arr: V[],
  obj: V
): V[] {
  const entries = Object.entries(obj);

  return arr.filter((item) =>
    entries.every(([key, value]) => item[key] === value)
  );
}
