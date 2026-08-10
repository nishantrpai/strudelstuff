// learnt about pentatonic, ionian and all the scales (can google strudel supports em all)
$: n(run(4)).s("gm_accordion")
  .scale("<[c3,c3] f3>:minor:pentatonic")
  .fast(2)
  .lpf(200)


$: n(run(4)).s("gm_acoustic_bass")
  .scale("<c3 f3>:minor:pentatonic")
  .fast(2)
  .lpf(200)


$: n(run(4)).s("gm_xylophone")
  .scale("<c3 f3>:minor:pentatonic")
  .fast(1)
  .lpf(900)
