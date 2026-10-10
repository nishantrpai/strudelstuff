setCps(140/60/4)

$: s("xr10_hh").seg(4).range(0,4)._scope().lpf(800).orbit(3)
$: n(accelerationX.segment(8).range(0,4)).lpf(800).scale("C:minor").s("mc303_sh,ratchet")._scope()
$: s("sqr").n("c4!4 a4!2 f4 d5").beat("2,4,8,11",16).vibmod("<.25 .125 .5>:4").scale("c2:minor").lpf(1200)

// $: n("c4 a4 f4 d5").s("triangle").beat("2,5,6,9",16).gain(2).scale("c2:minor").distort("<0 2 3 -2:.5>")
