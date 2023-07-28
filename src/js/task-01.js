const categoriesList = document.querySelector("#categories");

// Получаем все элементы li.item
const items = categoriesList.querySelectorAll("li.item");

// Выводим в консоль количество категорий

console.log("${items.length}");

// Итерируемся по каждому элементу li.item
items.forEach((item) => {
  // Находим заголовок элемента
  const heading = item.querySelector("h2");
  // Находим все элементы li внутри текущей категории
  const categoryItems = item.querySelectorAll("li");

  // Выводим текст заголовка и количество элементов в категории

  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
