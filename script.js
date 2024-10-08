const quizzes = [
    { name: 'ANGLE', url: 'https://angle.wtf/', display: 'image', image: 'images/angle.svg', imageClass:'angle-image'},
    { name: 'GAMEDLE', url: 'https://www.gamedle.wtf/', display: 'text', textClass: 'gamedle-text' },
    { name: 'SONGLESS', url: 'https://lessgames.com', display: 'text', textClass: 'songless-text' },
    { name: 'HEARDLE', url: 'https://heardle-wordle.com', display: 'image', image: 'images/heardle.png', imageClass: 'heardle-image'},
    { name: 'SPOTLE', url: 'https://spotle.io/', display: 'image', image: 'images/spotle.png', imageClass: 'spotle-image'},
    { name: 'WORDLE', url: 'https://wordly.org/it', display: 'image', image: 'images/wordle.png', imageClass: 'wordle-image' },
    { name: 'QUORDLE', url: 'https://wordleplay.com/it/quordle', display: 'image', image: 'images/quordle.png', imageClass: 'quordle-image'},
    { name: 'CHRONOPHOTO', url: 'https://www.chronophoto.app/', display: 'image', image: 'images/chronophoto.png', imageClass: 'chronophoto-image' },
    { name: 'FRAMED', url: 'https://framed.wtf/', display: 'text', textClass: 'framedle-text'},
    { name: 'GUESS THE AGE', url: 'https://guesstheage.org/', display: 'text', textClass: 'guesstheage-text'},
    { name: 'FLAGLE', url: 'https://flagle-game.com', display: 'text', textClass: 'flagle-text' },
    { name: 'TOTOQUIZ', url: 'https://www.ed0.it/quiz/totoquiz', display: 'text', textClass: 'totoquiz-text'},
    { name: 'RANKDLE', url: 'https://rankdle.com/', display: 'image', image: 'images/rankdle.png',imageClass: 'rankdle-image' },
    { name: 'NERDLE', url: 'https://nerdlegame.com', display: 'text', textClass: 'nerdle-text' },
    { name: 'GLOBLE', url: 'https://globle-game.com', display: 'text', textClass: 'globle-text' },
    { name: 'GLOBLE CAPITALI', url: 'https://globle-capitals.com', display: 'text', textClass: 'globle-capitali-text' },
    { name: 'GUESS THE.GAME', url: 'https://guessthe.game/', display: 'text', textClass: 'guessthegame-text' },
    { name: 'POKEDOKU', url: 'https://pokedoku.com', display: 'image', image: 'images/pokedoku.svg', imageClass: 'pokedoku-image'},
    { name: 'SQUIRDLE', url: 'https://squirdle.fireblend.com/', display: 'text', textClass: 'squirdle-text' },
    { name: 'COSTCODLE', url: 'https://costcodle.com', display: 'text', textClass: 'costcodle-text' },
    { name: 'TRADLE', url: 'https://oec.world/en/tradle/', display: 'image', image: 'images/tradle.png', imageClass: 'tradle-image'},
    { name: 'TRAVLE', url: 'https://travle.earth', display: 'text', textClass: 'travle-text' },
    { name: 'MINECRAFTLE', url: 'https://minecraftle.zachmanson.com', display: 'text', textClass: 'minecraftle-text' },
    { name: 'NFLXDLE', url: 'https://nflxdle.com', display: 'text', textClass: 'nflxdle-text'},
    { name: 'CONTEXTO', url: 'https://contexto.me', display: 'text', textClass: 'contexto-text' },
    { name: 'STATELE', url: 'https://statele.teuteuf.fr', display: 'text', textClass: 'statele-text' },
    { name: 'COLORFLE', url: 'https://colorfle.com', display: 'text', textClass: 'colorfle-text' },
    { name: 'YEEZLE', url: 'https://yeezle.xyz', display: 'image', image: 'images/yeezle.png', imageClass: 'yeezle-image' },
    { name: 'WHO ARE YA', url: 'https://playfootball.games/who-are-ya/big-5/', display: 'text', textClass: 'whoareya-text' },
    { name: 'MISSING 11', url: 'https://missing11.com/', display: 'text', textClass: 'missing11-text' },
    { name: 'GEOGUESSR', url: 'https://www.geoguessr.com/', display: 'image', image: 'images/geoguessr.svg', imageClass: 'geoguessr-image' }
];


function createQuizGrid() {
    const grid = document.getElementById('quiz-grid');
    quizzes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item';

        let content;
        if (quiz.display === 'image') {
           content = `<img src="${quiz.image}" alt="${quiz.name}" class="${quiz.imageClass || ''}">`;
        } else {
            content = `<div class="quiz-text ${quiz.textClass}">${quiz.name}</div>`;
        }

        quizItem.innerHTML = `
            <a href="${quiz.url}" target="_blank">
                ${content}
            </a>
        `;
        grid.appendChild(quizItem);
    });
}

document.addEventListener('DOMContentLoaded', createQuizGrid);
