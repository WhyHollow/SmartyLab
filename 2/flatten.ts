/**
 * @param {Array<number | any[]>} arr
 * @param {number} depth
 * @return {number[]}
 */
const flatten = (arr: Array<number | any[]>, depth: number): number[] => {
  const helper = (arr: Array<number | any[]>, currentDepth: number): number[] => {

    if (currentDepth >= depth) return arr as number[];

    return arr.reduce((acc: number[], item: number | any[]) => {
      if (Array.isArray(item)) {
        acc.push(...helper(item, currentDepth + 1));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  return helper(arr, 0);
};

console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));

console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));

console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));
