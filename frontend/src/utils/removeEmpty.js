// @ts-nocheck
// @ts-ignore
export const isEmpty = (val) => val === '' || val === undefined;

export function removeEmpty(val) {
  if (Array.isArray(val)) {
    return val
      .map(item =>
        typeof item === 'object' ?
          removeEmpty(item) : item,
      ).filter(item => !isEmpty(item));
  }
  if (typeof val === 'object' && val != null) {
    return Object.entries(val)
      .map(([k, v]) => [k, removeEmpty(v)])
      .reduce((acc, [k, v]) => {
        if (!isEmpty(v )) {
          acc[k] = v;

        }
        return acc;
      }, {} );
  }

  return val;
}
