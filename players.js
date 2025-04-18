const players = [
    {
        name: "Lionel Messi",
        position: "Forward",
        nationality: "Argentina",
        image: "https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg",
        clues: [
            "This player has won 7 Ballon d'Or awards, more than any other player in history.",
            "He scored 91 goals in a single calendar year in 2012, setting a world record.",
            "He led Argentina to their first World Cup victory in 36 years in 2022."
        ],
        hint: "He played for Barcelona for most of his career and now plays in MLS."
    },
    {
        name: "Cristiano Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player has scored over 850 career goals, the most in football history.",
            "He won 5 Champions League titles with Manchester United and Real Madrid.",
            "He's the all-time leading scorer for both Real Madrid and the Portuguese national team."
        ],
        hint: "He currently plays in Saudi Arabia after stints at Manchester United, Real Madrid, and Juventus."
    },
    {
        name: "Kylian Mbappé",
        position: "Forward",
        nationality: "France",
        image: "https://img.a.transfermarkt.technology/portrait/big/342229-1671435885.jpg",
        clues: [
            "This player became the first teenager to score in a World Cup final since Pelé in 1958.",
            "He won the World Cup in 2018 and was the top scorer in the 2022 World Cup.",
            "He's known for his incredible speed, reaching speeds of over 36 km/h on the pitch."
        ],
        hint: "He plays for Paris Saint-Germain and turned down a move to Real Madrid."
    },
    {
        name: "Kevin De Bruyne",
        position: "Midfielder",
        nationality: "Belgium",
        image: "https://img.a.transfermarkt.technology/portrait/big/88755-1671435885.jpg",
        clueImages: [
            "https://img.a.transfermarkt.technology/portrait/big/88755-1671435885.jpg",
            "https://img.a.transfermarkt.technology/portrait/big/88755-1671435885.jpg",
            "https://img.a.transfermarkt.technology/portrait/big/88755-1671435885.jpg"
        ],
        clues: [
            "This player is known for his incredible passing range and vision, often called 'The Assist King'.",
            "He's won multiple Premier League titles with Manchester City and was named PFA Player of the Year twice.",
            "He holds the record for most assists in a single Premier League season."
        ],
        hint: "He previously played for Wolfsburg and Chelsea before joining Manchester City."
    },
    {
        name: "Virgil van Dijk",
        position: "Defender",
        nationality: "Netherlands",
        image: "https://img.a.transfermarkt.technology/portrait/big/139208-1671435885.jpg",
        clueImages: [
            "https://img.a.transfermarkt.technology/portrait/big/139208-1671435885.jpg",
            "https://img.a.transfermarkt.technology/portrait/big/139208-1671435885.jpg",
            "https://img.a.transfermarkt.technology/portrait/big/139208-1671435885.jpg"
        ],
        clues: [
            "This defender was the first defender to win UEFA Men's Player of the Year in 2019.",
            "He led Liverpool to their first Premier League title in 30 years.",
            "He's known for his incredible defensive stats, including going 50 games without being dribbled past."
        ],
        hint: "He previously played for Celtic and Southampton before joining Liverpool."
    },
    {
        name: "Erling Haaland",
        position: "Forward",
        nationality: "Norway",
        image: "https://img.a.transfermarkt.technology/portrait/big/418560-1671435885.jpg",
        clues: [
            "This striker scored 36 goals in his first Premier League season, breaking the record.",
            "He became the fastest player to reach 20 Champions League goals, doing it in just 14 games.",
            "He's known for his incredible goal-scoring ability and physical presence at just 22 years old."
        ],
        hint: "He previously played for Borussia Dortmund and RB Salzburg before joining Manchester City."
    },
    {
        name: "Karim Benzema",
        position: "Forward",
        nationality: "France",
        image: "https://img.a.transfermarkt.technology/portrait/big/18922-1671435885.jpg",
        clues: [
            "This striker won the Ballon d'Or in 2022 after an incredible season with Real Madrid.",
            "He scored back-to-back hat-tricks in the Champions League knockout stages.",
            "He's known for his incredible technical ability and link-up play."
        ],
        hint: "He spent most of his career at Real Madrid and now plays in Saudi Arabia."
    },
    {
        name: "Luka Modrić",
        position: "Midfielder",
        nationality: "Croatia",
        image: "https://img.a.transfermarkt.technology/portrait/big/30972-1671435885.jpg",
        clues: [
            "This midfielder won the Ballon d'Or in 2018 after leading Croatia to the World Cup final.",
            "He's won 5 Champions League titles with Real Madrid.",
            "He's known for his incredible passing range and ability to control the tempo of the game."
        ],
        hint: "He plays for Real Madrid and previously played for Tottenham."
    },
    {
        name: "Robert Lewandowski",
        position: "Forward",
        nationality: "Poland",
        image: "https://img.a.transfermarkt.technology/portrait/big/38290-1671435885.jpg",
        clues: [
            "This striker scored 41 goals in 29 Bundesliga games in the 2020-21 season.",
            "He's the all-time leading scorer for Bayern Munich in the Champions League.",
            "He's known for his incredible goal-scoring consistency and movement."
        ],
        hint: "He played for Bayern Munich and now plays for Barcelona."
    },
    {
        name: "Mohamed Salah",
        position: "Forward",
        nationality: "Egypt",
        image: "https://img.a.transfermarkt.technology/portrait/big/148455-1671435885.jpg",
        clues: [
            "This forward has won multiple Premier League Golden Boot awards.",
            "He scored 32 goals in his first Premier League season with Liverpool.",
            "He's known for his speed and goal-scoring ability from the right wing."
        ],
        hint: "He plays for Liverpool and previously played for Roma."
    },
    {
        name: "Harry Kane",
        position: "Forward",
        nationality: "England",
        image: "https://example.com/kane.jpg",
        clue: "This English striker is Tottenham's all-time leading scorer and England's captain. He's known for his clinical finishing.",
        hint: "He recently moved to Bayern Munich after spending his entire career at Tottenham."
    },
    {
        name: "Neymar",
        position: "Forward",
        nationality: "Brazil",
        image: "https://example.com/neymar.jpg",
        clue: "This Brazilian forward is known for his incredible dribbling skills and flair. He's one of Brazil's all-time leading scorers.",
        hint: "He played for Barcelona and PSG before moving to Saudi Arabia."
    },
    {
        name: "Manuel Neuer",
        position: "Goalkeeper",
        nationality: "Germany",
        image: "https://example.com/neuer.jpg",
        clue: "This German goalkeeper revolutionized the sweeper-keeper role. He's won multiple Champions League titles with Bayern Munich.",
        hint: "He's been Bayern Munich's captain for many years."
    },
    {
        name: "Sergio Ramos",
        position: "Defender",
        nationality: "Spain",
        image: "https://example.com/ramos.jpg",
        clue: "This Spanish defender is known for his leadership and aggressive style. He won multiple Champions League titles with Real Madrid.",
        hint: "He now plays for Sevilla after spending most of his career at Real Madrid."
    },
    {
        name: "Toni Kroos",
        position: "Midfielder",
        nationality: "Germany",
        image: "https://example.com/kroos.jpg",
        clue: "This German midfielder is known for his incredible passing accuracy. He's won multiple Champions League titles with Real Madrid.",
        hint: "He previously played for Bayern Munich."
    },
    {
        name: "Thibaut Courtois",
        position: "Goalkeeper",
        nationality: "Belgium",
        image: "https://example.com/courtois.jpg",
        clue: "This Belgian goalkeeper is known for his incredible shot-stopping ability. He won the Champions League with Real Madrid in 2022.",
        hint: "He previously played for Chelsea and Atlético Madrid."
    },
    {
        name: "Sadio Mané",
        position: "Forward",
        nationality: "Senegal",
        image: "https://example.com/mane.jpg",
        clue: "This Senegalese forward won the Champions League with Liverpool and led his country to AFCON victory. He's known for his speed.",
        hint: "He now plays in Saudi Arabia after leaving Bayern Munich."
    },
    {
        name: "Joshua Kimmich",
        position: "Midfielder",
        nationality: "Germany",
        image: "https://example.com/kimmich.jpg",
        clue: "This German midfielder is known for his versatility and passing ability. He's won multiple Bundesliga titles with Bayern Munich.",
        hint: "He can play both as a right-back and central midfielder."
    },
    {
        name: "Rúben Dias",
        position: "Defender",
        nationality: "Portugal",
        image: "https://example.com/dias.jpg",
        clue: "This Portuguese defender is known for his leadership and defensive skills. He won the Premier League with Manchester City.",
        hint: "He previously played for Benfica."
    },
    {
        name: "Bruno Fernandes",
        position: "Midfielder",
        nationality: "Portugal",
        image: "https://example.com/fernandes.jpg",
        clue: "This Portuguese midfielder is known for his creativity and goal-scoring ability. He's Manchester United's captain.",
        hint: "He previously played for Sporting CP."
    },
    {
        name: "Alfredo Di Stéfano",
        position: "Forward",
        nationality: "Argentina/Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player was the first true superstar of Real Madrid, leading them to 5 consecutive European Cups.",
            "He won 8 La Liga titles and was the club's all-time top scorer until 2009.",
            "He was known as 'The Blond Arrow' for his incredible speed and goal-scoring ability."
        ],
        hint: "He played for Real Madrid from 1953 to 1964 and later became the club's honorary president."
    },
    {
        name: "Ferenc Puskás",
        position: "Forward",
        nationality: "Hungary/Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player scored 242 goals in 262 games for Real Madrid, including 4 goals in a European Cup final.",
            "He was part of the legendary 'Magical Magyars' Hungarian national team.",
            "He won 5 La Liga titles and 3 European Cups with Real Madrid."
        ],
        hint: "The FIFA Puskás Award for the best goal of the year is named after him."
    },
    {
        name: "Raúl González",
        position: "Forward",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player was Real Madrid's all-time top scorer until 2009, with 323 goals.",
            "He won 6 La Liga titles and 3 Champions League titles with Real Madrid.",
            "He was known for his iconic 'kiss the ring' celebration."
        ],
        hint: "He was Real Madrid's captain for many years and wore the number 7 shirt."
    },
    {
        name: "Iker Casillas",
        position: "Goalkeeper",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player made 725 appearances for Real Madrid, the second-most in club history.",
            "He won 5 La Liga titles and 3 Champions League titles with Real Madrid.",
            "He was known as 'San Iker' for his incredible saves and leadership."
        ],
        hint: "He was Real Madrid's captain and Spain's goalkeeper during their golden era."
    },
    {
        name: "Sergio Ramos",
        position: "Defender",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player scored the equalizing goal in the 2014 Champions League final in the 93rd minute.",
            "He won 5 La Liga titles and 4 Champions League titles with Real Madrid.",
            "He was known for his leadership and ability to score crucial goals as a defender."
        ],
        hint: "He was Real Madrid's captain and holds the record for most red cards in La Liga."
    },
    {
        name: "Francisco Gento",
        position: "Winger",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player won 6 European Cups with Real Madrid, a record that still stands.",
            "He was known for his incredible speed and dribbling ability on the left wing.",
            "He played for Real Madrid from 1953 to 1971, making 600 appearances."
        ],
        hint: "He was part of the legendary Real Madrid team that dominated European football in the 1950s."
    },
    {
        name: "Hugo Sánchez",
        position: "Forward",
        nationality: "Mexico",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player won 5 consecutive Pichichi trophies as La Liga's top scorer.",
            "He scored 38 goals in the 1989-90 season, a record at the time.",
            "He was known for his spectacular bicycle kicks and acrobatic goals."
        ],
        hint: "He played for Real Madrid from 1985 to 1992 and is considered Mexico's greatest ever player."
    },
    {
        name: "Emilio Butragueño",
        position: "Forward",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player was part of the legendary 'Quinta del Buitre' at Real Madrid.",
            "He won 6 La Liga titles and 2 UEFA Cups with Real Madrid.",
            "He was known for his elegant playing style and clinical finishing."
        ],
        hint: "His nickname was 'The Vulture' and he was known for his partnership with Hugo Sánchez."
    },
    {
        name: "Fernando Hierro",
        position: "Defender",
        nationality: "Spain",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player scored 102 goals for Real Madrid despite being a defender.",
            "He won 3 Champions League titles and 5 La Liga titles with Real Madrid.",
            "He was known for his leadership and ability to score from set pieces."
        ],
        hint: "He was Real Madrid's captain and later became the club's sporting director."
    },
    {
        name: "Roberto Carlos",
        position: "Defender",
        nationality: "Brazil",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1671435885.jpg",
        clues: [
            "This player was known for his incredible free-kicks and powerful left foot.",
            "He won 4 La Liga titles and 3 Champions League titles with Real Madrid.",
            "He scored one of the most famous free-kicks ever against France in 1997."
        ],
        hint: "He was Real Madrid's left-back for 11 years and formed a great partnership with Zidane."
    }
]; 