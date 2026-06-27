//mental reference: going on  long drive, dancing and enjoying the mood
samples('github:bubobubobubobubo/dough-waveforms')

$: note("[c2 d2!2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("gm_overdriven_guitar")
  .n("10 [0 1] 2")
  .fast(2)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2))
  .gain(0.5)
  .degradeBy(0.01)
  .delay(.7)


// todo: intro*2 main*4
$: sound("[bd:4 bd:2]*2").gain(0.2)


$: note("[c2 d2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("piano")
  .n("10 [0 1] 2")
  .fast(1)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2)) 
  .gain(0.25)


$: note("[c2 d2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("gm_xylophone")
  .n("10 [0 1] 2")
  .vowel("<a e i o>*8")
  .fast(2)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2))
  .gain(0.3)
  .rev()



all(x => x._pianoroll())
