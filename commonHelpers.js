import{S as p,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(e){return e.map(f).join(`
`)}function f(e){return`<li class="gallery-item">
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
        </li>`}function d(e){e.classList.remove("loader-hidden")}function g(e){e.classList.add("loader-hidden")}function y(e){const s="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${o}?${a}`;return fetch(t).then(r=>r.json())}const h="/goit-js-hw-11/assets/icon-close-5bc7b79a.svg",l=document.querySelector(".search-form"),n=document.querySelector(".gallery");n.innerHTML="";const c=document.querySelector(".loader"),_=new p(".gallery a");l.addEventListener("submit",e=>{e.preventDefault(),n.innerHTML="";const s=e.target.elements.query.value.trim();s.length!==0&&(d(c),y(s).then(o=>{if(o.hits.length===0)m.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"});else{const a=u(o.hits);n.innerHTML=a,_.refresh()}}).catch(o=>{console.log(o)}).finally(()=>{g(c)})),l.reset()});
//# sourceMappingURL=commonHelpers.js.map