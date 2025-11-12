
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answeredQuestions = [];
let quizData = [];

$(document).ready(function() {
    AOS.init();
    initQuiz();
    initBackToTop();
});

function initQuiz() {
    // Shuffle questions for variety
    quizData = shuffleArray([...quizQuestions]);
    
    $('#startQuizBtn').on('click', startQuiz);
    $('#submitAnswerBtn').on('click', submitAnswer);
    $('#nextBtn').on('click', nextQuestion);
    $('#restartQuizBtn').on('click', restartQuiz);
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answeredQuestions = [];
    
    $('#startScreen').fadeOut(300, function() {
        $('#quizScreen').fadeIn(300);
        loadQuestion();
    });
}

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    $('#progressBar').css('width', progress + '%');
    $('#currentQuestion').text(currentQuestionIndex + 1);
    $('#totalQuestions').text(quizData.length);
    $('#currentScore').text(score);
    
    // Load question
    $('#questionText').text(question.question);
    
    // Load options
    const optionsContainer = $('#optionsContainer');
    optionsContainer.empty();
    
    question.options.forEach((option, index) => {
        const optionHtml = `
            <div class="quiz-option" data-option="${index}">
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    </div>
                    <div class="flex-grow-1">${option}</div>
                </div>
            </div>
        `;
        optionsContainer.append(optionHtml);
    });
    
    // Add option click handlers
    $('.quiz-option').on('click', function() {
        if (answeredQuestions[currentQuestionIndex]) return; // Already answered
        
        $('.quiz-option').removeClass('selected');
        $(this).addClass('selected');
        selectedAnswer = $(this).data('option');
        
        $('#submitAnswerBtn').show().prop('disabled', false);
    });
    
    // Reset UI
    $('#feedbackContainer').hide();
    $('#submitAnswerBtn').show().prop('disabled', true);
    $('#nextBtn').hide();
    selectedAnswer = null;
    
    // If question already answered, show the answer
    if (answeredQuestions[currentQuestionIndex]) {
        showPreviousAnswer();
    }
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    // Store answer
    answeredQuestions[currentQuestionIndex] = {
        selected: selectedAnswer,
        correct: isCorrect
    };
    
    // Update score
    if (isCorrect) {
        score++;
        $('#currentScore').text(score);
    }
    
    // Show feedback
    showFeedback(isCorrect, question);
    
    // Disable options
    $('.quiz-option').css('pointer-events', 'none');
    
    // Highlight correct and incorrect answers
    $('.quiz-option').each(function() {
        const optionIndex = $(this).data('option');
        if (optionIndex === question.correct) {
            $(this).addClass('correct');
        } else if (optionIndex === selectedAnswer && !isCorrect) {
            $(this).addClass('incorrect');
        }
    });
    
    // Update buttons
    $('#submitAnswerBtn').hide();
    $('#nextBtn').show();
}

function showFeedback(isCorrect, question) {
    const feedbackContainer = $('#feedbackContainer');
    const feedbackMessage = $('#feedbackMessage');
    const explanationContainer = $('#explanationContainer');
    const explanationText = $('#explanationText');
    
    if (isCorrect) {
        feedbackMessage.removeClass('alert-danger').addClass('alert-success');
        feedbackMessage.html('<i class="fas fa-check-circle me-2"></i><strong>Correct!</strong> Great job!');
    } else {
        feedbackMessage.removeClass('alert-success').addClass('alert-danger');
        feedbackMessage.html('<i class="fas fa-times-circle me-2"></i><strong>Incorrect.</strong> The correct answer is: ' + question.options[question.correct]);
    }
    
    // Show explanation
    if (question.explanation) {
        explanationText.text(question.explanation);
        explanationContainer.show();
    } else {
        explanationContainer.hide();
    }
    
    feedbackContainer.fadeIn(300);
}

function showPreviousAnswer() {
    const answer = answeredQuestions[currentQuestionIndex];
    const question = quizData[currentQuestionIndex];
    
    // Highlight the selected and correct answers
    $('.quiz-option').each(function() {
        const optionIndex = $(this).data('option');
        if (optionIndex === question.correct) {
            $(this).addClass('correct');
        }
        if (optionIndex === answer.selected && !answer.correct) {
            $(this).addClass('incorrect');
        }
        if (optionIndex === answer.selected) {
            $(this).addClass('selected');
        }
    });
    
    $('.quiz-option').css('pointer-events', 'none');
    
    showFeedback(answer.correct, question);
    
    $('#submitAnswerBtn').hide();
    $('#nextBtn').show();
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Calculate statistics
    const totalQuestions = quizData.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - score;
    const accuracy = Math.round((score / totalQuestions) * 100);
    
    // Update results screen
    $('#finalScore').text(score);
    $('#finalTotal').text(totalQuestions);
    $('#correctAnswers').text(correctAnswers);
    $('#incorrectAnswers').text(incorrectAnswers);
    $('#accuracyRate').text(accuracy + '%');
    $('#finalProgressBar').css('width', accuracy + '%');
    
    // Determine result message
    let message = '';
    let description = '';
    let iconClass = 'fa-trophy text-warning';
    
    if (accuracy >= 90) {
        message = 'Excellent! You\'re a cultural expert!';
        description = 'You have an impressive knowledge of world cultures!';
        iconClass = 'fa-trophy text-warning';
    } else if (accuracy >= 70) {
        message = 'Great Job! Well done!';
        description = 'You have a solid understanding of world cultures!';
        iconClass = 'fa-medal text-success';
    } else if (accuracy >= 50) {
        message = 'Good Effort! Keep Learning!';
        description = 'You\'re on the right track. Explore more to improve!';
        iconClass = 'fa-star text-primary';
    } else {
        message = 'Keep Exploring!';
        description = 'There\'s so much to discover about world cultures!';
        iconClass = 'fa-compass text-info';
    }
    
    $('#resultMessage').text(message);
    $('#resultDescription').text(description);
    $('#resultIcon').removeClass().addClass('fas fa-5x mb-3 ' + iconClass);
    
    // Show results screen
    $('#quizScreen').fadeOut(300, function() {
        $('#resultsScreen').fadeIn(300);
        
        // Trigger confetti if score is good
        if (accuracy >= 70) {
            celebrateWithConfetti();
        }
    });
}

function restartQuiz() {
    $('#resultsScreen').fadeOut(300, function() {
        $('#startScreen').fadeIn(300);
    });
}

// Confetti Celebration (+2% bonus)
function celebrateWithConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = $('#backToTop');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });
    
    backToTopBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
}

// Add custom styles for quiz options
const quizStyles = document.createElement('style');
quizStyles.textContent = `
    .option-letter {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    .quiz-option.selected .option-letter {
        background: var(--secondary-color);
        transform: scale(1.1);
    }
    
    .quiz-option.correct .option-letter {
        background: var(--success-color);
    }
    
    .quiz-option.incorrect .option-letter {
        background: var(--danger-color);
    }
    
    .stat-card {
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(quizStyles);