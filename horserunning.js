// horse?
// visual reference: https://giphy.com/gifs/masterpiecepbs-horse-horses-horseback-riding-7T40uVfFeDrKz4Ik2j

samples('github:bubobubobubobubo/dough-waveforms')

let img = document.querySelector('.horse-bg');

if (!img) {
  // If it doesn't exist, create it once
  img = document.createElement('img');
  img.className = 'horse-bg'; // Fixed: Use className instead of class
  document.body.appendChild(img);
}

// These properties will now safely update every time you press Run
img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejg0c2RjM3AxZWk2ZnpkanllZWl4cHZkM280d3VoZGptb21hdHMzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7T40uVfFeDrKz4Ik2j/giphy.gif'; 
img.style.position = 'fixed';
img.style.top = '0';
img.style.left = '0';
img.style.width = '100vw';
img.style.height = '100vh';
img.style.objectFit = 'cover';
img.style.zIndex = '-1'; 
img.style.opacity = '0.2'; // Change this number to instantly adjust transparency!


// switch from kalimba -> supersaw for entry
$: note("[~ [<[d3,a3,f4]!3 [d3,bb3,g4]!1> ~]]*2")
  .sound("gm_melodic_tom").lpf(800)
  .fast(2)
  .attack(.1)
  .decay(.1)
  .sustain(.25)
  .release(.2)
  .delay(.5)
  .gain(.3)
  .degradeBy(0.01)


$: note("[~ c2 ~ f2]").sound("bd:2 bd:4").lpf(100).fast(2).gain(.125)


$: note("[c2 f2]").sound("gm_taiko_drum").lpf(500).slow(4).gain(.5)

$: note("<d5 c5>*2 e5 a5 g5")
  .sound("gm_guitar_harmonics:1")
  .transpose("<-32!4 -34!4>") // Plays both transpositions at once
  .fast(4)
  .lpf(1200)            // Low-pass filter cuts harsh high frequencies
  .gain(0.08)           // Reduced gain to prevent clipping/distortion
  .room(0.4)
  .attack(.1)
  .decay(.1)
  .sustain(.25)
  .release(.2)
  .delay(.25)
  .gain(.3)
  .degradeBy(0.01)



all(x => x._pianoroll())
