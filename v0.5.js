let yindex = 0
let index = 0
let xindex = 0

basic.forever(function () {
    for (let yindex = 0; yindex <= 5; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
})

// the repeat function is very strange, not intuitive in any way. After reading the post and
// seeing how the plot unplot reacts with indexes, it made a lot more sense to write.
