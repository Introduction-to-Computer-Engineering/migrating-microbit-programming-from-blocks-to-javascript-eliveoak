input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
basic.clearScreen()


// This is just another simple program to make the LEDS make a dot and a simple X, respectively.
// when both buttons are pressed, it clears the screen. 
// The MakeCode editor is very helpful when it comes to writing different commands, as it 
// preformats the () and {} for you. Also, it suggests different commands that start with that letter.
