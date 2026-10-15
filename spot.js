// changing subject
// spot: boston dynamics

setCps(120/60/4)


$bd: n(accelerationX.segment(4).range(0,64)).seg(4).scale("C2:minor").s("bd:4*4,bd:2*4,sd:4").sometimes(add(note("<12 14>"))).lpf("800:10")._scope()

$cp: s("[yamahatg33_sh*4, cp*2]*2").lpf(1200)._scope()

$beats2: note("<[c,eb] [a,f]>").arp("0!1 1!1").seg(0).clip(1).s("<saw triangle>").scale("c:minor:pentatonic").fast(.5).lpf("800:0").orbit(5)._scope()



$supersaw: note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
.arp("0!4 [0,2]!2 1 [0,2]").seg(8).clip("<1 .25>").s("<supersaw!7 saw>").sometimes(add(note("<-12 -24>"))).fast(2).distort(.5).lpf("1200:0").delay(.25)._scope()



/*
state change notes:
key instruments are bd,cp and supersaw
overall notes:
cps 100/60/4 - 
cp: 
- cp*2: dance
- cp*4: something big is coming
- delay .25 makes it feel like the train has started running
- without claps feels like buildup, empty corridor
- removing comma *1 *1 adds to build up 
- *4 *2]*4 makes it fast build
- cp absence feels like exit
- cp entery feels like song is starting now, should pair with bd:4
- adding supersaw feels like signalling ending
- entire sequence *.5 slows down for build up
- replace cp with hh,oh for buildup
- replace yamahatg33_sh with hh,oh for buildup
- cp always releases the tension
bd: 
- disappearance feels like smoke break
- changing from bd to say tri or wt_digital_basique makes the tones 
- lpf 1200 -> 0: exit segway
- supersaw + 0 bd -> build up
- 0!4 [0,1,2]!4 buildup
- 0!2 [0,1,2]!2 slowdown -> "0!4 [0,1,2]!2 1 [0,2] tension release
supersaw 
- add note: 12 24: upbeat. hearing distortion.
- add note: -12 -24: dark alleyway. hacking something illegal.
- clip: 2 or 4 makes it feel like you are watching rocket cross orbit
- clip: 1 or 2 feels like groove to dance
- clip: .2 or .4 makes it feel like you are driving on the top of a hill with steep curve every turn
- room(2).rsize(10): room sizes make it feel like i am in a stadium
- lpf 800: underground room 
- lpf 1200: hall
- lpf 400 : exit segway
- sqr : wolf hard mode
- supersaw: carpenter brut, hero
- sax: saxaphone song
- duckorbit 1:2 - entered matrix
- duckorbit 2:3 - back to reality
- on stream there is distortion from lower notes too
- triangle, sin : exit segway
- arp  0!4 [0,2]!2 1 [0,1] (feels like buildup) -> changing last to [0,2] (feels like main)
- arp 0!2 [0,2]!2 1 [0] stumbled into the wrong corner of the building
- piano: anti-hero
- xylophone - terrible (remove -12, -24 note adding if using)
beats2: is mostly a silent partner, but it adds a very ominious tone (commented for now)

potential arrangement:
- start solo supersaw as piano : spot wakes up and starts working, low notes -12,-24
- clap joins : solo spot dancing
- beat joins : multi spots dancing
- ominious beats join : all spots dancing
- some more spot clips, claps get fast beats get faster
- supersaw notes go up to 12,24
- need a buildup for something, more robots maybe
*/
