// Game configuration
const players = [
    {
        name: "Lionel Messi",
        clubs: [
            { name: "Barcelona", years: "2000-2021" },
            { name: "Paris Saint-Germain", years: "2021-2023" },
            { name: "Inter Miami", years: "2023-present" }
        ],
        memorableMoment: "Scored 91 goals in a calendar year (2012)",
        awards: [
            "7 Ballon d'Or awards",
            "4 Champions League titles",
            "10 La Liga titles",
            "2022 FIFA World Cup winner"
        ],
        funFact: "Known for his left foot and incredible dribbling skills",
        imageClues: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Camp_Nou_aerial.jpg/800px-Camp_Nou_aerial.jpg", // Camp Nou
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/2022_FIFA_World_Cup_Final.jpg/800px-2022_FIFA_World_Cup_Final.jpg", // World Cup final
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ballon_d%27Or_2014.jpg/800px-Ballon_d%27Or_2014.jpg" // Ballon d'Or
        ]
    },
    {
        name: "Cristiano Ronaldo",
        clubs: [
            { name: "Manchester United", years: "2003-2009, 2021-2022" },
            { name: "Real Madrid", years: "2009-2018" },
            { name: "Juventus", years: "2018-2021" },
            { name: "Al-Nassr", years: "2023-present" }
        ],
        memorableMoment: "Scored a hat-trick against Spain in the 2018 World Cup",
        awards: [
            "5 Ballon d'Or awards",
            "5 Champions League titles",
            "3 Premier League titles",
            "2 La Liga titles"
        ],
        funFact: "Holds the record for most goals in Champions League history",
        imageClues: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png", // Real Madrid logo
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Est%C3%A1dio_da_Luz_2013.jpg/800px-Est%C3%A1dio_da_Luz_2013.jpg", // Estadio da Luz
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Champions_League_trophy.jpg/800px-Champions_League_trophy.jpg" // Champions League trophy
        ]
    },
    {
        name: "Neymar Jr",
        clubs: [
            { name: "Santos", years: "2009-2013" },
            { name: "Barcelona", years: "2013-2017" },
            { name: "Paris Saint-Germain", years: "2017-2023" },
            { name: "Al-Hilal", years: "2023-present" }
        ],
        memorableMoment: "Scored the winning goal in the 2016 Olympics final",
        awards: [
            "1 Champions League title",
            "2 La Liga titles",
            "5 Ligue 1 titles"
        ],
        funFact: "Known for his flamboyant playing style and dribbling skills",
        imageClues: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2016_Summer_Olympics_logo.svg/800px-2016_Summer_Olympics_logo.svg.png", // Olympics logo
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png", // PSG logo
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Barcelona_FC.svg/800px-Barcelona_FC.svg.png" // Barcelona logo
        ]
    },
    {
        name: "Zinedine Zidane",
        clubs: [
            { name: "Cannes", years: "1988-1992" },
            { name: "Bordeaux", years: "1992-1996" },
            { name: "Juventus", years: "1996-2001" },
            { name: "Real Madrid", years: "2001-2006" }
        ],
        memorableMoment: "Scored a volley in the 2002 Champions League final",
        awards: [
            "1 Ballon d'Or",
            "1 Champions League title",
            "2 Serie A titles",
            "1 La Liga title",
            "1998 World Cup winner"
        ],
        funFact: "Known for his elegant playing style and famous headbutt in the 2006 World Cup final",
        imageClues: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/1998_FIFA_World_Cup_Final.jpg/800px-1998_FIFA_World_Cup_Final.jpg", // 1998 World Cup
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png", // Real Madrid logo
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2006_FIFA_World_Cup_Final.jpg/800px-2006_FIFA_World_Cup_Final.jpg" // 2006 World Cup final
        ]
    },
    {
        name: "Kylian Mbappé",
        clubs: [
            { name: "Monaco", years: "2015-2017" },
            { name: "Paris Saint-Germain", years: "2017-present" }
        ],
        memorableMoment: "Scored a hat-trick in the 2022 World Cup final",
        awards: [
            "5 Ligue 1 titles",
            "2018 World Cup winner",
            "2022 World Cup Golden Boot"
        ],
        funFact: "Became the second teenager to score in a World Cup final after Pelé",
        imageClues: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png", // PSG logo
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2018_FIFA_World_Cup_Final.jpg/800px-2018_FIFA_World_Cup_Final.jpg", // 2018 World Cup
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2022_FIFA_World_Cup_Final.jpg/800px-2022_FIFA_World_Cup_Final.jpg" // 2022 World Cup
        ]
    }
    // Add more players following the same structure
];

// Game state
let currentPlayer;
let currentClueIndex = 0;
let attemptsLeft = 3;
let score = 0;
let gameActive = true;
let timer;
let timeLeft = 60;
let usedPlayers = new Set();

// DOM elements
const clueText = document.getElementById('clue-text');
const currentClueDisplay = document.getElementById('current-clue');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const feedbackDisplay = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const nextPlayerButton = document.getElementById('next-player');
const hintButton = document.getElementById('hint-button');
const hintText = document.getElementById('hint-text');
const attemptDots = document.querySelectorAll('.attempt-dot');
const clueImage = document.getElementById('clue-image');

// Initialize game
function initGame() {
    score = 0;
    usedPlayers.clear();
    updateScore();
    startNewRound();
    setupEventListeners();
}

// Get a random player that hasn't been used recently
function getRandomPlayer() {
    const availablePlayers = players.filter(player => !usedPlayers.has(player.name));
    
    if (availablePlayers.length === 0) {
        usedPlayers.clear();
        return players[Math.floor(Math.random() * players.length)];
    }
    
    const player = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    usedPlayers.add(player.name);
    
    if (usedPlayers.size > 5) {
        const oldestPlayer = Array.from(usedPlayers)[0];
        usedPlayers.delete(oldestPlayer);
    }
    
    return player;
}

// Start a new round
function startNewRound() {
    currentPlayer = getRandomPlayer();
    currentClueIndex = 0;
    attemptsLeft = 3;
    timeLeft = 60;
    gameActive = true;
    
    updateAttemptsDisplay();
    showCurrentClue();
    startTimer();
    resetInput();
    hideFeedback();
    hideHint();
}

// Show current clue
function showCurrentClue() {
    currentClueDisplay.textContent = currentClueIndex + 1;
    
    switch (currentClueIndex) {
        case 0:
            const clubsText = currentPlayer.clubs.map(club => 
                `${club.name} (${club.years})`
            ).join(", ");
            clueText.textContent = `Played for: ${clubsText}`;
            break;
        case 1:
            clueText.textContent = `Memorable moment: ${currentPlayer.memorableMoment}`;
            break;
        case 2:
            clueText.textContent = `Awards: ${currentPlayer.awards.join(", ")}`;
            break;
    }

    // Show image clue
    if (currentPlayer.imageClues && currentPlayer.imageClues[currentClueIndex]) {
        clueImage.src = currentPlayer.imageClues[currentClueIndex];
        clueImage.style.display = 'block';
    } else {
        clueImage.style.display = 'none';
    }
}

// Handle guess submission
function handleGuess() {
    if (!gameActive) return;
    
    const guess = guessInput.value.trim().toLowerCase();
    const correctName = currentPlayer.name.toLowerCase();
    
    // Flexible name matching
    if (isNameMatch(guess, correctName)) {
        handleCorrectGuess();
    } else {
        handleIncorrectGuess();
    }
}

// Check if names match with flexible matching
function isNameMatch(guess, correctName) {
    // Remove common suffixes and prefixes
    const cleanGuess = guess.replace(/\b(jr|jr\.|junior|sr|sr\.|senior)\b/gi, '').trim();
    const cleanCorrect = correctName.replace(/\b(jr|jr\.|junior|sr|sr\.|senior)\b/gi, '').trim();
    
    // Check exact match
    if (cleanGuess === cleanCorrect) return true;
    
    // Check if guess is contained in correct name or vice versa
    if (cleanCorrect.includes(cleanGuess) || cleanGuess.includes(cleanCorrect)) return true;
    
    // Check for common variations
    const variations = {
        'neymar': ['neymar jr', 'neymar junior'],
        'ronaldo': ['cristiano ronaldo', 'cr7'],
        'messi': ['lionel messi'],
        'mbappe': ['kylian mbappe', 'mbappé'],
        'zidane': ['zinedine zidane', 'zizou']
    };
    
    for (const [base, vars] of Object.entries(variations)) {
        if (vars.includes(cleanGuess) && cleanCorrect.includes(base)) return true;
        if (vars.includes(cleanCorrect) && cleanGuess.includes(base)) return true;
    }
    
    return false;
}

// Handle correct guess
function handleCorrectGuess() {
    score++;
    updateScore();
    showFeedback("Correct! 🎉", true);
    gameActive = false;
    clearTimer();
}

// Handle incorrect guess
function handleIncorrectGuess() {
    attemptsLeft--;
    updateAttemptsDisplay();
    
    if (attemptsLeft === 0) {
        if (currentClueIndex < 2) {
            currentClueIndex++;
            attemptsLeft = 3;
            updateAttemptsDisplay();
            showCurrentClue();
            showFeedback("Moving to next clue...", false);
        } else {
            showFeedback(`Game Over! The player was ${currentPlayer.name}`, false);
            gameActive = false;
            clearTimer();
        }
    } else {
        showFeedback("Incorrect! Try again.", false);
    }
    
    resetInput();
}

// Update attempts display
function updateAttemptsDisplay() {
    attemptDots.forEach((dot, index) => {
        dot.classList.toggle('used', index >= attemptsLeft);
    });
}

// Show feedback message
function showFeedback(message, isSuccess) {
    feedbackDisplay.textContent = message;
    feedbackDisplay.style.color = isSuccess ? 'var(--success-color)' : 'var(--error-color)';
    feedbackDisplay.classList.add('show');
}

// Hide feedback
function hideFeedback() {
    feedbackDisplay.classList.remove('show');
}

// Reset input field
function resetInput() {
    guessInput.value = '';
    guessInput.focus();
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Start timer
function startTimer() {
    clearTimer();
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearTimer();
            showFeedback(`Time's up! The player was ${currentPlayer.name}`, false);
            gameActive = false;
        }
    }, 1000);
}

// Clear timer
function clearTimer() {
    clearInterval(timer);
}

// Show hint
function showHint() {
    if (!gameActive) return;
    
    hintText.textContent = currentPlayer.funFact;
    hintText.classList.remove('hidden');
}

// Hide hint
function hideHint() {
    hintText.classList.add('hidden');
}

// Setup event listeners
function setupEventListeners() {
    submitButton.addEventListener('click', handleGuess);
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleGuess();
    });
    nextPlayerButton.addEventListener('click', startNewRound);
    hintButton.addEventListener('click', showHint);
}

// Start the game
initGame(); 