// Game state
let score = 0;
let timer = 60;
let timerInterval;
let currentPlayer;
let attempts = 0;
let currentClueIndex = 0;
let usedPlayers = new Set();
let correctlyGuessedPlayers = new Set(); // Track correctly guessed players

// Player data
const players = [
    // Original players (minus duplicates)
    {
        name: "Lionel Messi",
        nationality: "Argentina",
        club: "Inter Miami",
        clues: [
            "Won World Cup with Argentina in 2022",
            "Won 8 Ballon d'Or awards",
            "Barcelona's all-time top scorer",
            "Known for his left foot and dribbling"
        ]
    },
    {
        name: "Cristiano Ronaldo",
        nationality: "Portugal",
        club: "Al-Nassr",
        clues: [
            "Real Madrid's all-time top scorer",
            "Won 5 Champions League titles",
            "Known for his athleticism and headers",
            "Has won league titles in England, Spain, and Italy"
        ]
    },
    {
        name: "Kylian Mbappé",
        nationality: "France",
        club: "Paris Saint-Germain",
        clues: [
            "Won World Cup with France in 2018",
            "PSG's all-time top scorer",
            "Known for his speed and finishing",
            "Scored a hat-trick in 2022 World Cup final"
        ]
    },
    {
        name: "Erling Haaland",
        nationality: "Norway",
        club: "Manchester City",
        clues: [
            "Premier League record for most goals in a season",
            "Known for his strength and finishing",
            "Son of former Manchester City player",
            "Won Champions League with Manchester City"
        ]
    },
    {
        name: "Kevin De Bruyne",
        nationality: "Belgium",
        club: "Manchester City",
        clues: [
            "Known for his vision and passing",
            "Won Champions League with Manchester City",
            "Has a distinctive celebration",
            "Played for Wolfsburg before Manchester City"
        ]
    },
    {
        name: "Rafael Leão",
        nationality: "Portugal",
        club: "AC Milan",
        clues: [
            "Won Serie A with AC Milan",
            "Known for his speed and dribbling",
            "Won Serie A MVP",
            "Started at Sporting CP"
        ]
    },
    {
        name: "Mikel Merino",
        nationality: "Spain",
        club: "Real Sociedad",
        clues: [
            "Known for his work rate and passing",
            "Part of Spain's Euro 2020 squad",
            "Former Newcastle player",
            "Real Sociedad's midfield leader"
        ]
    },
    {
        name: "Jeremie Frimpong",
        nationality: "Netherlands",
        club: "Bayer Leverkusen",
        clues: [
            "Known for his speed and attacking play",
            "Can play as right-back or right winger",
            "Part of Netherlands' squad",
            "Former Celtic player"
        ]
    },
    {
        name: "Nicolò Barella",
        nationality: "Italy",
        club: "Inter Milan",
        clues: [
            "Won Euro 2020 with Italy",
            "Known for his energy and passing",
            "Inter Milan's midfield leader",
            "Started at Cagliari"
        ]
    },
    {
        name: "Moussa Diaby",
        nationality: "France",
        club: "Aston Villa",
        clues: [
            "Known for his speed and dribbling",
            "Former Bayer Leverkusen player",
            "Part of France's squad",
            "Can play as winger or forward"
        ]
    },
    {
        name: "Takefusa Kubo",
        nationality: "Japan",
        club: "Real Sociedad",
        clues: [
            "Known as 'Japanese Messi'",
            "Started at Barcelona's academy",
            "Part of Japan's World Cup squad",
            "Can play as winger or attacking midfielder"
        ]
    },
    {
        name: "Ismaël Bennacer",
        nationality: "Algeria",
        club: "AC Milan",
        clues: [
            "Won Africa Cup of Nations with Algeria",
            "Known for his passing and control",
            "AC Milan's midfield controller",
            "Former Arsenal player"
        ]
    },
    {
        name: "Jonathan David",
        nationality: "Canada",
        club: "Lille",
        clues: [
            "Canada's all-time top scorer",
            "Known for his finishing and movement",
            "Won Ligue 1 with Lille",
            "Can play as striker or second striker"
        ]
    },
    {
        name: "Dominik Szoboszlai",
        nationality: "Hungary",
        club: "Liverpool",
        clues: [
            "Hungary's captain",
            "Known for his free-kicks and long shots",
            "Former RB Leipzig player",
            "Can play as winger or attacking midfielder"
        ]
    },
    // Real Madrid and Barcelona players (minus duplicates)
    {
        name: "Vinicius Junior",
        nationality: "Brazil",
        club: "Real Madrid",
        clues: [
            "Scored winning goal in 2022 Champions League final",
            "Known for his dribbling and flair",
            "Won Champions League with Real Madrid",
            "Has a distinctive celebration"
        ]
    },
    {
        name: "Luka Modrić",
        nationality: "Croatia",
        club: "Real Madrid",
        clues: [
            "Won Ballon d'Or in 2018",
            "Croatia's captain",
            "Known for his passing and control",
            "Won multiple Champions League titles"
        ]
    },
    {
        name: "Robert Lewandowski",
        nationality: "Poland",
        club: "Barcelona",
        clues: [
            "Bundesliga's all-time top foreign scorer",
            "Known for his finishing and movement",
            "Won Champions League with Bayern Munich",
            "Poland's all-time top scorer"
        ]
    },
    {
        name: "Frenkie de Jong",
        nationality: "Netherlands",
        club: "Barcelona",
        clues: [
            "Known for his passing and dribbling",
            "Won Eredivisie with Ajax",
            "Part of Netherlands' squad",
            "Can play as midfielder or center-back"
        ]
    },
    {
        name: "Rodrygo",
        nationality: "Brazil",
        club: "Real Madrid",
        clues: [
            "Known for his versatility and finishing",
            "Can play as winger or forward",
            "Won Champions League with Real Madrid",
            "Scored crucial goals in 2022 Champions League"
        ]
    },
    {
        name: "Toni Kroos",
        nationality: "Germany",
        club: "Retired",
        clues: [
            "Won World Cup with Germany in 2014",
            "Known for his passing and control",
            "Won multiple Champions League titles",
            "Retired after Euro 2024"
        ]
    },
    {
        name: "Gavi",
        nationality: "Spain",
        club: "Barcelona",
        clues: [
            "Won Golden Boy award",
            "Known for his energy and technique",
            "Part of Spain's squad",
            "Barcelona's young midfield star"
        ]
    },
    {
        name: "Federico Valverde",
        nationality: "Uruguay",
        club: "Real Madrid",
        clues: [
            "Known for his energy and long shots",
            "Can play as midfielder or winger",
            "Won Champions League with Real Madrid",
            "Uruguay's midfield leader"
        ]
    },
    // Retired Legends
    {
        name: "Zinedine Zidane",
        nationality: "France",
        club: "Retired",
        clues: [
            "Won World Cup with France in 1998",
            "Scored a famous volley in 2002 Champions League final",
            "Known for his elegance and technique",
            "Managed Real Madrid to three consecutive Champions League titles"
        ]
    },
    {
        name: "Ronaldinho",
        nationality: "Brazil",
        club: "Retired",
        clues: [
            "Won World Cup with Brazil in 2002",
            "Known for his smile and entertaining style",
            "Won Ballon d'Or in 2005",
            "Played for Barcelona and AC Milan"
        ]
    },
    {
        name: "Andrés Iniesta",
        nationality: "Spain",
        club: "Retired",
        clues: [
            "Scored winning goal in 2010 World Cup final",
            "Known for his vision and passing",
            "Won multiple Champions League titles with Barcelona",
            "Played in Japan before retirement"
        ]
    },
    {
        name: "Xavi",
        nationality: "Spain",
        club: "Retired",
        clues: [
            "Won World Cup and two Euros with Spain",
            "Known for his passing and control",
            "Former Barcelona captain",
            "Currently managing Barcelona"
        ]
    },
    {
        name: "Andrea Pirlo",
        nationality: "Italy",
        club: "Retired",
        clues: [
            "Won World Cup with Italy in 2006",
            "Known for his free-kicks and passing",
            "Played for AC Milan and Juventus",
            "Had a distinctive beard and calm playing style"
        ]
    },
    {
        name: "Thierry Henry",
        nationality: "France",
        club: "Retired",
        clues: [
            "Arsenal's all-time top scorer",
            "Won World Cup with France in 1998",
            "Known for his speed and finishing",
            "Currently working as a coach"
        ]
    },
    {
        name: "Steven Gerrard",
        nationality: "England",
        club: "Retired",
        clues: [
            "Liverpool legend and former captain",
            "Known for his leadership and long-range goals",
            "Never won the Premier League",
            "Currently managing in Saudi Arabia"
        ]
    },
    {
        name: "Didier Drogba",
        nationality: "Ivory Coast",
        club: "Retired",
        clues: [
            "Chelsea's all-time top scorer in European competitions",
            "Won Champions League with Chelsea in 2012",
            "Known for his strength and big-game performances",
            "Helped bring peace to his country"
        ]
    },
    {
        name: "Iker Casillas",
        nationality: "Spain",
        club: "Retired",
        clues: [
            "Won World Cup with Spain in 2010",
            "Real Madrid's most capped player",
            "Known for his reflexes and leadership",
            "Suffered a heart attack during training"
        ]
    },
    {
        name: "Carles Puyol",
        nationality: "Spain",
        club: "Retired",
        clues: [
            "Barcelona's legendary captain",
            "Known for his leadership and defensive skills",
            "Had distinctive long curly hair",
            "Won multiple Champions League titles"
        ]
    },
    // Active Center-Backs
    {
        name: "Virgil van Dijk",
        nationality: "Netherlands",
        club: "Liverpool",
        clues: [
            "Won UEFA Men's Player of the Year in 2019",
            "Known for his strength and leadership",
            "Liverpool captain",
            "Recovered from serious knee injury"
        ]
    },
    {
        name: "Rúben Dias",
        nationality: "Portugal",
        club: "Manchester City",
        clues: [
            "Won Premier League Player of the Season 2020-21",
            "Known for his defensive organization",
            "Manchester City's defensive leader",
            "Has a younger brother who also plays football"
        ]
    },
    {
        name: "Marquinhos",
        nationality: "Brazil",
        club: "Paris Saint-Germain",
        clues: [
            "PSG's captain",
            "Can play as center-back or defensive midfielder",
            "Known for his leadership and versatility",
            "Started his career at Corinthians"
        ]
    },
    {
        name: "Ronald Araújo",
        nationality: "Uruguay",
        club: "Barcelona",
        clues: [
            "Barcelona's defensive leader",
            "Known for his speed and strength",
            "Can play as right-back",
            "Started his career at Boston River"
        ]
    },
    {
        name: "William Saliba",
        nationality: "France",
        club: "Arsenal",
        clues: [
            "Arsenal's defensive rock",
            "Known for his composure and passing",
            "Spent time on loan at Marseille",
            "Part of France's World Cup squad"
        ]
    },
    {
        name: "Alessandro Bastoni",
        nationality: "Italy",
        club: "Inter Milan",
        clues: [
            "Inter Milan's young defensive leader",
            "Known for his left foot and passing",
            "Won Serie A with Inter",
            "Part of Italy's Euro 2020 winning squad"
        ]
    },
    {
        name: "Josko Gvardiol",
        nationality: "Croatia",
        club: "Manchester City",
        clues: [
            "Most expensive defender in history",
            "Known for his ball-playing ability",
            "Can play as left-back",
            "Part of Croatia's World Cup squad"
        ]
    },
    {
        name: "Antonio Rüdiger",
        nationality: "Germany",
        club: "Real Madrid",
        clues: [
            "Real Madrid's defensive leader",
            "Known for his aggressive style",
            "Former Chelsea player",
            "Has a distinctive running style"
        ]
    },
    {
        name: "Matthijs de Ligt",
        nationality: "Netherlands",
        club: "Bayern Munich",
        clues: [
            "Youngest Ajax captain ever",
            "Known for his leadership at young age",
            "Played for Juventus before Bayern",
            "Won Golden Boy award in 2018"
        ]
    },
    {
        name: "Éder Militão",
        nationality: "Brazil",
        club: "Real Madrid",
        clues: [
            "Real Madrid's versatile defender",
            "Can play as right-back",
            "Known for his speed and recovery",
            "Won Champions League with Real Madrid"
        ]
    },
    // Active Midfielders (minus duplicates)
    {
        name: "Bruno Fernandes",
        nationality: "Portugal",
        club: "Manchester United",
        clues: [
            "Manchester United's captain",
            "Known for his creativity and goals",
            "Won Europa League with Manchester United",
            "Has a distinctive celebration"
        ]
    },
    {
        name: "Martin Ødegaard",
        nationality: "Norway",
        club: "Arsenal",
        clues: [
            "Arsenal's captain",
            "Known for his vision and technique",
            "Former Real Madrid player",
            "Started career at Strømsgodset"
        ]
    },
    {
        name: "Declan Rice",
        nationality: "England",
        club: "Arsenal",
        clues: [
            "Most expensive British player",
            "Known for his defensive work",
            "Former West Ham captain",
            "Part of England's Euro 2020 squad"
        ]
    },
    {
        name: "Enzo Fernández",
        nationality: "Argentina",
        club: "Chelsea",
        clues: [
            "Won World Cup with Argentina in 2022",
            "Known for his passing range",
            "Won Young Player of the Tournament",
            "Most expensive Premier League signing at the time"
        ]
    },
    {
        name: "Aurélien Tchouaméni",
        nationality: "France",
        club: "Real Madrid",
        clues: [
            "Known for his defensive work",
            "Can play as center-back",
            "Part of France's World Cup squad",
            "Former Monaco player"
        ]
    },
    {
        name: "Florian Wirtz",
        nationality: "Germany",
        club: "Bayer Leverkusen",
        clues: [
            "Known for his creativity",
            "Recovered from serious knee injury",
            "Part of Germany's squad",
            "Youngest Bundesliga scorer"
        ]
    },
    {
        name: "Gabri Veiga",
        nationality: "Spain",
        club: "Al-Ahli",
        clues: [
            "Known for his goals from midfield",
            "Started at Celta Vigo",
            "Young Spanish talent",
            "Can play as attacking midfielder"
        ]
    }
];

// DOM elements
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const clueText = document.getElementById('clue-text');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const hintButton = document.getElementById('hint-button');
const feedback = document.getElementById('feedback');
const nationalityElement = document.getElementById('nationality');
const clubElement = document.getElementById('club');
const playerStats = document.getElementById('player-stats');
const playerPosition = document.getElementById('player-position');
const playerNationality = document.getElementById('player-nationality');
const playerClub = document.getElementById('player-club');
const currentClueDisplay = document.getElementById('current-clue');
const pitch = document.querySelector('.pitch');

// Initialize game
function initGame() {
    score = 0;
    usedPlayers.clear();
    correctlyGuessedPlayers.clear();
    updateScore();
    startTimer();
    loadNewPlayer();
}

// Update score display
function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

// Timer functions
function startTimer() {
    timer = 60;
    updateTimer();
    timerInterval = setInterval(() => {
        timer--;
        updateTimer();
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimer() {
    timeElement.textContent = `Time: ${timer}s`;
    if (timer <= 10) {
        timeElement.style.color = 'var(--error-color)';
    } else {
        timeElement.style.color = 'white';
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function endGame() {
    feedback.className = 'feedback incorrect';
    feedback.innerHTML = `<i class="fas fa-clock"></i> Time's up! The player was ${currentPlayer.name}`;
    guessInput.disabled = true;
    submitButton.disabled = true;
    hintButton.disabled = true;
    
    // Load next player after delay
    setTimeout(loadNewPlayer, 3000);
}

// Load new player
function loadNewPlayer() {
    // Reset game state
    attempts = 0;
    currentClueIndex = 0;
    guessInput.value = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
    hintButton.disabled = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Reset timer
    stopTimer();
    startTimer();

    // Select random player not used before and not correctly guessed
    let availablePlayers = players.filter(p => 
        !usedPlayers.has(p.name) && !correctlyGuessedPlayers.has(p.name)
    );
    
    if (availablePlayers.length === 0) {
        // If all players have been used or correctly guessed, show game completion message
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<i class="fas fa-trophy"></i> Congratulations! You've guessed all players! Final score: ${score}`;
        guessInput.disabled = true;
        submitButton.disabled = true;
        hintButton.disabled = true;
        stopTimer();
        return;
    }
    
    currentPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    usedPlayers.add(currentPlayer.name);

    // Create a deep copy of the player object and shuffle its clues
    currentPlayer = {
        ...currentPlayer,
        clues: [...currentPlayer.clues].sort(() => Math.random() - 0.5)
    };

    // Update player info
    nationalityElement.textContent = currentPlayer.nationality;
    clubElement.textContent = currentPlayer.club;

    // Show first clue
    showCurrentClue();
}

// Show current clue
function showCurrentClue() {
    if (currentClueIndex < currentPlayer.clues.length) {
        clueText.textContent = currentPlayer.clues[currentClueIndex];
        document.querySelector('.clue-number').textContent = currentClueIndex + 1;
        clueText.style.opacity = '0';
        setTimeout(() => {
            clueText.style.opacity = '1';
        }, 300);
    }
}

// Check guess
function checkGuess() {
    // Normalize both strings: remove accents, convert to lowercase, and trim spaces
    const normalizeString = (str) => {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .toLowerCase()
            .trim()
            .replace(/\s+/g, ' '); // Replace multiple spaces with single space
    };

    // Get alternative names for a player
    const getAlternativeNames = (name) => {
        const alternatives = {
            'kylian mbappe': ['mbappe', 'kylian', 'kmbappe', 'k mbappe'],
            'lionel messi': ['messi', 'leo messi', 'lionel', 'lm10'],
            'cristiano ronaldo': ['ronaldo', 'cr7', 'cristiano', 'cr'],
            'erling haaland': ['haaland', 'erling', 'haaland jr'],
            'kevin de bruyne': ['de bruyne', 'kdb', 'kevin', 'bruyne'],
            'jamal musiala': ['musiala', 'jamal', 'bambi'],
            'rafael leao': ['leao', 'rafa leao', 'rafael'],
            'mikel merino': ['merino', 'mikel'],
            'jeremie frimpong': ['frimpong', 'jeremie'],
            'nicolo barella': ['barella', 'nicolo'],
            'moussa diaby': ['diaby', 'moussa'],
            'takefusa kubo': ['kubo', 'takefusa'],
            'ismael bennacer': ['bennacer', 'ismael'],
            'jonathan david': ['david', 'jonathan'],
            'dominik szoboszlai': ['szoboszlai', 'dominik', 'szobo'],
            'vinicius junior': ['vinicius', 'vini', 'vinicius jr', 'vini jr'],
            'jude bellingham': ['bellingham', 'jude', 'bellingham jr'],
            'luka modric': ['modric', 'luka'],
            'robert lewandowski': ['lewandowski', 'robert', 'lewa'],
            'frenkie de jong': ['de jong', 'frenkie', 'fdj'],
            'rodrygo': ['rodrygo goes', 'rodry'],
            'pedri': ['pedro gonzalez', 'pedro'],
            'toni kroos': ['kroos', 'toni'],
            'gavi': ['pablo gavi', 'pablo'],
            'federico valverde': ['valverde', 'fede', 'fede valverde'],
            'zinedine zidane': ['zidane', 'zizou', 'zinedine'],
            'ronaldinho': ['ronaldinho gaucho', 'dinho'],
            'andres iniesta': ['iniesta', 'andres'],
            'xavi': ['xavi hernandez', 'xavi'],
            'andrea pirlo': ['pirlo', 'andrea'],
            'thierry henry': ['henry', 'thierry', 'titi'],
            'steven gerrard': ['gerrard', 'stevie g', 'steven'],
            'didier drogba': ['drogba', 'didier'],
            'iker casillas': ['casillas', 'iker', 'san iker'],
            'carles puyol': ['puyol', 'carles'],
            'virgil van dijk': ['van dijk', 'virgil', 'vvd'],
            'ruben dias': ['dias', 'ruben'],
            'marquinhos': ['marquinhos correa', 'marco'],
            'ronald araujo': ['araujo', 'ronald'],
            'william saliba': ['saliba', 'william'],
            'alessandro bastoni': ['bastoni', 'alessandro'],
            'josko gvardiol': ['gvardiol', 'josko'],
            'antonio rudiger': ['rudiger', 'toni', 'antonio'],
            'matthijs de ligt': ['de ligt', 'matthijs'],
            'eder militao': ['militao', 'eder'],
            'bruno fernandes': ['fernandes', 'bruno', 'bf'],
            'martin odegaard': ['odegaard', 'martin', 'martin o'],
            'declan rice': ['rice', 'declan'],
            'enzo fernandez': ['fernandez', 'enzo'],
            'aurelien tchouameni': ['tchouameni', 'aurelien'],
            'florian wirtz': ['wirtz', 'florian'],
            'gabri veiga': ['veiga', 'gabri']
        };
        return alternatives[normalizeString(name)] || [];
    };

    const guess = normalizeString(guessInput.value);
    const correctAnswer = normalizeString(currentPlayer.name);
    const alternativeNames = getAlternativeNames(currentPlayer.name);

    if (guess === correctAnswer || alternativeNames.includes(guess)) {
        // Correct guess
        score += (4 - currentClueIndex) * 10;
        updateScore();
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<i class="fas fa-check-circle"></i> Correct! +${(4 - currentClueIndex) * 10} points`;
        
        // Add to correctly guessed players
        correctlyGuessedPlayers.add(currentPlayer.name);
        
        // Disable input and buttons
        guessInput.disabled = true;
        submitButton.disabled = true;
        hintButton.disabled = true;
        stopTimer();

        // Load next player after delay
        setTimeout(loadNewPlayer, 2000);
    } else {
        // Incorrect guess
        attempts++;
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> Incorrect! Try again.`;
        
        if (attempts >= 3) {
            showNextClue();
            attempts = 0;
        }
    }
}

// Show next clue
function showNextClue() {
    if (currentClueIndex < currentPlayer.clues.length - 1) {
        currentClueIndex++;
        showCurrentClue();
    } else {
        // No more clues
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `<i class="fas fa-info-circle"></i> The player was ${currentPlayer.name}`;
        guessInput.disabled = true;
        submitButton.disabled = true;
        hintButton.disabled = true;
        
        // Load next player after delay
        setTimeout(loadNewPlayer, 3000);
    }
}

// Event listeners
submitButton.addEventListener('click', checkGuess);
hintButton.addEventListener('click', showNextClue);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Start game
initGame(); 