// Получаем список ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Создаем фрагмент, чтобы добавить все элементы за одну операцию
const fragment = document.createDocumentFragment();
// Итерируемся по каждому ингредиенту
ingredients.forEach((ingredient) => {
  // Создаем элемент li
  const listItem = document.createElement("li");
  // Устанавливаем текстовое содержимое ингредиента
  listItem.textContent = ingredient;
  // Добавляем класс item
  listItem.classList.add("item");
  // Добавляем элемент li во фрагмент
  fragment.appendChild(listItem);
});

// Вставляем фрагмент со всеми элементами в список ul#ingredients
ingredientsList.appendChild(fragment);
