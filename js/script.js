const textHtml = document.getElementById("inputText");
const resultHtml = document.getElementById("resultText");

const findUniqueChar = () => {
  const text = textHtml.value;
  resultHtml.innerText = "";

  const words = text.match(/\d+((\.|\/|,)\w+)?|\w+(('|-|`)\w+)?|[^\W]+/g);

  console.log(words);

  const symbols = words.map((a) => a.charAt(0));

  let symbolResult;

  for (let i = 0; i < symbols.length; i++) {
    let count = symbols.filter((item) => item === symbols[i]).length;
    if (count === 1) {
      symbolResult = symbols[i];
      break;
    }
  }

  if (symbolResult) {
    resultHtml.innerText += symbolResult;
  } else {
    resultHtml.innerText += "No valid result found(";
  }
};
