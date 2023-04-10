import Phaser from "phaser";

//Reference keys to loaded resources
const MENU_KEY = 'menu'
const PLAY_KEY = 'play_button'

export default class Menu extends Phaser.Scene
{
    constructor() {
        super('menu')
    }

    //Displays a background and a button, when clicking the button the scene switches to the game scene
    create() {
      this.add.image(750, 390, MENU_KEY) 
    
      let playButton = this.add.image(750, 370, PLAY_KEY).setScale(0.7);
      playButton.setInteractive();

      playButton.on('pointerdown', () => {
          this.scene.start('game');
      });

    }

    
}