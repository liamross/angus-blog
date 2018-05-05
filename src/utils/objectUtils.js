/**
 * Attempts to return item at path within obj, else returns fallback or null.
 * @param {Object} obj - Object that should contain item at path.
 * @param {string} path - String path in form A.B.C that leads to item.
 * @param {any} [fallback=null] - Fallback value to return if not found.
 */
export const get = (obj, path, fallback = null) =>
  (() =>
    typeof path === 'string'
      ? path.replace(/\[(\d+)]/g, '.$1')
      : path.join('.'))()
    .split('.')
    .filter(Boolean)
    .every(step => (obj = obj[step]) !== undefined)
    ? obj
    : fallback;
