// horse?
// visual reference: https://giphy.com/gifs/masterpiecepbs-horse-horses-horseback-riding-7T40uVfFeDrKz4Ik2j
samples('github:bubobubobubobubo/dough-waveforms')


$: note("[~ [<[d3,a3,f4]!3 [d3,bb3,g4]!1> ~]]*2")
  .sound("saw").lpf(400)
  .fast(2)
  .attack(.1)
  .decay(.1)
  .sustain(.25)
  .release(.2)
  .delay(.5)
  .gain(.23)

$: note("[~ c2 ~ f2]").sound("bd:2").lpf(100).fast(2).gain(.125)


all(x => x._pianoroll())
