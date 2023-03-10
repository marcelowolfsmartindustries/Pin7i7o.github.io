import Phaser from "phaser";

const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe_note'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const D1_KEY = 'Dropper1'
const D2_KEY = 'Dropper2'
const D3_KEY = 'Dropper3'
const D4_KEY = 'Dropper4'
const D5_KEY = 'Dropper5'
const D6_KEY = 'Dropper6'
const D7_KEY = 'Dropper7'
const R1_KEY = 'Recipe1'
const R2_KEY = 'Recipe2'
const R3_KEY = 'Recipe3'
const R4_KEY = 'Recipe4'
const R5_KEY = 'Recipe5'
const R6_KEY = 'Recipe6'
const R7_KEY = 'Recipe7'
const R8_KEY = 'Recipe8'
const R9_KEY = 'Recipe9'
const R10_KEY = 'Recipe10'

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game')
    }

    create()
    {
        this.add.image(750, 390, KITCHEN_KEY)
        this.plate = this.createPlate
        this.add.sprite(750, 700, BELT_KEY, 0)
    }

    createPlate()
    {
        const plate = this.physics.add.sprite(300, 610, PLATE_KEY)
        this.add.image(70, 150, RECIPENOTE_KEY).setScale(1.2)
        return plate

    }



}