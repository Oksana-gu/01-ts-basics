
function getFirstElementGeneric<T>(arr: T[]): T {
  return arr[0];
}

getFirstElementGeneric<number>([1, 2, 3]);           // 1
getFirstElementGeneric<string>(["a", "b", "c"]);     // "a"
getFirstElementGeneric<boolean>([true, false, true]); // true

console.log(getFirstElementGeneric<number>([1, 2, 3]));           // 1
console.log(getFirstElementGeneric<string>(["a", "b", "c"]));     // "a"
console.log(getFirstElementGeneric<boolean>([true, false, true])); // true