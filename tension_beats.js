// was trying to make a beat for eissa, ended up here. https://x.com/PaiNishant/status/2069434123803062419
// visual reference::https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZ5ZTM5OHAyc2Rmem44cm5vandyZ2ltdmdzdHl0M2plMXd0enJ2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ft23xmPuh3MhG/giphy.gif
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
  .lpf(700)




let silence = s("piano").never()

$: arrange(

  // engine
  [2,
    beats.gain(0.15).delay(0)
  ],

  // introduce the motif quietly
  [4,
    stack(
      beats.gain(0.15),
      sawtones.s("gm_overdriven_guitar").gain(0.3)
    )
  ],

  // motif becomes the focus
  [4,
    stack(
      beats.gain(0.15),
      sawtones.s("gm_overdriven_guitar saw").gain(0.5)
    )
  ],

  // pulse joins
  [8,
    stack(
      beats,
      sawtones,
      tribeats.gain(0.2)
    )
  ],

  // atmosphere
  [8,
    stack(
      beats,
      sawtones,
      tribeats.gain(0.3),
      sawpiano.gain(0.08)
    )
  ],

  // peak
  [16,
    stack(
      beats,
      sawtones,
      tribeats.gain(0.35),
      sawpiano.gain(0.1),
      violinbeats.gain(0.08)
    )
  ],

  // exit
  [4,
    stack(
      beats,
      sawtones.s("saw gm_overdriven_guitar").gain(0.08)
    )
  ],

  [2,
    beats.gain(0.15).delay(0)
  ],

  [1, silence]

)


all(x => x._pianoroll())
