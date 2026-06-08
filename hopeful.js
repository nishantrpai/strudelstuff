setcpm(72)

samples({
  bd: 'bd/BTAAADA.wav',
  hh: 'hh27/000_hh27closedhh.wav',
  oh: '808oh/OH75.WAV',
  kd1: 'diphone/030_kd1_032.wav'
}, 'github:tidalcycles/Dirt-Samples/master/');

// $: s("bd*4")
//   .gain(0.9)

$: s("bd ~ bd ~")
.gain("<0.125!1 0.135!2>")
  .slow("<1!3 0.75!1>")

$: s("hh ~ hh ~")
.gain("<0.125!1 0.135!2>")
  .slow("<1!3 0.5!1>")

$: note("c2 ~ f2 ~")
  .sound("piano")
  .transpose("<32!1 4!2>")
  .gain(0.4)
  .lpf(900)


// $: note("c2 g2 f2 g2")
//   .sound("gm_distortion_guitar")
//   .transpose("<4!3 32!1>")
//   .gain(`<0.4!3 0.2!1>`)
//   .postgain(1.5)
//   .lpf(1200)

// gm_synth_choir

$: note("c2 ~ f2 ~")
  .sound("gm_xylophone")
  .transpose("<32!1 64!2>")
  .gain(0.25)
  .lpf(2200)


$: note("g1 f1 c1")
  .sound("piano")
  .slow(24)
  .transpose("<32!1 64!2>")
  .gain(1)
  .lpf(2000)
  .room(0.5)


$: note("g1 f1 c1")
  .sound("piano")
  .slow(24)
  .transpose("<32!1 64!2>")
  .gain(1)
  .lpf(2000)
  .room(0.5)


$: note("g2 d2 f2 g4")
  .sound("gm_distortion_guitar")
  .slow(24)
  .transpose("<4!2 2!1>")
  .gain(0.25)
  .lpf(1000)


$: s("kd1")
    .clip(1)
    .slow(2)
    .gain(`<0.25!3 0.125!1>`)
    .speed(`<0.75!3 0.85!1>`)
    .room(0.75)

