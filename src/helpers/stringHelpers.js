/**
 *
 * @param {string} value String to capitalize first letter
 * @returns The same string but the first letter is capitalized
 */
export function capitalize(value) {
  if (typeof value !== "string" || !value.length) {
    return value;
  }

  return value[0].toUpperCase() + value.substring(1);
}
