//  p 선택자가 클릭되었을 때, 작동하는 코드
let paragraphElement = document.body.querySelector('p');

function changedParagraphText(event) {
    paragraphElement.textContent = 'Clicked';  // 설정한 변수(p)의 텍스트를 변경하는 함수
    console.log('paragraph clicked');
    console.log(event);
}

paragraphElement.addEventListener('click', changedParagraphText);
//변수.이벤트리스너(클릭,함수를 실행(괄호를 생략하는 이유는 이벤트가 발생하기도 전에 함수가 실행되기 때문))


// input에 발생하는 이벤트를 확인하는 함수
let inputElement = document.querySelector('input');

function retrieveUserIput(event) {
    // let enteredText = inputElement.value; // 내부변수 설정 = 외부변수.현재값
    let enteredText = event.target.value; // event.target = inputElement
    // let enteredText = event.data; => 위 2개와 다른 값
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener('input',retrieveUserIput);
// 변수.이벤트리스너(입력,현재값을 콘솔에 출력)