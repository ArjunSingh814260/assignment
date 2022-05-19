var fruitsDb = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "grapes",
  "avacado",
  "strawberry",
];
var mixFruitArr = ["grapes", "cabbage", "tomato", "banana", "avacado"];

const filterFruits = (mixFruitArr) => {
  var result = [];
  for (let key in fruitsDb) {
    for (let innerkey in mixFruitArr) {
      if (fruitsDb[key] == mixFruitArr[innerkey]) {
        result.push(mixFruitArr[innerkey]);
      }
    }
  }
  return result;
};
console.log(filterFruits(mixFruitArr));
