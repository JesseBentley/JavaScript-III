/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const thatGuy = {
    name: 'Luke Skywalker',
    class: 'Jedi',
    attack: function(damage){
        console.log(`${this.name} attacks you for ${damage} damage. You have ${health} left`)
    }
}
let attackDamage = Math.random()
let health = 10 - attackDamage
thatGuy.attack(attackDamage, health)

// Principle 3

// code example for New Binding

//avoiding copywrite lawsuit amiright?
function pokeyMans(name, element){
    this.name = name;
    this.element = element;
    this.baseDamage = 12;
    this.attack = function() {
        console.log(`${this.name} attacks using ${this.element} blast. You take ${this.baseDamage}.`)
    }
}

const peekatchoo = new pokeyMans('Peekatchoo', 'electricity')
peekatchoo.attack();

// Principle 4

// code example for Explicit Binding not Explicity Language
let jackSparrow = {
    name: 'Jack Sparrow',
    skills: 'Wooing the womenfolk',
    age: 'known unknow',
    weapon: 'Wit'
}
let happyGilmore = {
    name: 'Happy Gilmore',
    skills: 'Gold - Sometimes Hockey',
    age: `I'm not sure actually.`,
    weapon: 'Hock stick'
}
let whatsMyName = function (name) {
    console.log (`I am the best for my name is ${this.name}`)
}
whatsMyName.call(jackSparrow)
whatsMyName.call(happyGilmore)
