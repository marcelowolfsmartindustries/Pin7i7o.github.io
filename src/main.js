import Phaser from 'phaser'
import Food from './scenes/Food'
import Game from './scenes/Game'
import Preloader from './scenes/Preloader'

const config = {
	type: Phaser.AUTO,
	width: 1500,
	height: 780,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	scene: [Preloader, Game, Food]
}

export default new Phaser.Game(config)
