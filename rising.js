const hhIntro =
  s("hh*4")

const groove =
  stack(
    s("bd*2,hh*3")
  )

const bass =
  note("c2_4 <eb2 f2>_8")
    .vowel("i")
    .sound("swpad:0")
    .lpf(sine.range(200, 300).slow(2))
    .gain(0.5)

const guitar =
  note("c <eb e3> g <c4 f3<f4 g4>>")
    .clip(4)
    .s("gm_electric_guitar_clean")

const reflections =
  note("g5 ~ eb5 ~")
    .sound("piano")
    .room(1)
    .gain(0.15)
    .slow(8)

$: arrange(

  // cycle 1
  [1,
    hhIntro
  ],

  // cycles 2-8
  [2,
    groove
  ],

  // cycles 9-16
  [3,
    stack(
      groove,
      bass
    )
  ],

  // cycles 17-32
  [4,
    stack(
      groove,
      bass,
      guitar
    )
  ],

  // cycles 33-64
  [5,
    stack(
      groove,
      bass,
      guitar,
      s("swpad:0")
        .scrub("{0.1!1 .25@1 0.6!1 <0.9:0.5>}%8")
        .slow(8)
        .gain(0.5)
    )
  ],

  // cycles 65-128
  [64,
    stack(
      groove,
      bass,
      guitar,
      s("swpad:0")
        .scrub("{0.1!1 .25@1 0.6!1 <0.9:0.5>}%8")
        .slow(8)
        .gain(0.5),
      reflections
    )
  ],

  // wind-down
  [32,
    stack(
      bass,
      reflections
    )
  ],

  // final fade
  [16,
    reflections
  ]

)
