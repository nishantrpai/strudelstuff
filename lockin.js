// title:  lock in
// visual: guy in chair meme
// verbal: "aight time to lock in"
// intent: time to get serious
// emotion: 


samples({
  bassdrum: 'bd/BT0AADA.wav',
  hihat: 'hh27/000_hh27closedhh.wav',
  snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');


const prompt = n(run(16))
    .scale("<c2 f2 eb2>:minor:pentatonic")
    .s("saw")
    .delay(.7)
    .orbit(2)

const reaction = note("c2 f2")
  .scale("<c2 f2 eb2>:minor:pentatonic")
  .s("gm_distortion_guitar")
  .orbit(2)
  


const begin_locking = s("handbells:4!4")
    .beat("0,4,8,11,14",16)
    .duckorbit(2)
    .duckattack(0.12)
    .duckdepth(1)
    .orbit(1)

const feedback_from_locking = 
  s("triangle*4")
  .decay(0.5).n(irand(8))
  .scale('C major')
  .room(1).roomsize(10)

$: arrange(
  // [4, prompt],
  // [4, stack(prompt, reaction)],
  // [8, stack(prompt, reaction, begin_locking)]
  [4, stack(prompt, reaction, begin_locking)]
  
)

all(x => x._pianoroll())
