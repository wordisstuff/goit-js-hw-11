import './js/form';
import './js/gallery';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });