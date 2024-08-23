const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const closeGallery = document.querySelector("close-lightbox")
const galleryItems = [
  {
    preview: '/images/preview blue-flower.jpg',
    original: '/images/original blue flower.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: '/images/preview container.jpg',
    original: '/images/original container.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: '/images/preview beach.jpg',
    original: '/images/original beach.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: '/images/preview flowers purple.jpg',
    original: '/images/original flowers purple.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: '/images/preview mountains.jpg',
    original: '/images/original mountains.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: '/images/preview landscape.jpg',
    original: '/images/original landscape.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: '/images/preview the-alps.jpg',
    original: '/images/original the-alps.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: '/images/preview landscape (2).jpg',
    original: '/images/original landscape (2).jpg',
    description: 'Nature Landscape',
  },
  {
    preview: '/images/preview lighthouse.jpg',
    original: '/images/original lighthouse.jpg',
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