let dice = 0
let xindex = 0
let index = 0
let yindex = 0

input.onButtonPressed(Button.A, function () {
    dice = Math.randomRange(0, 20)
    if (dice >= 15) {
        basic.showNumber(dice)
    }
    else if (dice <= 15) {
        basic.showString("No")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let yindex2 = 0; yindex2 <= 5; yindex2++) {
        for (let xindex2 = 0; xindex2 <= 4; xindex2++) {
            led.plot(xindex2, yindex2)
            basic.pause(100)
            led.unplot(xindex2, yindex2)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(dice)
    
    
})

basic.forever(function () {
})

I essentially just mashed a bunch of stuff up to make a "cheating" dice program that would only show numbers above 15. 
you can still check the number by pressing A+B
RIP my creativity
