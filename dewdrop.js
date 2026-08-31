// was trying to make a beat for eissa, ended up here. https://x.com/PaiNishant/status/2069434123803062419
// visual reference::https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZ5ZTM5OHAyc2Rmem44cm5vandyZ2ltdmdzdHl0M2plMXd0enJ2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ft23xmPuh3MhG/giphy.gif
setcpm(120/4)

// let beats = 
//   sound("bd*4,<brown brown brown>*8")
//       .decay(.04)
//       .sustain(0)
//       .gain(.25)


$: n("[0 1]*2 3 4")
  .scale("<c4 g4>:minor:pentatonic")
  .s("gm_music_box")
  .slow(2)
  .lpf(1200)
  .adsr(".25")

$: n("[0 1]*4 [3 4]*2 5")
  .scale("<c4 g4 f4>:minor:pentatonic")
  .s("piano")
  .fast(2)
  .lpf(1200)
  .adsr(".25")

// $: n("[0 ,1, 2]*4 [3,4,5]*4")
//   .scale("<c4 g4>:minor:pentatonic")
//   .s("gm_tremolo_strings")
//   .fast(2)
//   .lpf(1200)
//   .adsr(".5")

// $: sound("bd:2*4,bd:4*2,hh*4")

// $: n("0 1 2 3 4")
//   .scale("<c4 g4>:minor:pentatonic")
//   .s("gm_pad_choir")
//   .fast(2)
//   .lpf(1200)
//   .adsr(".5")



all(x => x._pianoroll())
