let age = 32;
let userName = "Max" + "other string"; // 문자열이 길어질때 +를 사용하면 다음 줄도 문자열로 인식
let hobbies = ["Sport", "Cooking", "Reading"];
let job = {
  title: "Developoer",
  palce: "New York",
  salary: 50000,
};

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}
// function calculateAdultYears(userAge) {
//  let result;  
//  result = userAge - 18;
//  return result;
// } === 위 함수와 동일한 값을 반환

adultYears=calculateAdultYears(age);
alert(adultYears);

age = 45;
adultYears=calculateAdultYears(age);
alert(adultYears);

