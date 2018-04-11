// https://github.com/prettyEcho/deep-js/issues/4
/* for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100 * i);
} */

for (var i = 0; i < 5; i++) {
  (j => {
    setTimeout(() => {
      console.log(j);
    }, 100 * j);
  })(i);
}

/* for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100 * i);
} */
