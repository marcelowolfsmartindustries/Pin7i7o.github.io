import Phaser from "phaser";

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
        this.load.image('wall', 'assets/platform.png')
        this.load.image('bun_bot', 'assets/Food/Bun_Bot.png')
        this.load.image('bun_top', 'assets/Food/Bun_Top.png')
        this.load.image('bacon', 'assets/Food/Bacon.png')
        this.load.image('cheese', 'assets/Food/Cheese.png')
        this.load.image('lettuce', 'assets/Food/Lettuce.png')
        this.load.image('patty', 'assets/Food/Patty.png')
        this.load.image('tomato', 'assets/Food/Tomato.png')
        this.load.atlas('droppers', 'assets/SpriteSheets/droppers.png', 'assets/SpriteSheets/droppers.json')
        this.load.spritesheet('conveyor_belt', 'assets/SpriteSheets/conveyor_belt.png', {
            frameWidth: 1380, frameHeight: 110
        })

    }

    create()
    {
        this.anims.create({
            key: 'beltMove',
            frames: this.anims.generateFrameNumbers('conveyor_belt', { start: 0, end:2 }),
            frameRate: 10
        })


        this.scene.start('game')

    }

}