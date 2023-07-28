// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('[type="number"]');

const formEl = document.querySelector('[id="controls"]');

const buttonCreate = document.querySelector("[data-create]");

const buttonDestroy = document.querySelector("[data-destroy]");

const boxedEl = document.querySelector("#boxes");

buttonCreate.addEventListener("click", onCreate);
function onCreate() {
  const value = Number(inputEl.value);
  if (value === 0) {
    return;
  }
  createBoxes(value);

  let size = 30;
}

function createBoxes(value) {
  let boxesContainer = document.getElementById("boxes");

  for (let i = 0; i < value; i++) {
    let divElement = document.createElement("div");
    divElement.classList.add("box");
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = 30 + i * 10 + "px";
    divElement.style.height = 30 + i * 10 + "px";

    boxesContainer.appendChild(divElement);
  }
}

buttonDestroy.addEventListener("click", onDestroy);
function onDestroy() {
  let boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
