// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// const validationInput = document.getElementById("validation-input");

// validationInput.addEventListener("blur", () => {
//   const expectedLength = parseInt(validationInput.getAttribute("data-length"));
//   const enteredValue = validationInput.value.trim();

//   if (enteredValue.length === expectedLength) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// });

//Мы добавляем элемент input с идентификатором validation-input, а также указываем атрибут data-length для определения ожидаемого количества символов.

// Внутри <style>...</style> мы определяем стили для элемента validation-input и его классов valid и invalid. valid используется для установки зеленой границы, а invalid - для установки красной границы.

// В JavaScript-части кода мы получаем элемент validationInput по его идентификатору.

// Мы добавляем обработчик события blur для элемента validationInput. Событие blur срабатывает, когда элемент теряет фокус.

// В обработчике мы получаем ожидаемую длину символов из атрибута data-length с помощью метода getAttribute. Мы преобразуем его в число с помощью parseInt.

// Затем мы получаем введенное значение из validationInput с помощью свойства value и удаляем возможные пробелы в начале и конце с помощью метода trim().

// Мы сравниваем длину введенного значения с ожидаемой длиной и добавляем соответствующий класс (valid или invalid) с помощью методов classList.add() и classList.remove(). Если длины совпадают, устанавливается класс valid, иначе - класс invalid.

// Таким образом, при потере фокуса на элементе validationInput, скрипт проверяет количество символов введенного значения и применяет соответствующий стиль границы в зависимости от правильности ввода.

//   2   ПРИМЕР РЕШЕНИЯ 2 (с ментором)
const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onBlur);

function onBlur() {
  const inputValue = inputEl.value.trim();
  const length = inputValue.length;
  const targetLenght = Number(inputEl.dataset.length);

  inputEl.classList.remove("valid", "invalid");
  if (length === targetLenght) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
