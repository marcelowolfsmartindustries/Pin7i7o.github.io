import Phaser from "phaser";

//Reference keys to loaded resources
const OVER_KEY = 'game_over'
const PLAY_KEY = 'play_button'

export default class GameOver extends Phaser.Scene
{
    constructor() {
        super('gameover')
    }

    //Displays a background and a button, when clicking the button the scene switches to the game scene
    create() {
        this.add.image(750, 390, OVER_KEY) 
    
        let playButton = this.add.image(750, 500, PLAY_KEY).setScale(0.7);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
          this.scene.start('game')
          this.scene.get('game').reset()

        })

    } 
}