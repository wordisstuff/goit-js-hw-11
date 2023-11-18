// import axios from "axios";
import { markupGalerry } from './gallery'
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"


// const simplelightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// axios.defaults.headers.common["x-api-key"] = "40722246-cba5c9479c54166dac0d37fff";
// axios.defaults.baseURL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');

const URL = "https://pixabay.com/api/";
const Key = '40722246-cba5c9479c54166dac0d37fff';
let page;
const ollPage = 30;
form.addEventListener('submit', onForm);

async function onForm(evnt) {
    evnt.preventDefault();
    const insert = evnt.currentTarget.elements.searchQuery.value.trim();
    page = 1;
    return await fetchItem(insert).then(data => {
        let itemArr = data.hits;
        console.log(itemArr);
        // simplelightbox.refresh()
        return markupGalerry(itemArr);
    })
        .catch(err => console.log(err))
};

async function fetchItem(insert) {
    return await fetch(`${URL}?key=${Key}&q=${insert}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${ollPage}`).then(resp => resp.json())

};