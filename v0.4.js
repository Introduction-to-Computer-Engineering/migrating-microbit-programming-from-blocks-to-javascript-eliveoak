let Hands = 0
let RockWins = 0
let PaperWins = 0
let ScissorsWins = 0
input.onButtonPressed(Button.A, function () {
    Hands = Math.randomRange(1, 3)
    if (Hands == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        RockWins += 1
    } else if (Hands == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        PaperWins += 1
    } else if (Hands == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        ScissorsWins += 1
    }
})
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Wins")
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showNumber(RockWins)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showNumber(PaperWins)
    basic.pause(1000)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(1000)
    basic.showNumber(ScissorsWins)
    basic.pause(1000)
})


// I successfully built this program from the ground up, I got a bit confused by the else if statements
// because I started with just pure else statements but after changing it to "else if", everything worked flawlessly.
