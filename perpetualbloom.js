
$: note("c2 [eb2, g2] f2 g2 bb2")
  .sound("piano")
  .fast(4)
  .transpose(32)
  .lpf(tri.range(200, 300).slow(2)) // Keeps the bass dark and throbbing
  .gain(0.5)


$: note("c2 [eb2, g2] f2 g2 bb2")
  .sound("gm_glockenspiel")
  .slow(2)
  .transpose(32)
  .lpf(tri.range(200, 300).slow(2)) // Keeps the bass dark and throbbing
  .gain(0.4)



$: note("c2 [eb2, g2] f2 g2 bb2")
  .sound("sine")
  .slow(4)
  .transpose(32)
  .lpf(tri.range(200, 300).slow(2)) // Keeps the bass dark and throbbing
  .gain(0.2)

// recorded will edit later



all(x => x._pianoroll())
