$: note("c4 a4 f4 e4")
  .sound("harp")
  .delay(.4)
  .slow(2)
  .lpf(500)


$: note("c4 a4 f4 e4")
  .sound("folkharp")
  .delay(.8)
  .fast(2)
  .lpf(100)
  .lpenv("<-2 -1>/2")

$: n("0 1").sound("sleighbells").slow(2).lpf(500)
