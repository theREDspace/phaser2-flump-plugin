/**
 * Symbol - TODO: desciption
 */
export class Symbol extends Phaser.Image {
    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);
        /**
         * @type {Phaser.Point}
         */
        this.skew = new Phaser.Point(0, 0);
    }

    destroy() {
        this.skew = undefined;
        super.destroy();
    }

    displayObjectUpdateTransform(parent) {
        if (!parent && !this.parent && !this.game) {
            return;
        }

        var p = this.parent;

        if (parent) {
            p = parent;
        }
        else if (!this.parent) {
            p = this.game.world;
        }

        // create some matrix refs for easy access
        var pt = p.worldTransform;
        var wt = this.worldTransform;

        // temporary matrix variables
        var a, b, c, d, tx, ty;

        // so if rotation is between 0 then we can simplify the multiplication process..
        if (this.rotation % PIXI.PI_2 || this.skew.x || this.skew.y) {

            // get the matrix values of the displayobject based on its transform properties..
            a  =  this.scale.x * Math.cos(this.rotation + this.skew.y);
            b  =  this.scale.x * Math.sin(this.rotation + this.skew.y);
            c  =  this.scale.y * Math.sin(-this.rotation - this.skew.x);
            d  =  this.scale.y * Math.cos(this.rotation + this.skew.x);
            tx =  this.position.x;
            ty =  this.position.y;
            
            // check for pivot.. not often used so geared towards that fact!
            if (this.pivot.x || this.pivot.y)
            {
                tx -= this.pivot.x * a + this.pivot.y * c;
                ty -= this.pivot.x * b + this.pivot.y * d;
            }

            // concat the parent matrix with the objects transform.
            wt.a  = a  * pt.a + b  * pt.c;
            wt.b  = a  * pt.b + b  * pt.d;
            wt.c  = c  * pt.a + d  * pt.c;
            wt.d  = c  * pt.b + d  * pt.d;
            wt.tx = tx * pt.a + ty * pt.c + pt.tx;
            wt.ty = tx * pt.b + ty * pt.d + pt.ty;
        }
        else {
            // lets do the fast version as we know there is no rotation..
            a  = this.scale.x;
            d  = this.scale.y;

            tx = this.position.x - this.pivot.x * a;
            ty = this.position.y - this.pivot.y * d;

            wt.a  = a  * pt.a;
            wt.b  = a  * pt.b;
            wt.c  = d  * pt.c;
            wt.d  = d  * pt.d;
            wt.tx = tx * pt.a + ty * pt.c + pt.tx;
            wt.ty = tx * pt.b + ty * pt.d + pt.ty;
        }

        // multiply the alphas..
        /** @ignore */
        this.worldAlpha = this.alpha * p.worldAlpha;

        this.worldPosition.set(wt.tx, wt.ty);
        this.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
        /** @ignore */
        this.worldRotation = Math.atan2(-wt.c, wt.d);

        // reset the bounds each time this is called!
        this._currentBounds = null;

        //  Custom callback?
        if (this.transformCallback) {
            this.transformCallback.call(this.transformCallbackContext, wt, pt);
        }
    }
}