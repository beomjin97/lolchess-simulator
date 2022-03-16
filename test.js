// <시너지 카운팅/>
let arr1 = [1, 1, 2, 4, 2, 2, 5, 4, 5, 5];
const arr2 = [1, 3, 2, 4];

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

arr1 = [...arr1, ...arr2].map((unit) => {
  switch (unit) {
    case 1:
      num1 = num1 + 1;
      break;
    case 2:
      num2 = num2 + 1;
      break;
    case 3:
      num3 = num3 + 1;
      break;
    case 4:
      num4 = num4 + 1;
      break;
    case 5:
      num5 = num5 + 1;
      break;
    default:
      num1 = "invaild value";
  }
  return null;
});

console.log(
  `1: ${num1}개, 2: ${num2}개, 3: ${num3}개, 4: ${num4}개, 5: ${num5}개`
);
// <시너지 카운팅/>
