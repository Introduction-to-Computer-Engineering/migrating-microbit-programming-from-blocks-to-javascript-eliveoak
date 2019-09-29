input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + arrayWords[index])
})
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (index < arrayWords.length - 1) {
        index += 1
    } else {
        game.gameOver()
    }
})
let index = 0
let arrayWords: string[] = []
arrayWords = ["Apples", "Bananas", "Cats", "Doubloons", "Ethernet", "Frankfurters"]
index = 0
basic.showLeds(`
    # # # # #
    . . . . #
    . . # # #
    . . . . .
    . . # . .
    `)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.showString("" + arrayWords[index])
basic.forever(function () {
	
})


//I hadn't used the "oninput.gesture" command yet so I was a bit bamboozled, but after that it was relatively simple. I was playing
with arrays from the first activity in the 2nd week of school, so I could finally use them now.
