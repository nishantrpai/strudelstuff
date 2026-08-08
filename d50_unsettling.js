$: n(run(8))
  .chord("<C <Fm Db>>")
  .voicing()
  .s('supersaw')
  .fast(2)
  .adsr(1/8)
  .gain(.5) // Reduced from .5
  .lpf(800)

$: n(`[3,1,2]`)
  .chord("<C <Fm Db>>")
  .voicing()
  .s('gm_drawbar_organ')
  .fast(.5)
  .gain(.5) // Reduced from .5 (supersaw is naturally very loud)
  .lpf(800)

$: s("[bd:6 bd:4]!2").lpf(500).gain(.85) // Added a controlled gain for the kick


$: note("c4 <f4 db4>").s("piano").slow(2).lpf(800)

// This scales down the total summed output to prevent clipping
all(x => x._pianoroll())
