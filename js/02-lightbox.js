import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;
  galleryImage.title = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });

  lightbox.show();
});

// Change code below this line

console.log(galleryItems);
