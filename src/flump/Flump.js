export class Flump extends Phaser.Plugin {
    constructor(game, parent) {
        super(game, parent);
        this.game.flump = this.game.flump || this;
    }
}