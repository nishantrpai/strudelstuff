setcpm(122 / 4) 

samples('github:switchangel/pad')
$: s("swpad:0").scrub("{0.1!2 .25@3 0.6!2 <0.9:1.5>}%8").slow(4)


$: s("gm_acoustic_guitar_nylon*2").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10).orbit(2).slow(2)

$: s("supersaw").seg(16).lpf(tri.range(100, 200).slow(2))
// enjoying
