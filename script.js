let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180; // 3 menit dihitung dalam detik (3 * 60)
let timerInterval;

// Mengambil elemen HTML
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const qNumberDisplay = document.getElementById('question-number');
const qTextDisplay = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');

// Menjalankan fungsi start saat tombol mulai diklik
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    startTimer();
    showQuestion();
}

// Logika hitung mundur waktu kuis
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        displayTime();
        if (timeLeft <= 0) {
            timeLeft = 0;
            displayTime();
            endQuiz("Waktu Habis! Nyawamu telah habis.");
        }
    }, 1000);
}

// Memformat tampilan waktu (MM:SS)
function displayTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.innerText = `Waktu: ${minutes}:${seconds}`;
}

// Menampilkan pertanyaan kuis sesuai indeks saat ini
function showQuestion() {
    feedback.classList.add('hide');
    feedback.className = "feedback hide"; // Reset efek visual feedback
    
    // Validasi jika jumlah soal melampaui data kuis (Selesai 50 Soal)
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz("Selamat! Kamu berhasil menuntaskan semua soal.");
        return;
    }

    qNumberDisplay.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizQuestions.length}`;
    let currentQuestion = quizQuestions[currentQuestionIndex];
    qTextDisplay.innerText = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

// Validasi jawaban pilihan user
function checkAnswer(selectedIndex, clickedButton) {
    let currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.answer) {
        // MEKANISME JIKA JAWABAN BENAR
        score += 10;
        timeLeft += 5; // Tambah bonus 5 detik
        scoreDisplay.innerText = `Poin: ${score}`;
        displayTime();
        
        feedback.innerText = "Benar! +10 Poin, +5 Detik.";
        feedback.className = "feedback correct-flash";
        feedback.classList.remove('hide');

        // Kunci seluruh tombol agar user tidak melakukan klik ganda saat transisi
        Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
        
        // Warnai hijau pada tombol yang benar
        clickedButton.style.backgroundColor = "#dcfce7";
        clickedButton.style.borderColor = "#22c55e";
        clickedButton.style.color = "#15803d";

        // Beri jeda 1 detik agar pengguna melihat konfirmasi kebenaran jawaban
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1000);

    } else {
        // MEKANISME JIKA JAWABAN SALAH
        timeLeft -= 2; // Kurangi hukuman 2 detik
        if (timeLeft < 0) timeLeft = 0;
        displayTime();

        feedback.innerText = "Salah! Waktu dikurangi 2 detik. Coba opsi lain!";
        feedback.className = "feedback wrong-flash";
        feedback.classList.remove('hide');
        
        // Hanya matikan tombol yang salah dipilih, opsi lain tetap aktif
        clickedButton.disabled = true;
        clickedButton.style.backgroundColor = "#fee2e2";
        clickedButton.style.borderColor = "#ef4444";
        clickedButton.style.color = "#b91c1c";
        
        // Jika gara-gara salah jawab waktu mendadak menyentuh angka 0
        if (timeLeft === 0) {
            endQuiz("Waktu Habis!");
        }
    }
}

// Mengakhiri kuis
function endQuiz(statusText) {
    clearInterval(timerInterval);
    quizScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    document.getElementById('final-status').innerText = statusText;
    document.getElementById('final-score').innerText = `Total Poin Kamu: ${score} / ${quizQuestions.length * 10}`;
}
