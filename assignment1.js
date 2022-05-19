const array1 = [1, 3, 6, 2, 4];
const array2 = [2, 0, 4, 1, 2];

var sum = [];
var array3 = [];
var flag = false;
for (let key in array1) {
  sum[key] = array1[key] + array2[key];
}

for (var key in sum) {
  a = array3.indexOf(sum[key]);
  if (a == -1) {
    array3.push(sum[key]);
  }
}
console.log(array3);
