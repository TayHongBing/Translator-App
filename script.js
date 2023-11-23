import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value;
  const source = document.getElementById("source").value;
  const target = document.getElementById("target").value;
  const translated = translate(source, target, inputText);
  document.getElementById("translatedText").value = translated;
}

window.translateText = translateText;