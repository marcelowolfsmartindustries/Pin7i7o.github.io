import Phaser from "phaser";

const KITCHEN_KEY = 'kitchen'
const RECIPE_KEY = 'recipe'
const PLATE_KEY = 'plate'

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene')
    }

    preload()
    {
        this.load.image(KITCHEN_KEY, 'assets/kitchen.png')
        this.load.image(RECIPE_KEY, 'assets/recipe_note.png')
        this.load.image(PLATE_KEY, 'assets/plate.png')
    }

    create()
    {
        this.add.image(750, 390, KITCHEN_KEY)
        this.add.image(70, 150, RECIPE_KEY).setScale(1.5)
        this.add.image(400, 650, PLATE_KEY).setScale(2)
    }
}