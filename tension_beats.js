// was trying to make a beat for eissa, ended up here. https://x.com/PaiNishant/status/2069434123803062419
setcpm(120/4)

// let beats = 
//   sound("bd*4,<brown brown brown>*8")
//       .decay(.04)
//       .sustain(0)
//       .gain(.25)

let beats = (run(2))
  .scale("<c2 f2>:minor:pentatonic*4")
  .s("sbd")
  .lpf(200)
  .delay(.7)
  .gain(0.5)

const sawtones = n("[0 1 2] 3 4 5")
  .scale("<c2 f2 g2>:minor:pentatonic")
  .fast(4)
  // .transpose(32)
  .s("saw")
  .gain(0.5)
  .delay(0.7)
  .lpf(500)

const sawpiano = n(run(4))
  .scale("<c2 f2 g2>:minor:pentatonic")
  .vib(1.01)
  .fast(1)
  .s("tri")
  .delay(0.7)
  .lpf(200)
  .gain(0.2)


// gm_violin
const violinbeats = (run(2))
  .scale("<c2 f2>:minor:pentatonic")
  .slow(2)
  .vib(1.01)
  .s("supersaw")
  .delay(0.7)
  .lpf(500)


const tribeats = (run(2))
  .scale("<c2 f2>:minor:pentatonic")
  .s("gm_overdriven_guitar")
  .transpose(32)
  .delay(0.7)
  .lpf(500)




let silence = s("piano").never()

$: arrange(
  // [2, stack(beats).gain(0.1)],
  // [2, stack(beats, tribeats, sawtones.slow(4)).gain(0.1)],
  // [8, stack(beats, tribeats, sawtones.slow(2)).gain(0.2)],
  // [4, stack(beats, sawtones, tribeats)],
  [32, stack(beats, sawtones, violinbeats, tribeats.gain(0.45), sawpiano)],
  // [2, stack(beats, sawtones, violinbeats, tribeats.gain(0.45), sawpiano).gain(segment(8, range(0.4, 0, saw)))],
  // [999, silence]
)



all(x => x._pianoroll())
