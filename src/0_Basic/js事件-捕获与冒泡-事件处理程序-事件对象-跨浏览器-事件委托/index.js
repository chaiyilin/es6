document.querySelector(".parent").addEventListener(
  "click",
  e => {
    console.log("capturing1");
    // e.stopPropagation(); stopImmediatePropagation();
  },
  false
);

document.querySelector(".child").addEventListener(
  "click",
  e => {
    console.log("capturing2");
    e.stopPropagation();
  },
  false
);
