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

var temp = [];

for (var i = 0; i < empList.length; i++) {
  for (var j = 0; j < i; j++)
    if (empList[i].empid < empList[j].empid) {
      temp[i] = empList[i];
      empList[i] = empList[j];
      empList[j] = temp[i];
    }
}

console.log(empList);
