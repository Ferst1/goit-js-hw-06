const categoriesList = document.querySelector("#categories");

// Получаем все элементы li.item
const items = categoriesList.querySelectorAll("li.item");

// Выводим в консоль количество категорий

console.log(`Number of elements:${items.length}`);

// Итерируемся по каждому элементу li.item
items.forEach((item) => {
  // Выводим текст заголовка и количество элементов в категории

  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
