type Target = {
  [key: string]: any;
};

export function flat(original: Target) {
  const result: Target = {};

  for (const key in original) {
    if (original[key] && original[key].constructor === Object) {
      const partial = flat(original[key]);
      for (const sub in partial) {
        result[`${key}.${sub}`] = partial[sub];
      }
      continue;
    }
    result[key] = original[key];
  }

  return result;
}
