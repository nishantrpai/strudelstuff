$: s("bd:6!4,cp*2").lpf(sine.range(800,2000)).degradeBy(.05)

$: note("c2 [c2,<<g3 g2> <e2 e3> <b2 b3>>]")
    .add("<0 <1 -1>>")
    .add("0,7").clip("<1 2>")
    .sound("<gm_acoustic_bass, sine>")
    // .delay("0.65:0.25:0.9 0.65:0.125:0.7")
    .fast(4).slow(1.5)
    .lpf(sine.rangex(800,1200))
    .lpenv(sine.range(-1,1))
    .hpf(400)._scope()

$: s("triangle").scale("c4:minor:pentatonic").beat("2,4,8,12",16).clip(4)
