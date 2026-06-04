/**
story: red btn v blue btn
**/

setcpm(42)

const INSTRUMENT = "piano"

const story = [
  note("c2 eb2 g1 bb1"),
  note("c2 eb2 g1 bb1"),

  note("c2 f2 g1 bb1"),
  note("c2 f2 g1 bb1"),

  note("c2 g2 g1 bb1"),
  note("c2 g2 g1 bb1"),

  note("c2 f2 g1 bb1"),
  note("c2 f2 g1 bb1"),

  note("c2 eb2 g1 bb1"),
  note("c2 eb2 g1 bb1"),

  note("c2 ~ eb3 ~"),
  note("f3 ~ g2 ~"),

  note("f2 ~ g3 ~"),
  note("f2 ~ g2 ~"),
]

// atmospheric streams
const streams = [
  note("c2 ~ ~ f2"),
  // note("g2 ~ ~ eb2"),
  // note("bb1 ~ ~ g2"),

  // note("g3 ~ ~ bb2"),
  // note("g2 ~ ~ c2"),

  // note("bb2 ~ ~ f2"),
]

const echoes = [

  note("~ c6 ~ eb6"),

  note("~ c6 ~ f6"),

  note("~ bb5 ~ eb6"),

  note("~ g5 ~ bb5"),

  note("~ c6 ~ bb5"),

]

stack(

  // MAIN STORY
  fastcat(story)
    .sound(INSTRUMENT)
    .slow(story.length)
    .gain(1)
    .lpf(300)
    .trans("32"),

  // STREAMS
  // fastcat(streams)
  //   .sound("sawtooth")
  //   .slow(streams.length * 2)
  //   .gain(0.5)
  //   .lpf(1000),

  // HIGH ECHOES
  fastcat(echoes)
    .sound("piano")
    .slow(echoes.length * 6)
    .gain(0.24)
    .lpf(1000)
    .set.mix(`<1 1>*4`)
    .trans("8")
    .room(0.85),


  // LOW SYSTEM PULSE
  
  // LOW SYSTEM PULSE
  s("bd ~ bd ~")
    .bank("tr909")
    .slow(4)
    .gain(0.12)
    .lpf(400),

  // PROCESS TICKS
  s("~ hh ~ hh")
    .bank("tr909")
    .slow(2)
    .gain(0.03)
    .lpf(2500),

  note("c2 eb2 g1 bb1")
    .sound("piano")
    .slow(128)
    .gain(1)
    .room(0)
    .lpf("<10 300 500 300>"),

)
