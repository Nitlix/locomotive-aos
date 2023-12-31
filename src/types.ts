

export interface Config {
    /**
     * The duration (in ms) of the animation
     * @default 1000
    */
    duration?: number;
    /**
     * The easing function to be used for the animation
     * @default ease-in-out
    */
    easing?: string;
    /**
     * The callback function to be called when the element enters the viewport.
    */
    callback?: (element: Element, status: "enter" | "exit", observer: IntersectionObserver, entry: IntersectionObserverEntry) => void;
    /**
     * Whether to mirror the animation when the element is out of view
     * @default false
    */
    mirror?: boolean;
    /**
     * The delay (in ms) before the animation starts
     * @default 0
    */
    delay?: number;
    /**
     * The offset (in px) from the top of the element to trigger the animation
     * @default 0px
    */
    offset?: number;
    /**
     * Whether to disable animations on mobile devices
     * @default false
    */
    mobile?: boolean;
    /**
     * The minimum width of the window for animations to be enabled. (Otherwise they will be disabled at initialisation)
     * @default 0
    */
    minWindowWidth?: number;
}