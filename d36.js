// ref: https://www.youtube.com/watch?v=JOc134WwKXQ

$: note
  ("[E3,G3,B3][E4,G4,B4]")
  .s("supersaw").delay(0.5).decay(0.5)
  .scale("<c1 f5>:minor:pentatonic")

$: s("[bd:4 bd:6]!2")

$: note(`c2 f2`).s("gm_distortion_guitar")
  .scale("<c3 f3>:minor:pentatonic")
  .lpenv(100)
  .lpf(500)
  .fast(4)
