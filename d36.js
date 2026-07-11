// ref: https://www.youtube.com/watch?v=JOc134WwKXQ

$: note
  ("[E3,G3,B3][E4,G4,B4]")
  .s("supersaw").delay(1).decay(0.5).n(run(2))
  .scale("<c1 f5>:minor:pentatonic").gain(0.5)

$: s("[bd:4 bd:6]!2")

$: note(`c f <b , g> e`).s("sawtooth")
  .scale("<c3 f3>:minor:pentatonic")
  .lpenv(500)
  .lpf(2000)
  .slow(2)
  .delay(.5)
