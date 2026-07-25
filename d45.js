// enemy within

const roof = s("[bd:2 bd:4]").lpf(20)
//.duckorbit(2).duckattack(0.2).duckdepth(1)


const column = n("0 1 5 3")
  .chord("<C <Fm Db>>")
  .voicing()
  .s('saw')
  .clip(`4 3 2 1`)
  // .room(.5)
  // .fast(2)
  .gain(.5)
  .lpf(200)

const foundation = n("0 1 5 3")
  .chord("Db").voicing().s('piano')
  .clip(`4 3 2 1`)
  .slow(2)
  .transpose(2)
  .gain(.5)
  .room(0)
  .lpf(800)


$: arrange(
  [2, foundation],
  [4, stack(foundation, column.lpf(200), roof.lpf(50))],
  [4, stack(foundation, column.lpf(400), roof.lpf(120))],
  [4, stack(foundation, column.lpf(800), roof.lpf(150))],
  [4, stack(foundation, column.lpf(1000), roof.lpf(180))],
  [2, stack(foundation, column.lpf(1200), roof.lpf(190))],
  [2, stack(foundation, column.lpf(1400), roof.lpf(200))],
  [2, stack(foundation, column.lpf(1600), roof.lpf(200))],
  [2, stack(foundation, column.lpf(1800), roof.lpf(200))],
  [2, stack(foundation, column.lpf(2000), roof.lpf(200))],
  [2, stack(foundation, column, roof)],
  [2, stack(foundation, column, roof)]
) 


all(x => x._pianoroll())
