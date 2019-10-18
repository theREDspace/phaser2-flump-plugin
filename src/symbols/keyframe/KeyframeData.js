import { 
    EMPTY_KEYFRAME, 
    EMPTY_LABEL 
} from "../../constants/Constants";

/**
 * Symbol state information for an individual keyframe of an animation.
 * 
 * @version 1.0
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
         * @readonly
         * @version 1.0
         */
        this.index = json.index;

        if (json.duration === undefined) {
            throw new Error("Keyframe is missing duration field");
        }
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.duration = json.duration;

        /**
         * @type {string}
         * @readonly
         * @version 1.0
         */
        this.ref = json.ref === undefined ? EMPTY_KEYFRAME : json.ref;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.alpha = json.alpha === undefined ? 1 : json.alpha;
        /**
         * @type {boolean}
         * @readonly
         * @version 1.0
         */
        this.visible = json.visible === undefined ? true : json.visible;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.ease = json.ease === undefined ? 0 : json.ease;
        /**
         * @type {boolean}
         * @readonly
         * @version 1.0
         */
        this.tweened = json.tweened === undefined ? true : json.tweened;
        /**
         * @type {string}
         * @readonly
         * @version 1.0
         */
        this.label = json.label === undefined ? EMPTY_LABEL : json.label;

        const loc = json.loc === undefined ? [0, 0] : json.loc;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.x = loc[0];
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.y = loc[1];

        const scale = json.scale === undefined ? [1, 1] : json.scale;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.scaleX = scale[0];
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.scaleY = scale[1];

        const skew = json.skew === undefined ? [0, 0] : json.skew;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.skewX = skew[0];
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.skewY = skew[1];

        const pivot = json.pivot === undefined ? [0, 0] : json.pivot;
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.pivotX = pivot[0];
        /**
         * @type {number}
         * @readonly
         * @version 1.0
         */
        this.pivotY = pivot[1];
    }
}