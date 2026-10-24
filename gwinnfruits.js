
//something arose as the tunes on warm.strudel.cc were played 


$: s("sbd!4,hh*2").lpf(100)

$: note("c2 [c2,<<g3 g2> <e2 e3> <b2 b3>>]")
    .add("<0 <1 -1>>")
    .add("0,7")
    .sound("<gm_acoustic_bass>")
    .delay("0.65:0.25:0.9 0.65:0.125:0.7").delayfeedback("<.125 .15 .25>")    
    .slow(1.5)
    .fast(2)
    .lpf(1200)
    .hpf(400)
