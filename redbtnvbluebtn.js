/**
story: red btn v blue btn
**/

setcpm(88)

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


const echoes = [

  note("~ c6 ~ eb6"),

  note("~ c6 ~ f6"),

  note("~ bb5 ~ eb6"),

  note("~ g5 ~ bb5"),

  note("~ c6 ~ bb5"),

]


// 1. MAIN STORY (Plays from the very first cycle)
$: fastcat(story)
    .sound(INSTRUMENT)
    .slow(story.length)
    .gain(1)
    .lpf(300)
    .trans("32")

// 2. HIGH ECHOES (Silent for 4 cycles, then unmutes forever)
$: fastcat(echoes)
    .sound("piano")
    .slow(echoes.length * 6)
    .lpf(1000)
    .gain(0)
    .trans("8")
    .room(0.85)
    .when("<0!4 1!99>", x => x.gain(0.24)) // Muted for 4 cycles, then gain becomes 0.24

// // 3. LOW SYSTEM PULSE (Silent for 8 cycles, then unmutes forever)
$: s("bd ~ bd ~")
    .bank("tr909")
    .slow(4)
    .lpf(400)
    .gain(0)
    .when("<0!8 1!99>", x => x.gain(0.12)) // Muted for 8 cycles, then gain becomes 0.12

// // 4. PROCESS TICKS (Silent for 12 cycles, then unmutes forever)
$: s("~ hh ~ hh")
    .bank("tr909")
    .slow(2)
    .lpf(2500)
    .gain(0)
    .when("<0!12 1!99>", x => x.gain(0.03)) // Muted for 12 cycles, then gain becomes 0.03
