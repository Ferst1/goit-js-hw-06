// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const colorBgEl = document.querySelector("[class='color']");
const buttonEl = document.querySelector("[class='change-color']");
const bodyEl = document.body;
buttonEl.addEventListener("click", onClick);

function onClick() {
  const color = getRandomHexColor();
  bodyEl.style.background = color;

  colorBgEl.textContent = bodyEl.style.background;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
