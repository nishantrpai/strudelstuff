// enemy within

$: note
  ("[E3,G3,B3]")
  .struct("- x")
  .s("supersaw")
  .fast(4)
  .lpf(800)
  .decay(1)
  .transpose(`<-8 -4>`)
  .scale("<f5>:minor:pentatonic").gain(0.5)


$: s("[bd:2 bd:4]!2").duckorbit(2).duckattack(0.2).duckdepth(1).lpf(700)


$: n("0 3 1 2").chord("<C <Fm Db>>").voicing().s('supersaw').clip("4 3 2 1").room(.5).fast(2)


