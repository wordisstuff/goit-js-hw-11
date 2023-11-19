
export const gallery = document.querySelector('.gallery');

export function markupGalerry(arr) {
    const markupObj = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<a class="gallery_link" href="${largeImageURL}"><div class="photo-card">
        <img class="item-img" src="${webformatURL}" alt="${tags}" loading="lazy" width="500"/>
        <div class="info">
    <p class="info-item"><b>Likes</b><span class="span-info">${likes}</span></p>
    <p class="info-item"><b>Views</b><span class="span-info">${views}</span></p>
    <p class="info-item"><b>Comments</b><span class="span-info">${comments}</span></p>
    <p class="info-item"><b>Downloads</b><span class="span-info">${downloads}</span></p></div>
</div></a>`
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markupObj)
};