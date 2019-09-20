input.onButtonPressed(Button.A, function () {
    Player1Wins += 1
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Player2Wins += 1
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
let Ties = 0
let Player2Wins = 0
let Player1Wins = 0
input.onShake(function () {
    basic.showString("Wins")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showNumber(Player1Wins)
    basic.pause(3000)
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showNumber(Player2Wins)
    basic.pause(3000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showNumber(Ties)
    basic.pause(3000)
    basic.clearScreen()
})

// I wrote this entire program using JS, and it seems to function correctly using my Micro:Bit.
// I had to look at the blocks part of the editor twice, to find a couple functions and what categories they were in
// notably for the variables and the start, which seems to be "let."
