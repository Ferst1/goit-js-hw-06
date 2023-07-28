// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// const fontSizeControl = document.getElementById("font-size-control");
// const text = document.getElementById("text");

// fontSizeControl.addEventListener("input", () => {
//   const fontSize = fontSizeControl.value + "px";
//   text.style.fontSize = fontSize;
// });

//2 ВАРИАНТ-МЕНТОР

const inputEl = document.querySelector("input#font-size-control");
const targetText = document.querySelector('[id="text"]');
inputEl.addEventListener("input", onInput);

document.addEventListener("DOMContentLoaded", () => {
  onInput();
});

function onInput() {
  const value = inputEl.value;
  targetText.style.fontSize = value + "px";
}
