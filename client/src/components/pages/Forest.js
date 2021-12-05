import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Pseudocode for the pseudocode

// Make a class constructor for the enemies with the following object keys:
// currentHP
// maxHP
// power
// img file
// ID

// number of enemies varries, their power/hp scales with player team
// add up all the player lvls and power and hp and use that to calculate the spread of the enemies

// Player opions:
// For each cat when it is that cat's turn, there is a menu with "attack, special, escape"

// Warrior
// specialty: enemies have a X higher chance of attacking warrior
// attack: low single target damage
// special: takes damage for someone else

// Mage 
// specialty: 20% chance to crit
// attack: High single target damage
// special: low HP party heal

// Rogue
// speciality: 20% chance to act a second time in the turn
// attack: medium single target damage
// special: low AOE damage

// Global data structures

// turnOrder is an array keeps track of the turn order
// battlePositions is an object that holds the position at each key and either an enemy or cat object as it's value

// **Pseudocode**

// preBattle function: (this runs once, to establish enemy stats and set up the turnOrder array)

//  1. call the preBattle function when user enters the forest area
//  2. make a variable called numEnemies set equal to a random number between 1 and 4.
//  4. make a variable called enemyBaseHP, set equal to the sum of the player's cats' HP, divide by numEnemies
//  5. make a variable called enemyBasePower, set equal to the sum of the player's cats' power, divide by numEnemies
//  9. make an empty array called turnOrder
//  6. Initialize a for loop wih i=0
//  7. make a new Enemy object using the enemyBaseHP, enemyBasePower, randomly selected image and ID=i
// 7a. note, enemyBaseHP and enemyBasePower both get run through the RNGsus function with a spread of 4 and 2 respectively
//  8. push that Enemy object's ID to the turnOrder array
//  9. Repeat step 7 while i < numEnemies
// 10. for each cat in the user's cat array, push the cat's ID to the turnOrder array
// 11. Shuffle the turnOrder array
// 12. Initialize a for loop with j=1, For each element in the turnOrder array do the following steps
// 13. Use filter to find the matching cat object or enemy object,
// 14. on the battlePositions object, create a key equal to j and the value equal to that cat or enemy object

// After preBattle, battlePositions object will have a key of 1 with a value of the object in position 1, etc...
// and the turnOrder will be an array with each enemy or cat ID.

// checkStatus function: (when called, checks the currentHP of every cat and every enemy; determines if there is a winner)

//  1. 

// battleTurn function

// 
// call the battleTurn function, passing in the turnOrder array
//

function Forest() {
    return (
        <section>
            <h2>Deadly Forest</h2>
            <div>Battle!</div>
            <Button as={Link} to="/village">Back</Button>
        </section>
    )
}

export default Forest;