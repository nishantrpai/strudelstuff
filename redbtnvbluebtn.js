/**
story: red btn v blue btn
**/

const INSTRUMENT = "supersaw"

const story = [
  note("c2 eb2 g1 bb1"),
  note("c2 eb2 g1 bb1"),

  note("c2 f2 g1 bb1"),
  note("c2 f2 g2 bb2"),

  note("c2 f2 g1 bb2"),
  note("c2 f2 g2 bb1"),

  note("c2 f2 g3 bb2"),
  note("c2 f3 g2 bb2"),

  note("c2 f2 eb3 bb2"),
  note("c2 f3 eb2 bb2"),

]

stack(

  // MAIN STORY
  fastcat(story)

    .sound(INSTRUMENT)
    .slow(story.length)

    .gain(0.24)
    .lpf(700)
    .room(0.25),

  // BACKGROUND PARALLEL NOTES
  note("eb2 ~ ~ c2")
    .sound("supersaw")
    .slow(2)
    .gain(0.04)
    .lpf(1500)
    .room(0.8),


  // LOW DRONE
  // note("c0")
  //   .sound("supersaw")
  //   .slow(16)
  //   .gain(0.07)
  //   .lpf(90)
  //   .room(0.5)

)
