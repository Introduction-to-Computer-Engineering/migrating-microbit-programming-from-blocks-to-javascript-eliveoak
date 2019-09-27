input.onButtonPressed(Button.A, function () {
    CoinAHeads = Math.randomBoolean()
    CoinBHeads = Math.randomBoolean()
    if (CoinAHeads == CoinBHeads) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . # . .
            `)
        basic.pause(300)
        PlayerAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(300)
        PlayerBScore += 1
    }
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(PlayerAScore)
    basic.pause(1000)
    basic.showNumber(PlayerBScore)
    basic.pause(1000)
})

let PlayerBScore = 0
let PlayerAScore = 0
let CoinBHeads = false
let CoinAHeads = false
CoinAHeads = false
basic.showLeds(`
    . # . . .
    # # # . .
    . # . # .
    . . # # #
    . . . # .
    `)
basic.forever(function () {

})
// This is just the basic Boolean tutorial activity. I didn't know what the boolean operator was to have a random one be picked, 
// but after that it went well.
