// setcpm(33)
// kyc music unused
// // 107 121 99 
// $: s("[hh*8,bd:2 sd]!2").lpf(200).lpenv("<-2.5 -2>").degradeBy("0.01")


// $: sound("gm_pad_bowed").note("<[f4, b4] [g4, a4]>").lpf(800)

// // $: sound("piano").note("<c4 f4>").lpf(200) 


setCps(140/60/4)
$: sound("sbd!4,<snare_rim>!2")._scope()

$: n(irand(10))
  .sub(4)
  .seg(16)
  .scale("c:minor")
  .lpf(800)
  .detune(2)
  .delay(1)
  .room("<0 .2 .4 .6 .8 1>")
  .rsize(10)
  .orbit(5)


$: n(accelerationX.segment(16).range(0,7)).scale("c:minor")._scope().lpf(1200).degradeBy(0.2)




all(x => x._pianoroll())
