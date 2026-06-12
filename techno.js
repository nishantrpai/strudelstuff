setcpm(133/4)

$: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2).gain(0.125)

$: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1).gain(0.25)

$: note("c <eb f3> g <eb bb2 <f1 g2>>")
    .s("sine")      // Changed synthesizer to sine
    .fast(1)
    .gain(0.25)
    .distort(0.4)   // Adds overdrive/distortion
    .lpf(1200)     // Filters out harsh high frequencies

