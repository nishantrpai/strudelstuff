// something arose when i heard these notes on warm.strudel.cc this is a translation of that
// a free man riding on the top of the car roof enjoying the sun, with arms wide as the car rides through a plain field

// beats
$: arrange(
  [10, s("sbd!4").mask("<0@6 1@6>")],
  [20,s("[sbd!4, cp*2]")],
  [5,s("[kalimba!4]")],
  [20,s("[sbd!4, cp*2]")]
  ).lpf(sine.range(1200,1500))


// mood in the person
$tune: note("c2 [c2,<<g3 g2> <e2 e3> <b2 b3>>]")
    .add("<0 <1 -1>>")
    .add("0,7")
    .clip("<1 2>")
    .s("<<gm_acoustic_bass>@8 <gm_acoustic_bass, sine>@100>")
    // .s("<triangle, sine>")
    .delay("<[0.65:0.25:0.5 0.65:0.125:0.75]@1000>").delayfeedback("<.125 .15 .25>")
    .fast("<1@1 2@2 4@1000>").slow(1.5)
    // .fast(6).slow(1.5)
    .lpf(sine.range(400,1200))
    .room(.8).rsize("<2@4 4@1000>")
    .hpf(400)

// the breeze gently greets the person
$bg: note("c2 g2 e2 b2").s("gm_drawbar_organ").lpf(sine.rangex(400,800)).mask("<0@4 1@100>").seg(4).slow(2)


all(x => x.gain(.125))
