function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let i = arr.length - 1;
  let sum = 0;
  while (i >= 0) {
    sum += arr[i];
    i--;
  }
  return sum;
}

function sumRecursive(arr, i = 0) {
  if (i < arr.length) {
    return arr[i] + sumRecursive(arr, i + 1);
  }

  return 0;
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (a, b) {
    return a + b;
  }, 0);
}

const arr = [1, 2, 3, 4];
console.log(sumFor(arr));
console.log(sumWhile(arr));
console.log(sumRecursive(arr));
console.log(sumTheSimpleWay(arr));
