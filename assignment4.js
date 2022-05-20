var empList = [
  {
    name: "Jhon Doe",
    dept: "php",
    empid: 5,
  },
  {
    name: "Paul Smith",
    dept: "MERN",
    empid: 4,
  },
  {
    dept: "SEO",
    empid: 7,
    name: "Tom Smith",
  },
];

// 1. Method
var temp = [];

for (var i = 0; i < empList.length; i++) {
  for (var j = 0; j < i; j++)
    if (empList[i].empid < empList[j].empid) {
      temp[i] = empList[i];
      empList[i] = empList[j];
      empList[j] = temp[i];
    }
}

// 2 Method

// empList.sort(function (a, b) {
//   return a.empid - b.empid;
// });

console.log(empList);
