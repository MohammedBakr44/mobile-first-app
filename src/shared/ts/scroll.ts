import easyScroll from 'easy-scroll';

 export const scrollOptions:
    {
        scrollableDomEle: HTMLElement,
        direction: string,
        duration: number,
        easingPreset: string,
        onAnimationCompleteCallback: Function,
        scrollAmount: number
    } =
{
    scrollableDomEle: document.documentElement,
    direction: 'bottom',
    duration: 1500,
    onAnimationCompleteCallback: () => console.log(window.pageYOffset),
    easingPreset: 'linear',
    scrollAmount: 4529
}

const button = document.querySelectorAll("button")[0];

export function scroll(config: {
    scrollableDomEle: HTMLElement,
    direction: string,
    duration: number,
    easingPreset: string,
    onAnimationCompleteCallback: Function,
    scrollAmount: number
} = scrollOptions, clickable: HTMLElement = button, element?: any) {

    element ? config.scrollAmount = element.offsetTop + 5 : console.log("no element");

    clickable.addEventListener('click', () => {
        easyScroll(config)
    });

}
