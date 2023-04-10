import Phaser from "phaser";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    //Preloads all resources needed to the game
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
        this.load.image('r1', 'assets/Recipes/R1.png')
        this.load.image('r2', 'assets/Recipes/R2.png')
        this.load.image('r3', 'assets/Recipes/R3.png')
        this.load.image('r4', 'assets/Recipes/R4.png')
        this.load.image('r5', 'assets/Recipes/R5.png')
        this.load.image('r6', 'assets/Recipes/R6.png')
        this.load.image('r7', 'assets/Recipes/R7.png')
        this.load.image('r8', 'assets/Recipes/R8.png')
        this.load.image('r9', 'assets/Recipes/R9.png')
        this.load.image('r10', 'assets/Recipes/R10.png')
        this.load.image('menu', 'assets/Background/menu.png')
        this.load.image('game_over', 'assets/Background/gameover.png')
        this.load.image('play_button', 'assets/Background/play_button.png')
        this.load.image('reward', 'assets/Background/reward.png')
        this.load.image('punish', 'assets/Background/punish.png')
        this.load.atlas('droppers', 'assets/SpriteSheets/droppers.png', 'assets/SpriteSheets/droppers.json')
        this.load.spritesheet('conveyor_belt', 'assets/SpriteSheets/conveyor_belt.png', {
            frameWidth: 1380, frameHeight: 110
        })

    }

    //Creates belt movement animation, and starts the menu scene
    create()
    {
        this.anims.create({
            key: 'beltMove',
            frames: this.anims.generateFrameNumbers('conveyor_belt', { start: 0, end:2 }),
            frameRate: 10
        })

        this.scene.start('menu')

    }

}