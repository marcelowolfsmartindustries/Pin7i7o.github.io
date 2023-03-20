import Phaser from "phaser";

const BOT_KEY = 'bun_bot'
const TOP_KEY = 'bun_top'
const BACON_KEY = 'bacon'
const CHEESE_KEY = 'cheese'
const LETTUCE_KEY = 'lettuce'
const PATTY_KEY = 'patty'
const TOMATO_KEY = 'tomato'

export default class Food
{
    constructor(scene) {
        this.scene = scene
    }

    createFood(number)
    {
        var food
        switch (number) {
            case 1:
                food= this.scene.physics.add.sprite(280, 280, BOT_KEY)
                food.setCollideWorldBounds(true)
                return food
        
            case 2:
                food = this.scene.physics.add.sprite(445, 280, PATTY_KEY)
                food.setCollideWorldBounds(true)
                return food
            
            case 3: 
                food = this.scene.physics.add.sprite(605, 280, CHEESE_KEY)
                food.setCollideWorldBounds(true)
                return food

            case 4:
                food = this.scene.physics.add.sprite(765, 280, BACON_KEY)
                food.setCollideWorldBounds(true)
                return food

            case 5:
                food = this.scene.physics.add.sprite(930, 280, LETTUCE_KEY)
                food.setCollideWorldBounds(true)
                return food

            case 6:
                food = this.scene.physics.add.sprite(1090, 280, TOMATO_KEY)
                food.setCollideWorldBounds(true)
                return food

            case 7:
                food = this.scene.physics.add.sprite(1255, 280, TOP_KEY)
                food.setCollideWorldBounds(true)
                return food


            default:
                break;
        }
    }
}