input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "1"
    basic.showString(binary)
    decimal = decimal * 2
})
input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "0"
    basic.showString(binary)
    decimal = decimal * 2 + 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(decimal)

})
let binary = ""
let decimal = 0
decimal = 0
binary = " "
basic.forever(function () {

})

// This is the basic program from the activity for translating Binary to Decimal numbers. The math expressions are way easier to type
// in JS than they are to place in blocks. I thankfully was able to figure out all the variables and how to express them by myself.

