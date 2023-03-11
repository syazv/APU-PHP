// function getAge(YOB) {
//   const d = new Date();
//   let currentYear = d.getFullYear();
//   let age = currentYear - Number(YOB);
//   console.log(age);
//   return age;
// }

var getAge = function (YOB) {
  return new Date().getFullYear - YOB;
}
