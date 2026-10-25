// something arose when i heard these notes on warm.strudel.cc this is a translation of that

$beats: s("sbd!4,cp*2").lpf(sine.rangex(400,800))

$tune: note("c2 [c2,<<g3 g2> <e2 e3> <b2 b3>>]")
    .add("<0 <1 -1>>")
    .add("0,7")
    .clip("<1 2>")
    // .clip("<.25 .32>")
    .s("<gm_acoustic_bass, triangle>")
    // .s("<triangle, sine>")
    .delay("0.65:0.25:0.2 0.65:0.125:0.5")
    // .fast(2).slow(1.5)
    .fast(6).slow(1.5)
    .lpf(sine.rangex(800,1200))
    .room(.8).rsize(12)
    // .lpf(sine.rangex(200,300))
    // .lpenv(sine.range(-1,1))
    .hpf(400)._scope()

$bg: note("c2 f2 e2").s("triangle").lpf(sine.rangex(400,800)).seg(4).slow(2)._scope()
