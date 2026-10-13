// changing subject
// spot: boston dynamics

setCps(120/60/4)


$: n(accelerationX.segment(4).range(0,64)).scale("C2:minor").s("bd:4*4,wt_vgame:4,woodblock").sometimes(add(note("<12 14>"))).lpf(1200)._scope()

$: s("rx5_sh*4, cp*2").lpf(1200)._scope()

$: note("<[c,eb] [a,f]>").arp("0!2 1!4").s("<sqr saw>").scale("c2:minor:pentatonic").fast(.5).lpf(200).orbit(5)._scope()



$: note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
.arp("0!4 [0,2]!2 1 [0,2]").clip("<1!7 .25>").s("<supersaw!7 supersaw>").sometimes(add(note("<-12 12>"))).fast(2).lpf("800:10").orbit(3)._scope()





