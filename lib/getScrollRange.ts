/**
 * @brief Get the scroll range for items in an inteval between 0 and 1 of scrolling motion value
 * @param index current index of the item
 * @param length number of items
 * @param stepFraction the small the step the bigger the middle part of the range, defaults to 0.5
 * @returns indices of the start, end and middle parts of the range or range array [start, start + step, end - step, end]
 */

export function getScrollRange(
  index: number,
  length: number,
  stepFraction: number = 0.5
) {
  const start = index / length;
  const end = (index + 1) / length;
  const step = (end - start) * stepFraction;
  const rangeArray = [start, start + step, end - step, end];

  return {
    start,
    end,
    step,
    rangeArray,
  };
}
