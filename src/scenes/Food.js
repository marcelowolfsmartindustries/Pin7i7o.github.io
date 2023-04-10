import Phaser from "phaser";

const BOT_KEY = 'bun_bot'
const TOP_KEY = 'bun_top'
const BACON_KEY = 'bacon'
const CHEESE_KEY = 'cheese'
const LETTUCE_KEY = 'lettuce'
const PATTY_KEY = 'patty'
const TOMATO_KEY = 'tomato'
const R1_KEY = 'r1'
const R2_KEY = 'r2'
const R3_KEY = 'r3'
const R4_KEY = 'r4'
const R5_KEY = 'r5'
const R6_KEY = 'r6'
const R7_KEY = 'r7'
const R8_KEY = 'r8'
const R9_KEY = 'r9'
const R10_KEY = 'r10'

let lvl1
let lvl2
let lvl3
let lvl4
let lvl5

export default class Food
{
    constructor(scene) {
        this.scene = scene

        //Level Arrays with the recipe to make
        const obj2 = [['plate', 'bun_bot', 'patty', 'bacon', 'bun_top'], ['plate', 'bun_bot', 'patty', 'bacon', 'cheese', 'bun_top']]
        const obj3 = [['plate', 'bun_bot', 'patty', 'cheese', 'lettuce', 'bun_top'], ['plate', 'bun_bot', 'patty', 'cheese', 'bacon', 'lettuce', 'bun_top']]
        const obj4 = [['plate', 'bun_bot', 'patty', 'tomato', 'lettuce', 'bun_top'], ['plate', 'bun_bot', 'patty', 'cheese', 'tomato', 'lettuce', 'bun_top']]
        const obj5 = [['plate', 'bun_bot', 'patty', 'cheese', 'bacon', 'tomato', 'lettuce', 'bun_top']]
        
        lvl1 = [['plate', 'bun_bot', 'patty', 'bun_top'], ['plate', 'bun_bot', 'patty', 'cheese', 'bun_top'], ['plate', 'bun_bot', 'cheese', 'patty', 'cheese', 'bun_top']]
        lvl2 = [].concat(lvl1, obj2)
        lvl3 = [].concat(lvl2, obj3)
        lvl4 = [].concat(lvl3, obj4)
        lvl5 = [].concat(lvl4, obj5)     
    }

    //Adds food to the scene, depending on the number given when its called
    createFood(number)
    {
        let food
        switch (number) {
            case 1:
                food = this.scene.physics.add.sprite(280, 250, BOT_KEY)
                food.setCollideWorldBounds(true)
                break;
        
            case 2:
                food = this.scene.physics.add.sprite(445, 250, PATTY_KEY)
                food.setCollideWorldBounds(true)
                break;
            
            case 3: 
                food = this.scene.physics.add.sprite(605, 250, CHEESE_KEY)
                food.setCollideWorldBounds(true)
                break;

            case 4:
                food = this.scene.physics.add.sprite(765, 250, BACON_KEY)
                food.setCollideWorldBounds(true)
                break;

            case 5:
                food = this.scene.physics.add.sprite(930, 250, LETTUCE_KEY)
                food.setCollideWorldBounds(true)
                break;

            case 6:
                food = this.scene.physics.add.sprite(1090, 250, TOMATO_KEY)
                food.setCollideWorldBounds(true)
                break;

            case 7:
                food = this.scene.physics.add.sprite(1255, 250, TOP_KEY)
                food.setCollideWorldBounds(true)
                break;

            default:
                break;
        }

        return food
    }

    //Returns the current level recipes based on the level given when called
    getCurrentRecipe(level)
    {
        switch (level) {
            case 1:
                return lvl1

            case 2:
                return lvl2

            case 3:
                return lvl3

            case 4:
                return lvl4

            case 5:
                return lvl5

            default:
                break;
        }
    }

    //Displays the recipe based on the recipe number to be displayed when called
    displayRecipe(recipeNumber){

        switch (recipeNumber) {
            case 0:
                this.scene.add.image(70, 190, R1_KEY)
                break;
            
            case 1:
                this.scene.add.image(70, 190, R2_KEY)
                break;

            case 2:
                this.scene.add.image(70, 190, R3_KEY)
                break;

            case 3:
                this.scene.add.image(70, 190, R4_KEY)
                break;

            case 4:
                this.scene.add.image(70, 190, R5_KEY)
                break;

            case 5:
                this.scene.add.image(70, 190, R6_KEY)
                break;

            case 6:
                this.scene.add.image(70, 190, R7_KEY)
                break;

            case 7:
                this.scene.add.image(70, 190, R8_KEY)
                break;

            case 8:
                this.scene.add.image(70, 190, R9_KEY)
                break;

            case 9:
                this.scene.add.image(70, 190, R10_KEY)
                break;

            default:
                break;
        }

        return recipeNumber
    }



}