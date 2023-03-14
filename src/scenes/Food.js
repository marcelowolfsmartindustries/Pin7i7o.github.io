import Phaser from "phaser";

const BOT_KEY = 'bun_bot'
const TOP_KEY = 'bun_top'
const BACON_KEY = 'bacon'
const CHEESE_KEY = 'cheese'
const LETTUCE_KEY = 'lettuce'
const PATTY_KEY = 'patty'
const TOMATO_KEY = 'tomato'

export default class Food extends Phaser.Scene
{
    constructor() {
        super('food')
    }

    createFood(number)
    {
        switch (number) {
            case 1:
                const bot_bun = this.physics.add.sprite(210, 190, BOT_KEY)
                bot_bun.setCollideWorldBounds(true)
                return bot_bun
        
            case 2:
                const patty = this.physics.add.sprite(370, 190, PATTY_KEY)
                patty.setCollideWorldBounds(true)
                return patty
            
            case 3: 
                const cheese = this.physics.add.sprite(530, 190, CHEESE_KEY)
                cheese.setCollideWorldBounds(true)
                return cheese

            case 4:
                const bacon = this.physics.add.sprite(210, 190, BACON_KEY)
                bacon.setCollideWorldBounds(true)
                return bacon

            case 5:
                const lettuce = this.physics.add.sprite(210, 190, LETTUCE_KEY)
                lettuce.setCollideWorldBounds(true)
                return lettuce

            case 6:
                const tomato = this.physics.add.sprite(210, 190, TOMATO_KEY)
                tomato.setCollideWorldBounds(true)
                return tomato

            case 7:
                const top_bun = this.physics.add.sprite(210, 190, TOP_KEY)
                top_bun.setCollideWorldBounds(true)
                return top_bun


            default:
                break;
        }
    }

}