// universe didn't want to take part in this one lol
// $: note("c4 f4,g4,d#4 c##4").sound("piano").lpf(200)

// mind
// anagram for fear
$: note("f4 e4 a4 d4").sound("piano1").lpf(200).degradeBy(0.1)

// heart
// 2 beats and 1 beat
$: sound("[sd:2!2 bd:4]").lpf(200)

// soul
// anagram for god
$: note("g6 ~ d6").sound("piano").lpf(200).slow(2)

// system, trying to map everything and everyone
// fear in another variation embedded into the system
$: note("[f4 e4]!2 [a4, d4]").sound("gm_glockenspiel").lpf(500).slow(2)

all(x => x._pianoroll())
