function switchNames() {
  const wordsList = [
    "Power",
    "Speed",
    "Precision",
    "Greatness",
    "Deadly",
    "Skilled",
  ];
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  document.getElementById("word").innerHTML = randomWord;
}

function switcher(func, time) {
  setInterval(func, time);
}

switcher(switchNames, 800);
