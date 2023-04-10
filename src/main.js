import Phaser from 'phaser'
import Food from './scenes/Food'
import Game from './scenes/Game'
import Preloader from './scenes/Preloader'
import Menu from './scenes/Menu'
import GameOver from './scenes/GameOver'

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
			gravity: { y: 3000 }
		}
	},
	scene: [Preloader, Game, Food, Menu, GameOver]
}

export default new Phaser.Game(config)
