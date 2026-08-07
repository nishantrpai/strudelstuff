
$: n(run(8))
  .chord("<C <Fm Db>>")
  .voicing()
  .s('saw')
  .fast(2)
  .adsr(".002")
  .gain(.5)
  .lpf(700)


$: n(`[3,1,2]!2`)
  .chord("<C <Fm Db>>")
  .voicing()
  .s('supersaw')
  .fast(.5)
  .gain(.5)
  .lpf(700)

$: s("[bd:6 bd:4]*2").lpf(100).adsr(".1")


all(x => x._pianoroll())
