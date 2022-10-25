const starRecursiveFnCode = `function starRecursiveFn(stars: number, starsString = ''): string {
  // base case
  if (stars === 0) return starsString;

  // recursive case
  return starRecursiveFn(stars-1,starsString+'*');
}`

function starRecursiveFn(stars: number, starsString = ''): string {
  // base case
  if (stars === 0) return starsString;

  // recursive case
  return starRecursiveFn(stars-1,starsString+'*');
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