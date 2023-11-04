// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculatorSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculatorSum);

// Second Example: Hightlight Link

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// Third Example: Display user data

const dummyUserData = {
    name: 'Max',
    lastName: 'Samuel',
    age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    
    outputDataElement.innerHTML = '';
    
    for (const key in dummyUserData) {
        const newUserdataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserdataListItemElement.textContent = outputText;
        outputDataElement.append(newUserdataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

//  fourth Example: Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if(rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListElement  = document.createElement('li');
        const outputText  = 'Roll' + numberOfRolls + ':' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('#output-total-rolls');
    const outputTargetNumberElement = document.getElementById('#output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);