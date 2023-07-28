//Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name !== "" ? name : "Anonymous";
});

// --------- ОБЪЯСНЕНИЕ-----------------
// nameInput.addEventListener("input", () => { ... }); - Эта строка добавляет обработчик события input для элемента с идентификатором nameInput. Это означает, что код внутри фигурных скобок будет выполнен каждый раз, когда происходит событие input на элементе nameInput.

// const name = nameInput.value.trim(); - Эта строка объявляет переменную name и присваивает ей значение, полученное из свойства value элемента nameInput. Метод trim() вызывается для удаления лишних пробелов в начале и конце введенной строки.

// nameOutput.textContent = name !== "" ? name : "Anonymous"; - В этой строке мы устанавливаем свойство textContent элемента nameOutput в значение переменной name. Однако перед присваиванием мы используем тернарный оператор (? :), чтобы проверить, является ли значение name пустой строкой. Если name не пустое, то его значение будет установлено в textContent элемента nameOutput. В противном случае, если name пустое, то textContent будет установлен в строку "Anonymous".

// Таким образом, скрипт обновляет содержимое элемента nameOutput в соответствии со значением, введенным в поле nameInput. Если поле пустое, то отображается строка "Anonymous".
