// 107 121 99 
$: s("[bd:4*2,hh*8,bd:2 sd]*2").lpf(1200).lpenv("<2 2.5>")

// $: note("c2 f2").sound("supersaw")

$: note("[e4,g4,d4]*4 [f4,b4,g4]*2").sound("sine").adsr(".4 .4 .4 .4").lpf(200)


$: note("[e4,g4,d4]*4 [f4,b4,g4]*8").sound("saw").lpf(200).lpenv("<2 -2>")
