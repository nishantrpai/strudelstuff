/* 
seed: https://x.com/jackbutcher/status/2089118800197153146
*/

// universe white part 
// $: sound("bd*2,<white pink brown>*8").decay(.04).sustain(0)

// mind
// trying to get your attention
// generate fears, desires and dreams
// $: note("c4!2 f4!2 g4!2,c4 g4").sound("gm_distortion_guitar").slow(2).adsr(".5")

// heart
$: sound("bd*2*2,<pink pink brown>*8").lpf(500).sustain(0.25)

// soul
// $: note("c4 g4").sound("gm_church_organ").slow(2).adsr(".75").lpf(400)

// system trying to map
// fears: minor chords
// desires: major chords
// beliefs: flat chords
// $: note("[c4 d#4 b4 g#4 a#4]*2").sound("sawtooth").adsr(".5").lpf(900)


// brb
all(x => x._pianoroll())
