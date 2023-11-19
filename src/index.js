import './js/form';
import './js/gallery';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import InfiniteScroll from "infinite-scroll"



new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// new InfiniteScroll('.gallery')
// console.log(SimpleLightbox);