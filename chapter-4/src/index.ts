function is<T>(a: T, ...b: T[]) {
  return b.every(_ => _ === a)
}

is(1, 1, 1, 1, 1, 1, 1, 2)