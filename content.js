alert("Enjoy the rest of your day :)");

let allText = [...document.getElementsByTagName("*")];

for (let i = 0; i < allText.length; i++) {
  if (i % 2 == 0) {
    allText[i].style["font-family"] = "Chemistry";
  } else {
    allText[i].style["font-family"] = "TimesNewBastard";
  }
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  allText[i].style["color"] = randomColor;
}

// let text = [...document.body.getElementsByTagName("span")];
// for (let i = 0; i < text.length; i++) {
//   text[i].style["color"] = "#FF00FF";
//   console.log("text[i]: " + text[i]);
//   for (let j = 0; j < text[i].length; j++) {
//     text[i][j].style["color"] = "#FF00FF";
//   }
//   if (i % 2 == 0) {
//     text[i].style["font-family"] = "Times New Roman";
//   }
// }
