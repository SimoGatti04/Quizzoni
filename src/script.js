// Il tuo array di quiz rimane invariato
const quizzes = [
    { name: 'ANGLE', url: 'https://angle.wtf/', display: 'image', image: 'images/angle.svg', imageClass:'angle-image'},
    { name: 'GAMEDLE', url: 'https://www.gamedle.wtf/', display: 'text', textClass: 'gamedle-text' },
    { name: 'Song<span class="less-text">less</span>', url: 'https://lessgames.com', display: 'text', textClass: 'songless-text' },
    { name: 'HEARDLE', url: 'https://heardle.it/', display: 'image', image: 'images/heardle.png', imageClass: 'heardle-image'},
    { name: 'SPOTLE', url: 'https://spotle.io/', display: 'image', image: 'images/spotle.png', imageClass: 'spotle-image'},
    { name: 'WORDLE', url: 'https://wordly.org/it', display: 'image', image: 'images/wordle.png', imageClass: 'wordle-image' },
    { name: 'QUORDLE', url: 'https://wordleplay.com/it/quordle', display: 'image', image: 'images/quordle.png', imageClass: 'quordle-image'},
    { name: 'CHRONOPHOTO', url: 'https://www.chronophoto.app/', display: 'image', image: 'images/chronophoto.png', imageClass: 'chronophoto-image' },
    { name: 'FRAMED', url: 'https://framed.wtf/', display: 'text', textClass: 'framedle-text'},
    { name: 'GUESS THE AGE', url: 'https://guesstheage.org/play', display: 'text', textClass: 'guesstheage-text'},
    { name: '<span class="flagle-f">F</span><span class="flagle-l">L</span><span class="flagle-a">A</span><span class="flagle-g">G</span><span class="flagle-l2">L</span><span class="flagle-e">E</span>',
        url: 'https://flagle-game.com', display: 'text', textClass: 'flagle-text' },
    { name: 'TOTOQUIZ', url: 'https://www.ed0.it/quiz/totoquiz', display: 'text', textClass: 'totoquiz-text'},
    { name: 'RANKDLE', url: 'https://rankdle.com/', display: 'image', image: 'images/rankdle.png', imageClass: 'rankdle-image' },
    { name: 'NERDLE', url: 'https://nerdlegame.com', display: 'text', textClass: 'nerdle-text' },
    { name: 'GLOBLE', url: 'https://globle-game.com', display: 'text', textClass: 'globle-text' },
    { name: 'GLOBLE CAPITALI', url: 'https://globle-capitals.com', display: 'text', textClass: 'globle-capitali-text' },
    { name: 'Guess The.Game', url: 'https://guessthe.game/', display: 'text', textClass: 'guessthegame-text' },
    { name: 'POKEDOKU', url: 'https://pokedoku.com', display: 'image', image: 'images/pokedoku.svg', imageClass: 'pokedoku-image'},
    { name: 'SQUIRDLE', url: 'https://squirdle.fireblend.com/', display: 'text', textClass: 'squirdle-text' },
    { name: 'COSTCO<span class="costcodle-dle">DLE</span>', url: 'https://costcodle.com', display: 'text', textClass: 'costcodle-text' },
    { name: 'TRADLE', url: 'https://oec.world/en/tradle/', display: 'image', image: 'images/tradle.png', imageClass: 'tradle-image'},
    { name: 'TRAVLE', url: 'https://travle.earth', display: 'text', textClass: 'travle-text' },
    { name: 'MINECRAFTLE', url: 'https://minecraftle.zachmanson.com', display: 'text', textClass: 'minecraftle-text' },
    { name: 'NFLX<span class="nflxdle-dle">dle</span>', url: 'https://nflxdle.com', display: 'text', textClass: 'nflxdle-text'},
    { name: 'CONTEXTO', url: 'https://contexto.me', display: 'text', textClass: 'contexto-text' },
    { name: 'STATELE', url: 'https://statele.teuteuf.fr', display: 'text', textClass: 'statele-text' },
    { name: 'COLORFLE', url: 'https://colorfle.com', display: 'text', textClass: 'colorfle-text' },
    { name: 'YEEZLE', url: 'https://yeezle.xyz', display: 'image', image: 'images/yeezle.png', imageClass: 'yeezle-image' },
    { name: 'WHO ARE YA?', url: 'https://playfootball.games/who-are-ya/big-5/', display: 'text', textClass: 'whoareya-text' },
    { name: 'MISSING 11', url: 'https://missing11.com/', display: 'text', textClass: 'missing11-text' },
    { name: 'GEOGUESSR', url: 'https://www.geoguessr.com/', display: 'image', image: 'images/geoguessr.svg', imageClass: 'geoguessr-image' },
    { name: 'CronoNews', url: 'https://www.ed0.it/quiz/crononews/', display: 'text', textClass: 'crononews-text' },
    { name: 'Figure', url: 'https://www.ed0.it/quiz/crononews/', display: 'text', textClass: 'figure-text' },
    { name: 'Food<span class="text-blue">Guessr</span>', url: 'https://www.foodguessr.com/', display: 'text', textClass: 'foodguessr-text' },
    { name: 'Guess the Album', url: 'https://www.ed0.it/quiz/guessthealbum/', display: 'text', textClass: 'guessthealbum-text' },
    { name: 'LA FRASE FORTUNATA', url: 'https://www.ed0.it/quiz/it/lafrasefortunata/', display: 'text', textClass: 'lafrasefortunata-text' },
    { name: 'Numble', url: 'https://numble.wtf/', display: 'text', textClass: 'numble-text' },
    { name: 'Eredita', url: 'https://www.ed0.it/quiz/parolachiave/', display: 'image', image: 'images/eredita.png', imageClass: 'eredita-image' },
    { name: 'Pokedle', url: 'https://pokedle.net/', display: 'image', image: 'images/pokedle.png', imageClass: 'pokedle-image' },
    { name: 'Stacked', url: 'https://www.lilsnack.co/game-player?gt=stack', display: 'text', textClass: 'stacked-text' },
    { name: 'TIMEGUESSR', url: 'https://timeguessr.com/roundonedaily', display: 'image', image: 'images/timeguessr.svg', imageClass: 'timeguessr-image' },
    { name: 'Metazooa', url: 'https://metazooa.com/', display: 'text', textClass: 'metazooa-text' },
    { name: 'Chronogram', url: 'https://chronogram.chat/', display: 'text', textClass: 'chronogram-text' },
    { name: 'Google Feud', url: 'https://googlefeud.com/', display: 'image', image: 'images/googlefeud.svg', imageClass: 'googlefeud-image' },
    { name: 'Intesa Vincente', url: 'https://www.ed0.it/games/intesavincente/', display: 'image', image: 'images/intesavincente.png', imageClass: 'intesavincente-image' },
    { name: 'Artistle', url: 'https://artistle.co/', display: 'image', image: 'images/artistle.svg', imageClass: 'artistle-image' },
    { name: 'Guess the Transfer', url: 'https://simogatti04.github.io/GuessByTransfer/', display: 'image', image: 'images/guessthetransfer.png', imageClass: 'guessthetransfer-image' },
];

import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCptoX2FoF5Ulvf2lxg7xWgzp0p47qHT1Q",
  authDomain: "quizdb-11f82.firebaseapp.com",
  projectId: "quizdb-11f82",
  storageBucket: "quizdb-11f82.firebasestorage.app",
  messagingSenderId: "124031523957",
  appId: "1:124031523957:web:282d07416d39659a14ec3c",
  measurementId: "G-VTBGSRKVWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Funzione asincrona per caricare i click da Firestore per ogni quiz
async function fetchClicksForQuiz(quiz) {
  // Usiamo l'URL codificato come ID del documento
  const quizDocRef = doc(db, "quizClicks", encodeURIComponent(quiz.url));
  try {
    const quizDocSnap = await getDoc(quizDocRef);
    if (quizDocSnap.exists()) {
      quiz.clicks = quizDocSnap.data().clicks;
    } else {
      quiz.clicks = 0;
    }
  } catch (error) {
    console.error("Errore nel caricamento dei click per", quiz.url, error);
    quiz.clicks = 0;
  }
}

// Funzione per caricare i click per tutti i quiz e poi creare la grid
async function loadAllClicks() {
  await Promise.all(quizzes.map(q => fetchClicksForQuiz(q)));
  createQuizGrid();
}

// Funzione per aggiornare la grid, ordinando i quiz in base al numero di click
function createQuizGrid() {
  const grid = document.getElementById('quiz-grid');
  grid.innerHTML = ""; // Pulisce la grid prima di aggiungere gli elementi

  // Ordina l'array in ordine decrescente (più click → più in alto)
  quizzes.sort((a, b) => b.clicks - a.clicks);

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

    // Aggiungi listener per il click in modo asincrono
    const anchor = quizItem.querySelector('a');
    anchor.addEventListener('click', async (e) => {
      // Incrementa il conteggio in locale
      quiz.clicks++;
      // Aggiorna Firestore per questo quiz
      const quizDocRef = doc(db, "quizClicks", encodeURIComponent(quiz.url));
      try {
        // Usa setDoc per creare/aggiornare il documento (sovrascrive il campo clicks)
        await setDoc(quizDocRef, { clicks: quiz.clicks });
      } catch (error) {
        console.error("Errore nell'aggiornamento dei click per", quiz.url, error);
      }
      // Dopo aver aggiornato, puoi ricreare la grid per riflettere il nuovo ordinamento
      createQuizGrid();
    });

    grid.appendChild(quizItem);
  });
}

document.addEventListener('DOMContentLoaded', loadAllClicks);
