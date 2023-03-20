import Phaser from "phaser";
import Food from "./Food";

const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe_note'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const DROPPER_KEY = 'droppers'
const WALL_KEY = 'wall'

var plate
var belt
var droppers
var walls
var meal
var cursors
var spacebar
var chef


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

        plate = this.createPlate()
        belt = this.physics.add.staticSprite(750, 700 , BELT_KEY, 0)
        droppers = this.createDroppers()
        walls = this.add.image(770, 220, WALL_KEY).setRotation(1.57079633).setScale(1, 3).setVisible(false)

        meal = this.add.group()
        meal.add(plate)

        chef = new Food(this)

        this.physics.add.collider(plate, belt)
        
        
        cursors = this.input.keyboard.createCursorKeys()
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    
    }
    
    createPlate()
    {
        const plate = this.physics.add.sprite(280, 550, PLATE_KEY)
        plate.setCollideWorldBounds()

        return plate
    }
    

    createDroppers()
    {
        const dropper = this.add.blitter(210, 50, DROPPER_KEY)

        dropper.create(0, 0, 'D1_Bot_Bun')
        dropper.create(160, 0, 'D6_Patty')
        dropper.create(320, 0, 'D4_Cheese')
        dropper.create(480, 0, 'D3_Bacon')
        dropper.create(640, 0, 'D5_Lettuce')
        dropper.create(800, 0, 'D7_Tomato')
        dropper.create(960, 0, 'D2_Top_Bun')
        
    }

    dropFood()
    {    
        const plate_coord = plate.x
        var food

        if (210 < plate_coord && plate_coord < 370) {
            food = chef.createFood(1)
        }
        else if(370 < plate_coord && plate_coord < 530){
            food = chef.createFood(2)
        }
        else if(530 < plate_coord && plate_coord < 690){
            food = chef.createFood(3)
        }
        else if(690 < plate_coord && plate_coord < 850){
            food = chef.createFood(4)
        }
        else if(850 < plate_coord && plate_coord < 1010){
            food = chef.createFood(5)
        }
        else if(1010 < plate_coord && plate_coord < 1170){
            food = chef.createFood(6)
        }
        else if(1170 < plate_coord && plate_coord < 1330){
            food = chef.createFood(7)
        }

        this.physics.add.collider(meal, food)
        return food
    }

    update()
    {
        if(Phaser.Input.Keyboard.JustDown(cursors.right))
        {
            if(plate.body.x + 162 < 1330){

                meal.getChildren().forEach((child) => {
                    child.x += 162
                });
                belt.anims.play('beltMove')
            }
            
        }
        else if(Phaser.Input.Keyboard.JustDown(cursors.left))
        {
            if(plate.body.x - 162 > 200){
                meal.getChildren().forEach((child) => {
                    child.x -= 162
                });
                belt.anims.play('beltMove')
            }
        }
        else if(Phaser.Input.Keyboard.JustDown(spacebar))
        {
            var food
            food = this.dropFood()
            meal.add(food)

            
            
        }
    }

}
