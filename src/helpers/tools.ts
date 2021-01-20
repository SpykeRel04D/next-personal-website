function getDimensions(element: HTMLElement) {
    const { height } = element.getBoundingClientRect();
    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

function scrollTo(element: HTMLElement) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}

export default {
    getDimensions,
    scrollTo,
};