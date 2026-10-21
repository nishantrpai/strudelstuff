$:note(run(7)).seg(4)
  .scale("<c4 f4 e4>:minor:pentatonic").clip("<2 4>").sometimes(add(note("<12 24>")))
  .sound("<gm_piano piano ~>").lpf(600).slow(2)

$: s("brown").lpf(1200).gain(0.4) // Lowered ambient noise
$: s("[bd:4*2 ~],hh*1").gain(0.125).lpf(400) // Lowered beat volume & raised LPF slightly for the hi-hat
