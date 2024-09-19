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
    { name: 'RANKDLE', url: 'https://rankdle.com/', display: 'image', image: 'images/rankdle.jpg' },
    { name: 'NERDLE', url: 'https://nerdlegame.com', display: 'image', image: 'images/nerdle.jpg' },
    { name: 'GLOBLE PAESI', url: 'https://globle.org/', display: 'image', image: 'images/globlepaesi.jpg' },
    { name: 'GLOBLE CAPITALI', url: 'https://globle-capitals.com', display: 'image', image: 'images/globlecapitali.jpg' },
    { name: 'GUESS THE GAME', url: 'https://guessthe.game/', display: 'image', image: 'images/guessthegame.jpg' },
    { name: 'POKEDOKU', url: 'https://pokedoku.com', display: 'image', image: 'images/pokedoku.jpg' },
    { name: 'SQUIRDLE', url: 'https://squirdle.fireblend.com/', display: 'image', image: 'images/squirdle.jpg' },
    { name: 'COSTCODLE', url: 'https://costcodle.com', display: 'image', image: 'images/costcodle.jpg' },
    { name: 'TRADLE', url: 'https://oec.world/en/tradle/', display: 'image', image: 'images/tradle.jpg' },
    { name: 'TRAVLE', url: 'https://travle.earth', display: 'image', image: 'images/travle.jpg' },
    { name: 'MINECRAFTLE', url: 'https://minecraftle.zachmanson.com', display: 'image', image: 'images/minecraftle.jpg' },
    { name: 'NFLXDLE', url: 'https://nflxdle.com', display: 'image', image: 'images/nflxdle.jpg' },
    { name: 'CONTEXTO', url: 'https://contexto.me', display: 'image', image: 'images/contexto.jpg' },
    { name: 'STATELE', url: 'https://statele.teuteuf.fr', display: 'image', image: 'images/statele.jpg' },
    { name: 'COLORFLE', url: 'https://colorfle.com', display: 'image', image: 'images/colorfle.jpg' },
    { name: 'YEEZLE', url: 'https://yeezle.herokuapp.com', display: 'image', image: 'images/yeezle.jpg' }
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
