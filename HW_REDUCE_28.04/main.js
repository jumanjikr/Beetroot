const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatten(arr) {
  if (Array.isArray(arr)) {
  return arr.reduce(function(done,curr){
    return done.concat(flatten(curr));
    }, []);
  } else {
    return arr;
  }
}

console.log(flatten(arr4))