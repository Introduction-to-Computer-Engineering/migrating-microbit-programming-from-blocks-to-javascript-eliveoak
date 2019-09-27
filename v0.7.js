input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, Math.randomRange(0, 4))
    }
})
    

let index2 = 0
led.plot(1, 1)
led.plot(3, 1)
led.plot(0, 3)
led.plot(4, 3)
led.plot(4, 4)
led.plot(3, 4)
led.plot(0, 4)
led.plot(1, 4)
led.plot(2, 4)
basic.forever(function () {
    basic.pause(2000)
    led.toggle(1, 0)
    led.toggle(3, 0)
    led.toggle(1, 1)
    led.toggle(3, 1)
    led.toggle(0, 2)
    led.toggle(1, 2)
    led.toggle(2, 2)
    led.toggle(3, 2)
    led.toggle(4, 2)
})

// This is just the animation and random pattern generator from the activity. Luckily, I was able to complete this one without looking
// at blocks at all!
