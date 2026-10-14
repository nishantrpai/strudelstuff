// changing subject
// spot: boston dynamics

setCps(120/60/4)


$bd: n(accelerationX.segment(4).range(0,64)).scale("C2:minor").s("bd:4*4,wt_vgame:4,woodblock").sometimes(add(note("<12 14>"))).lpf(1200)._scope()

$cp: s("rx5_sh*4, cp*2").lpf(1200)._scope()

$beats2: note("<[c,eb] [a,f]>").arp("0!1 1!1").clip(.5).s("<sqr saw>").scale("c:minor:pentatonic").fast(.5).lpf("400:10").orbit(5)._scope()



$supersaw: note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
.arp("0!4 [0,2]!2 1 [0,2]").clip("<1!7 .25>").s("<supersaw!7 saw>").sometimes(add(note("<-12 -24>"))).fast(2).lpf("800:10").orbit(3)._scope()






/*
state change notes:
key instruments are bd,cp and supersaw
cp: 
- cp*2, cp*4: faster or slower makes beats feel slower or faster
- delay .25 makes it feel like the train has started running
bd: 
- disappearance feels like smoke break
- changing from bd to say tri or wt_digital_basique makes the tones 
supersaw 
- add note: 12 24: upbeat
- add note: -12 -24: dark alleyway. hacking something illegal.
- clip: 2 or 4 makes it feel like you are watching rocket cross orbit
- clip: 1 or 2 feels like groove to dance
- clip: .2 or .4 makes it feel like you are driving on the top of a hill with steep curve every turn
- room(2).rsize(10): room sizes make it feel like i am in a stadium
beats2: is mostly a silent partner, but it adds a very ominious tone
*/
