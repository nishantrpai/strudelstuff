// setcpm(110/4)

samples({
  rain: 'audio/1-17367-A-10.wav',
  waves: 'audio/1-100032-A-0.wav',
  birds: 'audio/1-115545-A-48.wav',
  wind: 'audio/1-56311-A-39.wav',
}, 'github:karolpiczak/ESC-50/master/');


samples('github:switchangel/pad')


$: s("rain").gain(0.015).lpf(800) 

//eissa
const eissa = sound("swpad:0")
  .clip(2)
  .slow(4)
  .scale("eb2:minor:pentatonic")
  .delay(.7).orbit(2)
  .gain(0.125)

//farouk
const farouk = n(run(4))
  .scale("<c2 f2 g2>:minor:pentatonic")
  .fast(4)
  .transpose(32)
  .s("piano")
  .gain(1)
  .delay(0.7)
  .lpf(500)

//yusuf
const yusuf = n(run(4))
  .scale("<c2 f2 g2>:minor:pentatonic")
  .fast(1)
  .transpose(8)
  .s("piano")
  .gain(1)
  .delay(0.35)
  .lpf(500)

const silence = s("saw").never()


const scene = stack(
  eissa,
  farouk,
  yusuf
)

$: arrange(
  [2, silence],
  [2, scene.fast(1.00)],
  [2, scene.fast(1.002)],
  [2, scene.fast(1.004)],
  [2, scene.fast(1.006)],
  [2, scene.fast(1.008)],
  [2, silence]
  // [16, scene.fast(1.10)],
  // [8, scene.fast(1.08)],
  // [8, scene.fast(1.06)],
  // [8, scene.fast(1.04)],
  // [8, scene.fast(1.02)],
  // [8, scene.fast(1.00)],
  // [1, silence]
)
  all(x => x._pianoroll())
