import { Config } from "./types";

export default function(config: Config): void {
    const {
        callback = (el) => {},
        easing = "ease-in-out",
        duration = 1000,
    } = config;
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
                callback(entry.target);
            }
        });
    });

    document.querySelectorAll('[data-aos]').forEach((aosElem) => {
        observer.observe(aosElem);
        //add data-aos-duration and easing to element
        aosElem.setAttribute("data-aos-duration", duration.toString());
        aosElem.classList.add("aos-init");
        aosElem.setAttribute("data-aos-easing", easing);
    });
}