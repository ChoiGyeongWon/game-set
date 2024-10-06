import { useRef, useEffect } from "react";

import styled from "styled-components";

const SetCard = styled.div`
  width: 90%;
  height: 90%;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-violet);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 0px 2px;

  &:not(.active) {
    &:hover {
      transition: all 0.5s;
      scale: 1.05;
    }
  }

  &.active {
    background-color: #ddd;
  }

  &.showHint {
    background-color: yellow;
  }

  .shape-star {
    width: 40px;
    height: 40px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &.color-green {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165zm126 135"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647z"/></svg>');
      }
    }
    &.color-purple {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165zm126 135"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647z"/></svg>');
      }
    }
    &.color-brown {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165zm126 135"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647zm49 69-194 64 124 179-4 191 200-55 200 56-4-192"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880t34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647z"/></svg>');
      }
    }
  }

  .shape-heart {
    width: 40px;
    height: 40px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &.color-green {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81 98 107T480-228m0-273"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172z"/></svg>');
      }
    }
    &.color-purple {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81 98 107T480-228m0-273"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172z"/></svg>');
      }
    }
    &.color-brown {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81 98 107T480-228m0-273"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172zm0-108q96-86 158-147.5t98-107 50-81 14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5 95.5-544 80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5 705-329 538-172z"/></svg>');
      }
    }
  }

  .shape-cloud {
    width: 40px;
    height: 40px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &.color-green {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141.5T480-720t-141.5 58.5T280-520h-20q-58 0-99 41t-41 99 41 99 99 41m220-240"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%2392AD94" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160z"/></svg>');
      }
    }
    &.color-purple {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141.5T480-720t-141.5 58.5T280-520h-20q-58 0-99 41t-41 99 41 99 99 41m220-240"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%239492ad" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160z"/></svg>');
      }
    }
    &.color-brown {
      &.shading-none {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141.5T480-720t-141.5 58.5T280-520h-20q-58 0-99 41t-41 99 41 99 99 41m220-240"/></svg>');
      }
      &.shading-half {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160zm0-80h480q42 0 71-29t29-71-29-71-71-29h-60v-80q0-83-58.5-141"/></svg>');
      }
      &.shading-full {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ad9492" viewBox="0 -960 960 960"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160z"/></svg>');
      }
    }
  }
`;

function getPropCard(id, shape, color, shading, number) {
  const card = [];
  const classes = `shape-${shape} color-${color} shading-${shading}`;

  for (let i = 0; i < number; i++) {
    card.push(<div key={`${id}${i}`} className={classes} />);
  }

  return card;
}

export default function Card({
  id,
  shape,
  color,
  shading,
  number,
  handleSetSelectedRef,
  activeReset,
  isHintPop,
  handleHintEmpty,
}) {
  const cardRef = useRef();
  const timeoutRef = useRef();
  useEffect(() => {
    // 힌트 처리
    if (isHintPop) {
      cardRef.current.className += " showHint";
      timeoutRef.current = setTimeout(() => {
        cardRef.current.className = cardRef.current.className.replace(
          " showHint",
          ""
        );
        handleHintEmpty();
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isHintPop, handleHintEmpty]);

  if (activeReset) {
    cardRef.current.className = cardRef.current.className.replace(
      " active",
      ""
    );
  }

  function handleClickCard() {
    if (cardRef.current.className.includes("active")) {
      cardRef.current.className = cardRef.current.className.replace(
        " active",
        ""
      );
      handleSetSelectedRef("remove", { id, shape, color, shading, number });
    } else {
      cardRef.current.className += " active";
      handleSetSelectedRef("add", { id, shape, color, shading, number });
    }
  }

  const card = getPropCard(id, shape, color, shading, number);
  return (
    <SetCard ref={cardRef} onClick={handleClickCard}>
      {card}
    </SetCard>
  );
}
