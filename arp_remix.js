// was talking to a friend
// told him there was a nice pizza place we should visit
// he said 
// someday
// visual: https://x.com/SonFerOrt/status/2109254372840632818

setCps(120/60/4)


$: n(accelerationX.segment(4).range(0,32)).scale("C2:minor").s("bd:4*4,wt_vgame:4").sometimes(add(note(12))).lpf(1200)._scope()

$: s("snare_rim*4,cp*2").lpf(800)
$: note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
.arp("0!4 [0,2]!2 1 [0,2]").s("supersaw").fast(2).lpf(800).orbit(3)._scope()


$: note("<[c,eb] [a,f]>").arp("0!2 1!4").s('gm_pad_halo').scale("c2:minor:pentatonic").fast(2)._scope().lpf(800)

// $: n(accelerationX.segment(4).range(0,8)).scale("C4:minor").s("z_sine").sometimes(add(note(7)))

// $: n(`c4@2 f4 g4@2`)
//   .sub(4)
//   .seg(4)
//   .scale("c:minor")
//   .s("harp")
//   .lpf(800)


// $: s("brown*2,shaker_small*4").n(accelerationZ.segment(4).range(0,7)).scale("C:minor")._scope()

// stack(
//   // The background texture (amplified/louder brown noise)
// $: s("gm_seashore:6").lpf(800)
  
//   // The Kalimba melody mixed right into it
// $: s("shaker_small*4").n(accelerationX.segment(8).range(0,7)).scale("C:minor").seg(8)
// )._scope()

