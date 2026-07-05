setcps(18/60) // very slow

samples({
  rain: 'assets/rain.mp3',
}, 'github:BLKKKBVSIK/RelaxingRain/master/');




stack(
  note("c4 e4 g4 b4")
    .sound("piano")
    .slow(12)
    .gain(0.12)
    .lpf(sine.range(80, 100).slow(24))
    .room(1)
    .size(1)
    .delay(0.45),

  note("a3 c4 e4 g4")
    .sound("piano")
    .slow(24)
    .gain(0.08)
    .lpf(sine.range(80, 90).slow(24))
    .room(1)
    .size(1),


  sound("rain")
  .lpf(20)
  .gain(0.0015)
  
).gain(0.4)._pianoroll()
