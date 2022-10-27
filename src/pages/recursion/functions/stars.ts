const starRecursiveFnCode = `function starRecursiveFn(count: number): string {
  // base case
  if (count === 1) return '*';

  // recursive case
  return '*' + starRecursiveFn(count - 1);
}`

function starRecursiveFn(count: number): string {
  // base case
  if (count === 1) return '*';

  // recursive case
  return '*' + starRecursiveFn(count - 1);
}

const starIterativeFnCode = `const starIterativeFn = (stars: number): string => {
  let result = '';
  for (let i = 0; i < stars; i++) {
    result = result + "*"
  } 
  return result;
}`

const starIterativeFn = (stars: number): string => {
  let result = '';
  for (let i = 0; i < stars; i++) {
    result = result + "*"
  } 
  return result;
}

export { starRecursiveFn, starIterativeFn, starRecursiveFnCode, starIterativeFnCode }