// what falls from the heart, what is captured by mind
// what is let by the heart to be captured
$: note(`
    45 52 55 59
    48 52 55 59
    50 52 55 59
    57 52 55 62
  `)
  .s("saw:2")
  .lpf(200)
  .fast(0.5)
  .room(1.2)
  .gain(0.25)

$: note(`
    48 52 55 59
    45 52 55 60
  `)
  .s("gm_acoustic_guitar_nylon")
  .vibmod("<.25 .5 1 2 12>")
  .slow(4)
  .room(1)
  .gain(0.4)

$: s("[sd bd:4](4,4)").lpf(100).gain(0.3)



all(x => x._pianoroll())
