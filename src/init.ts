import { Config } from "./types";

export default function(config: Config = {}): void {
    const {
        callback = (el) => {},
        easing = "ease-in-out",
        duration = 1000,
        mirror = false,
        delay = 0
    } = config;
    
    document.querySelectorAll('[data-aos]').forEach((aosElem) => {
        const anchorString = aosElem.getAttribute("data-aos-anchor") || "";
        const anchor = anchorString ? (document.querySelector(anchorString) || aosElem) : aosElem;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aosElem.classList.add("aos-animate");
                    callback(aosElem);
                }
                else if (mirror){
                    aosElem.classList.remove("aos-animate");
                }
            });
        })
        
        observer.observe(anchor);
        aosElem.classList.add("aos-init");
        aosElem.getAttribute("data-aos-duration") ? null : (aosElem.setAttribute("data-aos-duration", duration.toString()));
        aosElem.getAttribute("data-aos-easing") ? null : (aosElem.setAttribute("data-aos-easing", easing.toString()));
        aosElem.getAttribute("data-aos-delay") ? null : (aosElem.setAttribute("data-aos-delay", delay.toString()));
    });
}