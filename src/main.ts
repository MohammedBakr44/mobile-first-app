import { scroll, scrollOptions } from './shared/ts/scroll'
import { unsplash } from './shared/ts/pics'
import { toJson } from 'unsplash-js';

scrollOptions.duration = 500;
scrollOptions.easingPreset = "easeOutQuad";

const button: HTMLElement = document.querySelector(".btn");
const target: HTMLElement = document.querySelector("#header");
let images: HTMLImageElement[] = Array.from(document.querySelectorAll("#images img"));
const loading: HTMLElement = document.querySelector(".loader");

() => {
    window.scrollTo(0, 0)
}

function loader(target: HTMLElement) {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "none";
    target.style.opacity = "0";
    setTimeout(() => {
        target.parentNode.removeChild(target);
    }, 1500);
};


unsplash.photos.getRandomPhoto({query: "nature", count: images.length + 1})
.then(toJson)
.then((json: any) => {
    for(let img in images) {
        images[img].src = json[img].links.download;
    }
   loader(loading); 
})

console.log(images);

scroll(scrollOptions, button, target)

console.log("It works");
