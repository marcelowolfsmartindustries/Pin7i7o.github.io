import Phaser from "phaser";
import Food from "./Food";

const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe_note'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const DROPPER_KEY = 'droppers'
const WALL_KEY = 'wall'


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
        this.walls = this.createInvisWalls()


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
    
    createInvisWalls()
    {
        const walls = this.physics.add.staticGroup()

        walls.create(70, 700, WALL_KEY)
        walls.create(1430, 700, WALL_KEY)
        walls.setVisible(true)

        return walls
    }

    createDroppers()
    {
        const dropper = this.add.blitter(210, 150, DROPPER_KEY)
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

    dropFood(){
        
        const plate_coord = this.plate.x
        const food = new Food()

        if (210 < plate_coord && plate_coord < 370) {
            var bot = food.createFood(1)
            this.physics.add.collider(bot, this.plate)
        }
    }

    update()
    {
        if(Phaser.Input.Keyboard.JustDown(this.cursors.right))
        {

            this.plate.body.x += 162
            this.belt.anims.play('beltMove')
            
        }
        else if(Phaser.Input.Keyboard.JustDown(this.cursors.left))
        {
            this.plate.body.x -= 162
            this.belt.anims.play('beltMove')
        }
        else if(Phaser.Input.Keyboard.JustDown(this.spacebar))
        {
            this.dropFood()
        }
    }

}
