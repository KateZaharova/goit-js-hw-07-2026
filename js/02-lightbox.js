import { galleryItems } from './gallery-items.js';
// Change code below this line
//import SimpleLightbox from "simplelightbox";
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"

const refs = {
    gallery: document.querySelector(".gallery"),
};

function createGalleryItemsMarkup(items) {
    return items.map(({original, preview, description}) =>`<li class="gallery__item">
   <a class="gallery__link" 
   href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`).join('');
    
};

console.log(createGalleryItemsMarkup(galleryItems));

refs.gallery.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems));


refs.gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();

    const galleryImage = event.target.classList.contains("gallery__image")

    if (!galleryImage) {
        return
    };

    console.log(event.target);
};

let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionPosition:'bottom', captionDelay:250});
gallery.on('show.simplelightbox', function () {
	// Do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});
