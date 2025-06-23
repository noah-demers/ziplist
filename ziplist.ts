function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  return list1
    .map((item: T, index: number): (T | U)[] => [item, list2[index]])
    .reduce((acc: (T | U)[], pair: (T | U)[]) => acc.concat(pair), []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]


