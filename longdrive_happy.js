//random
samples('github:bubobubobubobubo/dough-waveforms')

const dancelead = note("[c2 d2!2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("gm_overdriven_guitar")
  .n("10 [0 1] 2")
  .fast(2)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2))
  .gain(0.5)
  .degradeBy(0.01)
  .delay(.7)


// todo: intro*2 main*4
const dancebeat = sound("[bd:4 bd:2]*2").gain(0.15)


const danceref1 = note("[c2 d2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("piano")
  .n("10 [0 1] 2")
  .fast(1)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2)) 
  .gain(0.25)


const danceref2 = note("[c2 d2 bb2]  ~ [f2 g2 bb2] ~ [eb2, g2]")
  .sound("gm_xylophone")
  .n("10 [0 1] 2")
  .vowel("<a e i o>*8")
  .fast(2)
  .transpose(32)
  .lpf(sine.range(300, 800).slow(2))
  .gain(0.3)
  .rev()


const silence = s("piano").never()

$: arrange(
  // hi
  [2, stack(dancelead.delay(0), danceref1)],
  // slow beat
  [4, stack(dancelead.delay(0.1), danceref1, dancebeat.sound("[bd:4 hh:2]*2"))],
  // fast beat
  [8, stack(dancelead, danceref1, dancebeat)],
  // main
  [16, stack(dancelead, danceref1, dancebeat)],
  // peak
  [32, stack(dancelead.degradeBy(0.1), danceref1, danceref2, dancebeat)],
  // slowdown
  [4, stack(dancelead.delay(0.1), danceref1, dancebeat.sound("[bd:4 hh:2]*2"))],
  // k.bye
  [2, stack(dancelead.delay(0), danceref1)],
  // exit
  [999, silence]
)

all(x => x._pianoroll())


