import Phaser from "phaser";

const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const D1_KEY = 'Dropper1'
const D2_KEY = 'Dropper2'
const D3_KEY = 'Dropper3'
const D4_KEY = 'Dropper4'
const D5_KEY = 'Dropper5'
const D6_KEY = 'Dropper6'
const D7_KEY = 'Dropper7'
const R1_KEY = 'Recipe1'
const R2_KEY = 'Recipe2'
const R3_KEY = 'Recipe3'
const R4_KEY = 'Recipe4'
const R5_KEY = 'Recipe5'
const R6_KEY = 'Recipe6'
const R7_KEY = 'Recipe7'
const R8_KEY = 'Recipe8'
const R9_KEY = 'Recipe9'
const R10_KEY = 'Recipe10'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        this.load.image('kitchen', 'assets/Background/kitchen.png')
        this.load.image('recipe_note', 'assets/Background/recipe_note.png')
        this.load.image('plate', 'assets/plate.png')
        this.load.image('Dropper1', 'assets/Droppers/D1_Bot_Bun.png')
        this.load.image('Dropper2', 'assets/Droppers/D2_Top_Bun.png')
        this.load.image('Dropper3', 'assets/Droppers/D3_Bacon.png')
        this.load.image('Dropper4', 'assets/Droppers/D4_Cheese.png')
        this.load.image('Dropper5', 'assets/Droppers/D5_Lettuce.png')
        this.load.image('Dropper6', 'assets/Droppers/D6_Patty.png')
        this.load.image('Dropper7', 'assets/Droppers/D7_Tomato.png')
        this.load.image('Recipe1', 'assets/Recipes/R1_Basico.png')
        this.load.image('Recipe2', 'assets/Recipes/R2_Cheese.png')
        this.load.image('Recipe3', 'assets/Recipes/R3_2XCheese.png')
        this.load.image('Recipe4', 'assets/Recipes/R4_Bacon.png')
        this.load.image('Recipe5', 'assets/Recipes/R5_Bacon_Cheese.png')
        this.load.image('Recipe6', 'assets/Recipes/R6_Lettuce_Cheese.png')
        this.load.image('Recipe7', 'assets/Recipes/R7_Lettuce_Cheese_Bacon.png')
        this.load.image('Recipe8', 'assets/Recipes/R8_Lettuce_Tomato.png')
        this.load.image('Recipe9', 'assets/Recipes/R9_Lettuce_Tomato_Cheese.png')
        this.load.image('Recipe10', 'assets/Recipes/R10_Lettuce_Tomato_Cheese_Bacon.png')
        this.load.spritesheet('conveyor_belt', 'assets/SpriteSheets/conveyor_belt.png', {
            frameWidth: 1380, frameHeight: 110
        })

    }

    create()
    {
        this.anims.create({
            key: 'beltMove',
            frames: this.anims.generateFrameNumbers('conveyor_belt', { start: 0, end:2 }),
            frameRate: 10,
            repeat: -1
        })

        this.scene.start('game')

    }

}