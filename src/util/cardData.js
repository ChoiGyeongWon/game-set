import { v4 as uuidv4 } from "uuid";
import { isSet, findSet } from "./set";

function getCardDummyData() {
  // 카드 더미 데이터
  const shapes = ["star", "heart", "cloud"];
  const colors = ["green", "purple", "brown"];
  const shadings = ["none", "half", "full"];
  const numbers = [1, 2, 3];

  const cards = [];

  shapes.forEach((shape) => {
    colors.forEach((color) => {
      shadings.forEach((shading) => {
        numbers.forEach((number) => {
          cards.push({ id: uuidv4(), shape, color, shading, number });
        });
      });
    });
  });

  return [...cards];
}

function shuffleArray(cards) {
  // 카드 섞기
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function cardInit(cards) {
  // 유효한 12개 카드, 나머지 카드 리턴
  let shuffledCards = shuffleArray([...cards]);
  let initTwelveCards = [];
  let initRestCards = [];

  for (let i = 0; i < 12; i++) {
    initTwelveCards.push(shuffledCards[i]);
  }
  for (let i = 12; i < cards.length; i++) {
    initRestCards.push(shuffledCards[i]);
  }

  let initDeck = findSet(initTwelveCards);

  while (initDeck === null) {
    // 유효한 세트가 없다면 다시 셔플
    shuffledCards = shuffleArray([...cards]);

    initTwelveCards = [];
    initRestCards = [];

    for (let i = 0; i < 12; i++) {
      initTwelveCards.push(shuffledCards[i]);
    }
    for (let i = 12; i < cards.length; i++) {
      initRestCards.push(shuffledCards[i]);
    }

    initDeck = findSet(initTwelveCards);
  }

  return {
    initTwelveCards: [...initTwelveCards],
    initRestCards: [...initRestCards],
  };
}

export default function getCards() {
  // 첫 카드 12개, 나머지 카드 리턴
  const dummyCards = getCardDummyData();

  const { initTwelveCards, initRestCards } = cardInit(dummyCards);

  return {
    initTwelveCards,
    initRestCards,
  };
}
