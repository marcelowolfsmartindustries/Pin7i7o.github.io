import Phaser from "phaser";
import Food from "./Food";

//Reference keys to loaded resources
const KITCHEN_KEY = 'kitchen'
const RECIPENOTE_KEY = 'recipe_note'
const BELT_KEY = 'conveyor_belt'
const PLATE_KEY = 'plate'
const DROPPER_KEY = 'droppers'
const W_KEY = 'reward'
const L_KEY = 'punish'

//keyboard keys Variables
let cursors
let spacebar
let enter
let addLevel
let addToTimer

//Game Objects variables
let plate
let belt
let meal
let chef

//Game logic variables
let foodLimiter
let levelNumber = 1
let textLevel
let timer = 60
let textTimer
let recipes = 5
let recipeCounter = 0
let currentRecipeNumber = 0
let currentRecipeIndex = 0
let gameOver = false

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game')
    }

    create()
    {
        //Food scene reference variable
        chef = new Food(this)

        //Background  
        this.add.image(750, 390, KITCHEN_KEY)
        this.add.image(70, 150, RECIPENOTE_KEY).setScale(1.2)
        belt = this.physics.add.staticSprite(750, 700 , BELT_KEY, 0)
        this.createDroppers()
        chef.displayRecipe(currentRecipeNumber) //Displays the recipe to be made

        //Interactable objects
        plate = this.createPlate()

        //Group to hold the food that gets dropped
        meal = this.physics.add.group()
        meal.add(plate)

        //Keyboard Interactions
        cursors = this.input.keyboard.createCursorKeys()
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        addLevel = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        addToTimer =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N)

        //Text
        textLevel = this.add.text(560, 16, 'Nível: ' + levelNumber, { font: '32px Impact'});
        textLevel.setFill('#000000')
        textTimer = this.add.text(855, 16, 'Tempo: ' + timer, { font: '32px Impact'});
        textTimer.setFill('#000000')

        //Time Events
        this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        })
    
        //Colliders
        this.physics.add.collider(meal, belt)

        //Counters
        foodLimiter = 0
    }
    
    //Function to create the background food droppers
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

    //Function to create the interactable object 'plate', returns the plate game object
    createPlate()
    {
        const plate = this.physics.add.sprite(280, 550, PLATE_KEY)
        plate.setCollideWorldBounds()

        return plate
    }


    //Returns a food game object and sets collisions with the meal group
    dropFood()
    {    
        const plate_coord = plate.x
        let food
        let mealArray
        let lastIngredient

        //Depending on the x coordinate of the plate, it drops different types of food
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

        //Collisions - Dropped food and the last object of the meal group
        mealArray = meal.getChildren()
        lastIngredient = mealArray[mealArray.length - 1]

        this.physics.add.collider(lastIngredient, food, function() {
            food.body.allowGravity  = false
            food.body.immovable  = true
        })

        return food
    }

    //Checks wether the recipe created by the player, corresponds to the objective recipe of the level
    //Returns True if it corresponds, Returns False if it doesn't
    recipeChecker(objective, recipe)
    {
        if(recipe.length == objective.length){
            let count = 0

            for (let index = 0; index < objective.length; index++) {
                if(recipe[index].texture.key === objective[index]){
                    count++
                } else{
                    count--
                }
            }

            if(count == objective.length){
                
                return true

            } else{
                
                return false
            }
        }
        
        return false
    }

    //Adds seconds to the timer, based on the current level
    addTime(level)
    {
        switch (level) {
            case 1:
                if(!(timer + 5 < 60)){
                    timer = 60
                    break;
                }

                timer +=8
                break;

            case 2:
                if(!(timer + 4 < 60)){
                    timer = 60
                    break;
                }
                
                timer += 6
                break;

            case 3:
                if(!(timer + 3 < 60)){
                    timer = 60
                    break;
                }
                
                timer +=4
                break;

            case 4:
                if(!(timer + 2 < 60)){
                    timer = 60
                    break;
                }
                
                timer +=2
                break;

            case 5:
                if(!(timer + 1 < 60)){
                    timer = 60
                    break;
                }
                
                timer +=1
                break;

            default:
                break;
        }

        //Timer text is updated
        textTimer.setText('Tempo: ' + timer);
    }

    subtractTime(level)
    {
        switch (level) {
            case 1:
                if((timer - 10 < 0)){
                    gameOver = true
                    break;
                }

                timer -= 10
                break;

            case 2:
                if((timer - 20 < 0)){
                    gameOver = true
                    break;
                }
                
                timer -= 20
                break;

            case 3:
                if((timer - 30 < 0)){
                    gameOver = true
                    break;
                }
                
                timer -= 30
                break;

            case 4:
                if((timer - 40 < 0)){
                    gameOver = true
                    break;
                }
                
                timer -= 40
                break;

            case 5:
                if((timer - 50 < 0)){
                    gameOver = true
                    break;
                }
                
                timer -= 50
                break;

            default:
                break;
        }

        //Timer text is updated
        textTimer.setText('Tempo: ' + timer);
    }

    update()
    {
        //Moves the meal group 162 pixels to the right, if the right key is pressed
        if(Phaser.Input.Keyboard.JustDown(cursors.right))
        {
            if(plate.body.x + 162 < 1330){

                meal.getChildren().forEach((child) => {
                    child.x += 162
                });
                belt.anims.play('beltMove')
            }
            
        }
        //Moves the meal group 162 pixels to the left, if the left key is pressed
        else if(Phaser.Input.Keyboard.JustDown(cursors.left))
        {
            if(plate.body.x - 162 > 200){
                meal.getChildren().forEach((child) => {
                    child.x -= 162
                });
                belt.anims.play('beltMove')
            }
        }
        
        //Drops food, if the spacebar is pressed
        //The plate can only hold 8 pieces of food
        //The game doesn't allow the player to drop the same piece of food consecutively
        if(Phaser.Input.Keyboard.JustDown(spacebar))
        {
            foodLimiter++

            if(foodLimiter <= 8){
                let food = this.dropFood()
                let mealArray = meal.getChildren()
                let lastIngredient = mealArray[mealArray.length - 1]
                
                //if the food dropped is the same as the one before, it destroys the item
                //else it is added to the meal group
                if(food.texture.key === lastIngredient.texture.key){
                    food.destroy()

                } else{
                    meal.add(food)

                }
            }
        }
        
        //Checks if the player meal corresponds to the objective to be made
        //Level 1 shows 5 recipes, levels 2-5 show 10 recipes
        if(Phaser.Input.Keyboard.JustDown(enter))
        {
            let img
            let _meal = meal.getChildren() //gets the player meal from the meal group
            let currentLevelRecipe = chef.getCurrentRecipe(levelNumber) //gets the current array of recipes to be made
            let currentRecipe = chef.getCurrentRecipe(levelNumber)[currentRecipeIndex] //gets the current recipe to be made
            
            //if the recipes match the next recipe is chosen, incremented to the recipe counter and added time
            if(this.recipeChecker(currentRecipe, _meal)){
                currentRecipeIndex = Phaser.Math.Between(0, currentLevelRecipe.length - 1) //recipes are rng
                currentRecipeNumber = currentRecipeIndex
                recipeCounter++

                img = this.add.image(750, 390, W_KEY)
                
                this.addTime(levelNumber)
                
                //if the number of correct recipes made by the player match the current level recipes number
                //it increments the level
                if(recipeCounter == recipes){
                    if ((levelNumber + 1) > 5) {
                        gameOver = true
                    } else{ 
                        currentRecipeIndex = 0
                        currentRecipeNumber = 0
                        recipes += 10

                        levelNumber++
                        textLevel.setText('Level: ' + levelNumber);
                    }
                }
            } else{
                //if the recipes don't match the timer gets subtracted based on the current level
                    this.subtractTime(levelNumber)
                    img = this.add.image(750, 390, L_KEY)
                    //Timer  text is updated
                    textTimer.setText('Tempo: ' + timer);
                }
                
                
            //When theres an image on screen the function is delayed 0.5 seconds, then destroys the image and restarts the scene
            this.time.delayedCall(500, () => {
                img.destroy()
                this.scene.restart()
            })
        }
          
        //Cheat-Code to increment levels
        if (Phaser.Input.Keyboard.JustDown(addLevel)) {
            if ((levelNumber + 1 ) > 5) {
                gameOver = true
            } else{
                levelNumber++ 
                textLevel.setText('Level: ' + levelNumber);

                timer = 60
                textTimer.setText('Tempo: ' + timer);

                recipes += 10 * (levelNumber - 1)
                recipeCounter = recipes - 10
                
                currentRecipeIndex = 0
                currentRecipeNumber = 0

                this.scene.restart()
            }
            
        }

        //Cheat-Code to reset the timer
        if (Phaser.Input.Keyboard.JustDown(addToTimer)) {
            timer = 60
            textTimer.setText('Tempo: ' + timer);
        }
        
        //Game Over scene
        if (gameOver) {
            this.scene.start('gameover')
        }
    }

    //Updates the timer each second
    updateTimer()
    {
        timer--;
        textTimer.setText('Tempo: ' + timer);

        if (timer <= 0) {
            gameOver = true
        }
    }

    //Resets the Game logic variables
    reset()
    {
        foodLimiter = 0
        levelNumber = 1
        timer = 60
        recipes = 5
        recipeCounter = 0
        currentRecipeNumber = 0
        currentRecipeIndex = 0
        gameOver = false
    }
}
