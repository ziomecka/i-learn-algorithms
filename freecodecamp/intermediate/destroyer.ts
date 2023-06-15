export function destroyer<V>(arr: V[], ...args: V[]): V[] {
  return arr.filter((item) => !args.includes(item));
}
