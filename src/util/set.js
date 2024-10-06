export function isSet(cards) {
  const isShapeSet =
    new Set(cards.map((card) => card.shape)).size === 2 ? false : true;
  const isColorSet =
    new Set(cards.map((card) => card.color)).size === 2 ? false : true;
  const isShadingSet =
    new Set(cards.map((card) => card.shading)).size === 2 ? false : true;
  const isNumberSet =
    new Set(cards.map((card) => card.number)).size === 2 ? false : true;

  return isShapeSet && isColorSet && isShadingSet && isNumberSet;
}

export function findSet(cards) {
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const trio = [cards[i], cards[j], cards[k]];
        if (isSet(trio)) {
          return [...trio];
        }
      }
    }
  }

  return null;
}
