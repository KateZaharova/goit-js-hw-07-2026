import { galleryItems } from "/js/gallery-items.js";

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),
};

function createGalleryItemsMarkup(items) {
    return items.map(item =>`<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`).join('');
    
};

refs.gallery.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems));

refs.gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();

    const galleryImage = event.target.classList.contains("gallery__image")

    if (galleryImage) {
        console.log(event.target.dataset.source);
        instance.element().querySelector("img").src = event.target.dataset.source;
        instance.show();

    };
};


const instance = basicLightbox.create(`<img/>`,
    {
        onShow: (instance) => {
            window.addEventListener("keydown", onEscKeyPress);
        },
        onClose: (instance) => {
            window.removeEventListener("keydown", onEscKeyPress);
        },
    }
);
       

function onEscKeyPress(event) {
    if (event.code === "Escape") {
        instance.close();
    }
};

