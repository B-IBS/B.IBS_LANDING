import React from "react";

export const CONTENT = {
  TOP: 0,
  GRAPH: 1,
  FORM: 2
};


export const contentIdArray = [
  "topcontent",
  "graphcontent",
  "formcontent"
];

let then = new Date().getTime();
let currentArrayId = 0;

export const slideTo = (id: number) => {
  const elem = document.getElementById(contentIdArray[id]);
  currentArrayId = id;
  if (elem !== null)
    elem.scrollIntoView({behavior: 'smooth'});
};

export const slidePage = (e: React.WheelEvent<HTMLDivElement>) => {
  const now = new Date().getTime();
  if ((now - then) > 500) {
    if (e.deltaY < 0 && currentArrayId !== 0) {
      slideTo(currentArrayId - 1);
    } else if (e.deltaY > 0 && currentArrayId < contentIdArray.length - 1) {
      slideTo(currentArrayId + 1);
    }
    then = now;
  }
};