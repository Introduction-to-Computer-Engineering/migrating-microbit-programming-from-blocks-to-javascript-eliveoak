let Y = 0
let X = 0
X = 2
Y = 2
led.plot(X, Y)

input.onButtonPressed(Button.A, function () {
    X += -1
    basic.clearScreen()
    led.plot(X, Y)
    if (X < 0) {
        X = 0
        basic.clearScreen()
        led.plot(X, Y)
    }
})

input.onButtonPressed(Button.B, function () {
    X += 1
    basic.clearScreen()
    led.plot(X, Y)
    if (X > 4) {
        X = 4
        basic.clearScreen()
        led.plot(X, Y)
    }
})

input.onButtonPressed(Button.AB, function () {
    Y += 1
    basic.clearScreen()
    led.plot(X, Y)
    if (Y > 4) {
        Y = 4
        basic.clearScreen()
        led.plot(X, Y)
    }

    input.onGesture(Gesture.Shake, function () {
        Y += -1
        basic.clearScreen()
        led.plot(X, Y)
        if (Y < 0) {
            Y = 0
            basic.clearScreen()
            led.plot(X, Y)
        }


    })
})

// This is just a simple program that creates a LED in the middle of the screen, and lets you move it around freely. Whenever the 
// LED hits a wall, it will reset to the wall's coordinate, which is 0 or 4 respectively. I couldn't find another input other than shaking
// that was easy to implement, I am looking forward to being able to integrate outside objects with the Micro:Bit, as having a D-Pad
// or something like that would make this way simpler - once I know how to integrate it that is.

// A is move left, B is move right, Shake is move up, and AB is move down.

//I didn't put a reset button or anything of that nature into the program because I didn't feel the need to, as its pretty impossible 
//to break it.



