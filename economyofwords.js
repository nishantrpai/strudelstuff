// economy of words
// feel: nyc, times square
samples({
  bassdrum: 'bd/BT0AADA.wav',
  hihat: 'hh27/000_hh27closedhh.wav',
  snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');

const beats =
  s("bassdrum*4 snaredrum:0 bassdrum snaredrum:1, hihat*4")
    .gain(0.35)

const chords =
  note("<[c3,e3,g3,b3] [f3,a3,c4,e4]>")
    .s("tri")
    .n(run(1))
    .struct(beats)
    .gain(0.5)
    .lpf(1200)
    .room(0.25)

const bass =
  note("<c2 f2>")
    .s("sawtooth")
    .gain(0.08)
    .lpf(400)
    .slow(2)

$: arrange(

  // 0-4s
  [2,
    stack(
      beats
    )
  ],

  // 4-8s
  [32,
    stack(
      bass,
      beats,
      chords
    )
  ],

)
