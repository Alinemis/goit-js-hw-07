import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
               <img
                   class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                 />
           </a>
        </li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
list.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentImg = evt.target.closest(".gallery__image");

  const source = currentImg.dataset.source;
  console.log(source);
}
