const productNameInputElement = document.getElementById('productName');
// 1. input을 변수로 설정
const remainingCharsElement = document.getElementById('remainingChars');
// 2. 수정되어야할 값을 랩핑하고 있는 span 변수 설정

const maxAllowedChars = productNameInputElement.maxLength;
// 7-1. input의 최대길이를 변수로 설정

function updateRemainingCharacters(event) {
// 4. 발생하는 이벤트를 파라미터로 하는 함수를 만들어줌
    const enteredText = event.target.value;
    // 5. 발생한 이벤트의 값을 변수로 설정
    const enteredTextLength = enteredText.length;
    // 6. 발생한 이벤트의 값.길이를 변수로 설정
    const remainingCharaters = maxAllowedChars - enteredTextLength;
    // 7-2. 최대 길이 - 발생한 이벤트의 값 길이를 변수로 설정
    remainingCharsElement.textContent = remainingCharaters;
    // 8. 수정되어야할 값을 랩핑하고 있는 span.텍스트를 7번에서 만든 변수로 설정
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
// 3. input 이벤트리스너('입력값', 함수명 )