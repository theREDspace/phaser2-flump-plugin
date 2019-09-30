import { 
    EMPTY_KEYFRAME, 
    EMPTY_LABEL 
} from "../../constants/Constants";

/**
 * KeyframeData - TODO: desciption
 */
export class KeyframeData {
    get isEmpty() { return this.ref === EMPTY_KEYFRAME; }
    get rotation() { return this.skewX; }

    constructor(json) {
        if (json.index === undefined) {
            throw new Error("Keyframe is missing index field.");
        }
        /**
         * @type {string}
         */
        this.index = json.index;

        if (json.duration === undefined) {
            throw new Error("Keyframe is missing duration field");
        }
        /**
         * @type {number}
         */
        this.duration = json.duration;

        /**
         * @type {string}
         */
        this.ref = json.ref || EMPTY_KEYFRAME;
        /**
         * @type {number}
         */
        this.alpha = json.alpha || 1;
        /**
         * @type {boolean}
         */
        this.visible = json.visible || true;
        /**
         * @type {number}
         */
        this.ease = json.ease || 1;
        /**
         * @type {boolean}
         */
        this.tweened = json.tweened || true;
        /**
         * @type {string}
         */
        this.label = json.label || EMPTY_LABEL;

        const loc = json.loc || [0, 0];
        /**
         * @type {number}
         */
        this.x = loc[0];
        /**
         * @type {number}
         */
        this.y = loc[1];

        const scale = json.scale || [1, 1];
        /**
         * @type {number}
         */
        this.scaleX = scale[0];
        /**
         * @type {number}
         */
        this.scaleY = scale[1];

        const skew = json.skew || [0, 0];
        /**
         * @type {number}
         */
        this.skewX = skew[0];
        /**
         * @type {number}
         */
        this.skewY = skew[1];

        const pivot = json.pivot || [0, 0];
        /**
         * @type {number}
         */
        this.pivotX = pivot[0];
        /**
         * @type {number}
         */
        this.pivotY = pivot[1];
    }
}