const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter',
      },
      {
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 'France',
      },
      {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
      },
      {
        question: 'Which is the largest ocean on Earth?',
        options: [
          'Pacific Ocean',
          'Indian Ocean',
          'Atlantic Ocean',
          'Arctic Ocean',
        ],
        answer: 'Pacific Ocean',
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Cu', 'Fe'],
        answer: 'Au',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          'Pablo Picasso',
          'Vincent van Gogh',
          'Leonardo da Vinci',
          'Michelangelo',
        ],
        answer: 'Leonardo da Vinci',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
        answer: 'Mars',
      },
      {
        question: 'What is the largest species of shark?',
        options: [
          'Great White Shark',
          'Whale Shark',
          'Tiger Shark',
          'Hammerhead Shark',
        ],
        answer: 'Whale Shark',
      },
      {
        question: 'Which animal is known as the King of the Jungle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 'Lion',
      },
      {
        question: 'What is the smallest planet in our solar system?',
        options: ['Mercury', 'Venus', 'Mars', 'Pluto'],
        answer: 'Mercury',
      },
      {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
        answer: 'Albert Einstein',
      },
      {
        question: 'What is the capital of Japan?',
        options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'],
        answer: 'Tokyo',
      },
      {
        question: 'Which element has the chemical symbol O?',
        options: ['Oxygen', 'Gold', 'Silver', 'Iron'],
        answer: 'Oxygen',
      },
      {
        question: 'Who wrote "1984"?',
        options: ['George Orwell', 'Aldous Huxley', 'J.K. Rowling', 'Ernest Hemingway'],
        answer: 'George Orwell',
      },
      {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale',
      },
      {
        question: 'What is the main ingredient in traditional Japanese miso soup?',
        options: ['Tofu', 'Miso paste', 'Seaweed', 'Rice'],
        answer: 'Miso paste',
      },
      {
        question: 'What is the capital of Canada?',
        options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
        answer: 'Ottawa',
      },
      {
        question: 'Who is the author of "Harry Potter" series?',
        options: ['J.K. Rowling', 'J.R.R. Tolkien', 'George R.R. Martin', 'C.S. Lewis'],
        answer: 'J.K. Rowling',
      },
      {
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        answer: 'Diamond',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'South Korea', 'Thailand'],
        answer: 'Japan',
      },
      {
        question: 'What is the chemical symbol for sodium?',
        options: ['Na', 'S', 'N', 'K'],
        answer: 'Na',
      },
      {
        question: 'Who painted "Starry Night"?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Leonardo da Vinci'],
        answer: 'Vincent van Gogh',
      },
      {
        question: 'Which planet is known for its rings?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 'Saturn',
      },
      {
        question: 'What is the largest continent on Earth?',
        options: ['Africa', 'Asia', 'Europe', 'North America'],
        answer: 'Asia',
      },
      {
        question: 'Who invented the telephone?',
        options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
        answer: 'Alexander Graham Bell',
      },
      {
        question: 'What is the capital of Italy?',
        options: ['Rome', 'Milan', 'Venice', 'Florence'],
        answer: 'Rome',
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        answer: 'Carbon Dioxide',
      },
      {
        question: 'Who wrote "Pride and Prejudice"?',
        options: ['Jane Austen', 'Emily Brontë', 'Charles Dickens', 'Mark Twain'],
        answer: 'Jane Austen',
      },
      {
        question: 'What is the largest bone in the human body?',
        options: ['Femur', 'Humerus', 'Tibia', 'Fibula'],
        answer: 'Femur',
      }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const setRangeButton = document.getElementById('setRange');
const questionRangeInput = document.getElementById('questionRange');
const rangeContainer = document.getElementById('rangeContainer');

let quizSubset = [];
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomSubset(array, size) {
    const shuffled = [...array];
    shuffleArray(shuffled);
    return shuffled.slice(0, size);
}

function displayQuestion() {
    const questionData = quizSubset[currentQuestion];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `Question ${currentQuestion + 1} of ${quizSubset.length}: ${questionData.question}`;
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizSubset[currentQuestion].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: quizSubset[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizSubset[currentQuestion].answer,
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizSubset.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizSubset.length}!`;
}

function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
}
function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
        incorrectAnswersHtml += `
        <p>
            <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
            <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
            <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizSubset.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
    resultContainer.style.display = 'block';
}

function setQuizRange() {
    const range = parseInt(questionRangeInput.value, 10);
    if (range > 0 && range <= quizData.length) {
        quizSubset = getRandomSubset(quizData, range);
        shuffleArray(quizSubset);
        currentQuestion = 0;
        score = 0;
        incorrectAnswers = [];
        quizContainer.style.display = 'block';
        submitButton.style.display = 'inline-block';
        retryButton.style.display = 'none';
        showAnswerButton.style.display = 'none';
        setRangeButton.style.display = 'none'; // Hide the setRangeButton
        questionRangeInput.style.display = 'none'; // Hide the number input box
        rangeContainer.style.display = 'none'; // Hide the range container
        resultContainer.innerHTML = '';
        displayQuestion();
    } else {
        alert('Please enter a valid number of questions.');
    }
}

setRangeButton.addEventListener('click', setQuizRange);
submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);