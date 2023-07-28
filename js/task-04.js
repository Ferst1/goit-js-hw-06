//Задание 4
//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// {

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue. }

// Получаем элементы счетчика
const counter = document.querySelector("#counter");
const valueSpan = document.querySelector("#value");
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

// Инициализируем значение счетчика
let counterValue = 0;

// Функция обновления значения счетчика в интерфейсе
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

// Обработчик клика на кнопке увеличения
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

// Обработчик клика на кнопке уменьшения
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

// Инициализируем значение счетчика в интерфейсе
updateCounterValue();
