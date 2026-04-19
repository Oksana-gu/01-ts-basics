
function getFirstElementGeneric<T>(arr: T[]): T {
  return arr[0];
}

getFirstElementGeneric([1, 2, 3]);           // 1
getFirstElementGeneric(["a", "b", "c"]);     // "a"
getFirstElementGeneric([true, false, true]); // true

console.log(getFirstElementGeneric([1, 2, 3]));           // 1
console.log(getFirstElementGeneric(["a", "b", "c"]));     // "a"
console.log(getFirstElementGeneric([true, false, true])); // true