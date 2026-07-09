// learnt about pentatonic, ionian and all the scales (can google strudel supports em all)
$: n(run(8)).s("piano")
  .scale("<c3 f3>:minor:pentatonic")
  .lpf(200)


$: n(run(8))
  .s("piano")
  .scale("<c2 f2>:minor:pentatonic")
  .lpf(500)
  .slow(2)

$: n(run(4))
  .s("piano")
  .scale("<c5 f5>:minor:pentatonic")
  .slow(4)
  .lpf(500)
  .room(.7)


all(x => x._pianoroll({cycles: 64}))

