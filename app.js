const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const closeGallery = document.querySelector("close-lightbox")
const galleryItems = [
  {
    preview: '/src/images/preview blue-flower.jpg',
    original: '/src/images/original blue flower.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: '/src/images/preview container.jpg',
    original: '/src/images/original container.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: '/src/images/preview beach.jpg',
    original: '/src/images/original beach.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: '/src/images//preview flowers purple.jpg',
    original: '/src/images/original flowers purple.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: '/src/images/preview mountains.jpg',
    original: '/src/images/original mountains.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: '/src/images/preview landscape.jpg',
    original: '/src/images/original landscape.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: '/src/images/preview the-alps.jpg',
    original: '/src/images/original the-alps.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: '/src/images/preview landscape (2).jpg',
    original: '/src/images/original landscape (2).jpg',
    description: 'Nature Landscape',
  },
  {
    preview: '/src/images/preview lighthouse.jpg',
    original: '/src/images/original lighthouse.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const renderGalleryItems = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

gallery.innerHTML = renderGalleryItems;

function openLightbox(imageSrc) {
  lightbox.classList.add('is-open');
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageSrc;
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
}

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') return;

  const imageSrc = target.getAttribute('data-source');
  openLightbox(imageSrc);
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

closeGallery.addEventListener('click', () => {
  closeLightbox()
})