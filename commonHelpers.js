import{S as c,i as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function m(e){return e.map(u).join(`
`)}function u(e){return`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <div class="gallery-image-thumb">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </div>
            <ul class="property">
              <li class="property__item">
                <p class="property__name">Likes</p>
                <p class="item-prop__quantity">${e.likes}</p>
              </li>
              <li class="property__item">
                <p class="property__name">Views</p>
                <p class="item-prop__quantity">${e.views}</p>
              </li>
              <li class="property__item">
                <p class="property__name">Comments</p>
                <p class="item-prop__quantity">${e.comments}</p>
              </li>
              <li class="property__item">
                <p class="property__name">Downloads</p>
                <p class="item-prop__quantity">${e.downloads}</p>
              </li>
            </ul>
          </a>
        </li>`}function f(e){e.classList.remove("loader-hidden")}function g(e){e.classList.add("loader-hidden")}function d(e){const r="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${o}?${a}`;return fetch(t).then(s=>s.json()).then(s=>{const i=[];s.hits===i&&iziToast.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb"})}).catch(s=>{console.log(s)})}const y="/goit-js-hw-11/assets/icon-close-5bc7b79a.svg",n=document.querySelector(".search-form"),h=document.querySelector(""),l=document.querySelector(".loader"),_=new c(".gallery a");n.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.query.value.trim();r.length!==0&&(f(l),d(r).then(o=>{if(o.hits.length===0)p.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:y,position:"topRight",theme:"dark"});else{const a=m(o.hits);h.innerHTML=a,_.refresh()}}).catch(o=>{console.log(o)}).finally(()=>{g(l)})),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
