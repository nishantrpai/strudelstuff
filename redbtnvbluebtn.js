/**
story: red btn v blue btn
**/

setcpm(72)

const INSTRUMENT = "supersaw"

const story = [
  note("c2 eb2 g1 bb1"),
  note("c2 eb2 g1 bb1"),

  note("c2 f2 g1 bb1"),
  note("c2 f2 g2 bb2"),

  note("c2 f2 g1 bb2"),
  note("c2 f2 g2 bb1"),

  note("c2 f2 g2 bb2"),
  note("c2 f3 g2 bb1"),

  note("c2 f2 eb2 bb2"),
  note("c2 f2 eb2 bb1"),

  note("c2 g2 eb2 bb2"),
  note("c2 g2 eb2 bb1"),

  note("f2 ~ eb3 ~"),
  note("f3 ~ g2 ~"),

  note("c2 ~ g3 ~"),
  note("c3 ~ g2 ~"),
]

// atmospheric streams
const streams = [
  note("eb2 ~ ~ c2"),
  note("g2 ~ ~ eb2"),
  note("bb1 ~ ~ g2"),

  note("eb2 ~ ~ bb1"),
  note("g2 ~ ~ c2"),

  note("bb2 ~ ~ eb2"),
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

    .gain(0.28)

    .lpf(850)

    .room(0.12),

  // STREAMS
  fastcat(streams)

    .sound("wt_digital_echoes")

    .slow(streams.length * 2)

    .gain(0.06)

    .lpf(1200)

    .room(0.45),

  // LOW THREAT PULSE
  // s("bd ~ ~ [bd bd]")

  //   .bank("RolandTR909")

  //   .slow(2)

  //   .gain(0.35)

  //   .lpf(100),

  // TENSE DIGITAL TICKS
  // s("~ hh ~ hh")

  //   .bank("RolandTR808")

  //   .gain(0.04)

  //   .lpf(10),

  // DISTANT GLITCH HITS
  // s("~ wt_digital_curses ~ ~")

  //   .slow(4)

  //   .gain(0.08)

  //   .room(0.7),

  // HIGH ECHOES
  fastcat(echoes)

    .sound("piano")

    .slow(echoes.length * 6)

    .gain(0.04)

    .room(0.55),

  // SUB DRONE
  note("c0")

    .sound("supersaw")

    .slow(16)

    .gain(0.03)

    .lpf(70)

    .room(0.2)

)
