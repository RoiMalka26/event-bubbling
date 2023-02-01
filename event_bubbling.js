function displayTableValue() {
  if (event.target.nodeName === "TD") {
    myPara.innerText = event.target.innerText;
  }
}

function cleanParagraph() {
  myPara.innerText = "";
}
