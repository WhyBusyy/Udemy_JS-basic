for (let i = 0; i < 10; i++) // 반복문이 실행되는 시간 
{ console.log(i);
} // if, function을 통해 동작 입력


const users =  ['Max', 'Anna', 'Joel'];

for (const user of users) {
    console.log(user);
} // 배열의 요소마다 반복문을 실행


const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]); //객체 요소명과 값을 출력
}


let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
    // confirm() 내장함수는 alert의 대용으로 사용자에게 불리언값을 전달받음
} //while문은 내가 원하는 조건에서만 반복하는 반복문을 작성가능

console.log('Done!');