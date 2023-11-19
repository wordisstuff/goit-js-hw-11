// import axios from "axios";
import { markupGalerry } from './gallery';
import { gallery } from './gallery';

const form = document.querySelector('.search-form');

const target = document.querySelector('.js-guard');
let page = 1;
let options = {
    root: null,
    rootMargin: "200px",
    threshold: 1.0,
}



const URL = "https://pixabay.com/api/";
const Key = '40722246-cba5c9479c54166dac0d37fff';

const per_page = 40;
form.addEventListener('submit', onForm);
let insert;

async function onForm(evnt) {
    evnt.preventDefault();
    insert = evnt.currentTarget.elements.searchQuery.value.trim();
    return await fetchItem(insert).then(data => {
        let itemArr = data.hits;
        gallery.innerHTML = "";
        markupGalerry(itemArr);
        observer.observe(target)
        console.log("object");
    })
        .catch(err => console.log(err))
};

async function fetchItem(insert, page) {
    return await fetch(`${URL}?key=${Key}&q=${insert}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`)
        .then((resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            };
            return resp.json()
        }))
};

let observer = new IntersectionObserver(onLoad, options)
function onLoad(entris, observer) {
    entris.forEach(entri => {
        if (entri.isIntersecting) {
            page += 1;
            fetchItem(insert, page).then(data => {
                let itemArr = data.hits;
                markupGalerry(itemArr);
                observer.observe(target)
                console.log("object");
            })
                .catch(err => console.log(err))
        }
    });
}
