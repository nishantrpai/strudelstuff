setcpm(124/4)

$: n(run(16))
    .scale("<c2 f2 eb2>:minor:pentatonic")
    .s("sawtooth")
    .delay(.7).orbit(2)
    .gain(0.125)

$: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1).gain(0.25)

// 3. NEW: Driving Hi-Hats (Fills the high-end)
$: s("hc!4").beat("2,6,10,14", 16).gain(0.15) // Classic off-beat techno hats

// 4. NEW: Sub Bass (Follows your chord changes and ducks under the kick)
$: n("<c1 f1 eb1>")
    .s("sine")
    .struct("1(3,8)") // Plays a driving, syncopated rhythm
    .duckorbit(2).duckdepth(0.8) // Automatically ducks when the kick hits
    .gain(0.3)
