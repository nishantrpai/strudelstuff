setcpm(122 / 4) 

samples({
  rain: 'audio/1-17367-A-10.wav',
  waves: 'audio/1-100032-A-0.wav',
  birds: 'audio/1-115545-A-48.wav',
  wind: 'audio/1-56311-A-39.wav',
}, 'github:karolpiczak/ESC-50/master/');

samples('github:switchangel/pad')


// 1. HYPNOTIC BACKGROUND: The background elements are mixed low to wrap around the listener like a heavy fog
$: s("rain").gain(0.015).lpf(800) 

// 2. THE ANCHOR: A slow, deep, pulsing sub-bass rhythm that "locks" the brain in and builds tension
$: note("c2_4 <eb2 f2>_8")
  .vowel("i")
  .sound("swpad:0")
  .lpf(tri.range(200, 300).slow(2)) // Keeps the bass dark and throbbing
  .gain(0.5)
  .slow(1)

// 3. THE MAGIC PIANO: Re-introducing a tiny bit of your .shape() tweak to keep it sharp and haunting
$: note("c4 <e4 eb4> f4 <bb4 bb3>")
  .sound("gm_electric_guitar_clean")
  .vowel("o") 
  .fmdecay("<.01 .05 .1 .2>")
  .detune(sine.range(-10, 30).slow(4)) // Slightly wider detune for more dizziness
  .lpf(tri.range(400, 500).slow(8))
  .delay(0).delayfb(0.65) // Off-grid delay times create a hypnotic, rhythmic overlap
  .room(1).size(1) 
  .slow(4)
  .orbit(2)
  .vib(0.1)
  .gain(1)

$: note("c eb g c4").clip(4).s("gm_electric_guitar_clean")
