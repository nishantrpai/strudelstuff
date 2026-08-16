/* 
references: 
- https://x.com/Zina_Caramelo/status/2081772227058442438
- https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0f%2F56%2F86%2F0f5686229feb07c22b0afe3ab3a51de9.jpg&f=1&nofb=1&ipt=d25799b963d256dd0f5f185780a7c05d4b25a0d63af61f68d6f1cd8f698f419d
*/


// everything was accidental as always
// this sequence is to signify the forces the birds travels against: winds/gravity/universe
// i liked this instrument, both instruments are reliant on wind
// i have never played or seen this one, but v much enjoy this. was thinking of piano, but this made more sense
$: note("c4@2 c#4  f##4,f2 f4,f4 c4").sound("gm_shakuhachi").slow(2)

// this sequence is its flight path
// this entire sequence is one cycle
// in that there are @2 signifies 2 frames/2bits of the cycle belong to bird raising its wings are up like this V
// that V is at the beginning and end signifying take off and during landing/repeating
// then there are sequences where it is !2 those are where the wings are down 
// in a way the wings are playing the tune with universe
$: note("c4@2 c#4!2 c3!2 f3!2 f4@2").n(run(4)).sound("gm_flute").fast(1)
all(x => x._pianoroll())
