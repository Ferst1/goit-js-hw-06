// Получаем список ul.gallery
const galleryList = document.querySelector(".gallery");

// Массив объектов с данными изображений

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=600",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=600",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=600",
    alt: "Group of Horses Running",
  },
];

// Создаем разметку галереи изображений
const galleryMarkup = images
  .map(
    (image) => `
  <li style="margin:30px;">
    <img src="${image.url}" alt="${image.alt}">
  </li>
`
  )
  .join("");

// Вставляем разметку галереи в список ul.gallery
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


// ------Style Galery------//

galleryList.style.listStyle = "none";
galleryList.style.display = "flex-box";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";
