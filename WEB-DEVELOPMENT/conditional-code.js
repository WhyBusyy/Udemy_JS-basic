const myName = 'Max';

if (myName==='Max') { // 불리언값은 if조건문을 사용하기위한 중요한 프로그래밍
console.log('Hello!');
}

// 비교 연산자와 논리 연산자
// 비교연산자 ==,===,>,<,>=,<=,!,!=,!==
// 논리연산자 &&(and), ||(or)

let isLoggedIn = true;  //질문
if(isLoggedIn) {         //대답
    console.log('User is logged in!');
}

if(!isLoggedIn) {
    console.log('User is not logged in!');
}

const enteredUserName = 'Maximilian';
if(enteredUserName) {
    console.log('Input is valid!')
}
// {if} 조건과 같이 자바 스크립트가 불리언을 원하는 위치에서 불리언이 아닌 값을 제공하면
// 자바 스크립트는 기본적으로 제공된 값을 불리언으로 변환하려고 시도
// 빈 문자열이나 숫자0은 기본적으로 거짓 처리 