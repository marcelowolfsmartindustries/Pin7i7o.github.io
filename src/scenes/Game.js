import Phaser from "phaser";
import { Actions } from 'phaser';

const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe_note'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const DROPPER_KEY = 'droppers'
const WALL_KEY = 'wall'
const BOT_KEY = 'bun_bot'
const TOP_KEY = 'bun_top'
const BACON_KEY = 'bacon'
const CHEESE_KEY = 'cheese'
const LETTUCE_KEY = 'lettuce'
const PATTY_KEY = 'patty'
const TOMATO_KEY = 'tomato'


export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game')
    }

    create()
    {
        this.add.image(750, 390, KITCHEN_KEY)
        this.add.image(70, 150, RECIPENOTE_KEY).setScale(1.2)

        this.plate = this.createPlate()
        this.belt = this.physics.add.staticSprite(750, 700 , BELT_KEY, 0)
        this.droppers = this.createDroppers()
        this.walls = this.add.image(770, 220, WALL_KEY).setRotation(1.57079633).setScale(1, 3).setVisible(false)

        this.meal = this.physics.add.group()
        this.meal.add(this.plate)


        this.physics.add.collider(this.plate, this.belt)
        
        
        this.cursors = this.input.keyboard.createCursorKeys()
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    
    }
    
    createPlate()
    {
        const plate = this.physics.add.sprite(280, 550, PLATE_KEY)
        plate.setCollideWorldBounds(true)

        return plate
    }
    

    createDroppers()
    {
        const dropper = this.add.blitter(210, 50, DROPPER_KEY)
        const array = new Array(7)

        array[0] = dropper.create(0, 0, 'D1_Bot_Bun')
        array[1] = dropper.create(160, 0, 'D6_Patty')
        array[2] = dropper.create(320, 0, 'D4_Cheese')
        array[3] = dropper.create(480, 0, 'D3_Bacon')
        array[4] = dropper.create(640, 0, 'D5_Lettuce')
        array[5] = dropper.create(800, 0, 'D7_Tomato')
        array[6] = dropper.create(960, 0, 'D2_Top_Bun')
        
        return array
    }

    createFood(number)
    {
        switch (number) {
            case 1:
                var bot_bun = this.physics.add.sprite(280, 280, BOT_KEY)
                bot_bun.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, bot_bun)
                return bot_bun
        
            case 2:
                var patty = this.physics.add.sprite(445, 280, PATTY_KEY)
                patty.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, patty)
                return patty
            
            case 3: 
                var cheese = this.physics.add.sprite(605, 280, CHEESE_KEY)
                cheese.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, cheese)
                return cheese

            case 4:
                var bacon = this.physics.add.sprite(765, 280, BACON_KEY)
                bacon.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, bacon)
                return bacon

            case 5:
                var lettuce = this.physics.add.sprite(930, 280, LETTUCE_KEY)
                lettuce.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, lettuce)
                return lettuce

            case 6:
                var tomato = this.physics.add.sprite(1090, 280, TOMATO_KEY)
                tomato.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, tomato)
                return tomato

            case 7:
                var top_bun = this.physics.add.sprite(1255, 280, TOP_KEY)
                top_bun.setCollideWorldBounds(true)
                this.physics.add.collider(this.walls, top_bun)
                return top_bun


            default:
                break;
        }
    }

 
    dropFood()
    {    
        const plate_coord = this.plate.x
        var food

        if (210 < plate_coord && plate_coord < 370) {
            food = this.createFood(1)
            this.meal.add(food)
        }
        else if(370 < plate_coord && plate_coord < 530){
            food = this.createFood(2)
            this.meal.add(food)
        }
        else if(530 < plate_coord && plate_coord < 690){
            food = this.createFood(3)
            this.meal.add(food)
        }
        else if(690 < plate_coord && plate_coord < 850){
            food = this.createFood(4)
            this.meal.add(food)
        }
        else if(850 < plate_coord && plate_coord < 1010){
            food = this.createFood(5)
            this.meal.add(food)
        }
        else if(1010 < plate_coord && plate_coord < 1170){
            food = this.createFood(6)
            this.meal.add(food)
        }
        else if(1170 < plate_coord && plate_coord < 1330){
            food= this.createFood(7)
            this.meal.add(food)
        }

        food.setCollideWorldBounds()
        this.physics.add.collider(this.plate, food)
        
    }

    


    update()
    {
        if(Phaser.Input.Keyboard.JustDown(this.cursors.right))
        {
            this.meal.getChildren().forEach(function(child){
                child.x += 162
            });
            this.belt.anims.play('beltMove')
            
        }
        else if(Phaser.Input.Keyboard.JustDown(this.cursors.left))
        {
            this.meal.getChildren().forEach(function(child){
                child.x -= 162
            });
            this.belt.anims.play('beltMove')
        }
        else if(Phaser.Input.Keyboard.JustDown(this.spacebar))
        {
           this.dropFood()
            
            
        }
    }

}
