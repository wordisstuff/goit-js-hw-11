// import { markupObj } from "./form"

export const galerry = document.querySelector('.gallery');
export let markup;



export function markupGalerry(arr) {
    const markupObj = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card"><a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" width="500"/>
        </a>
  <div class="info">
    <p class="info-item">
      <b>Likes:</b>
    ${likes}</p>
    <p class="info-item">
      <b>Views:</b>
    ${views}</p>
    <p class="info-item">
      <b>Comments:</b>
    ${comments}</p>
    <p class="info-item">
      <b>Downloads:</b>
    ${downloads}</p>
  </div>
</div>`
    }).join('')
    galerry.innerHTML = markupObj;
};
