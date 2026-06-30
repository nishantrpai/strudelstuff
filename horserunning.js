// horse?
// visual reference: https://giphy.com/gifs/masterpiecepbs-horse-horses-horseback-riding-7T40uVfFeDrKz4Ik2j

samples('github:bubobubobubobubo/dough-waveforms')
const img = document.createElement('img');
img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejg0c2RjM3AxZWk2ZnpkanllZWl4cHZkM280d3VoZGptb21hdHMzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7T40uVfFeDrKz4Ik2j/giphy.gif'; // Replace with your direct URL
img.style.position = 'fixed';
img.style.top = '0';
img.style.left = '0';
img.style.width = '100vw';
img.style.height = '100vh';
img.style.objectFit = 'cover';
img.style.zIndex = '-1'; // Puts it safely behind the text editor
img.style.opacity = '0.2'; // Adjust to keep text readable

// Append to the workspace page
document.body.appendChild(img);



$: note("[~ [<[d3,a3,f4]!3 [d3,bb3,g4]!1> ~]]*2")
  .sound("supersaw").lpf(800)
  .fast(2)
  .attack(.1)
  .decay(.1)
  .sustain(.25)
  .release(.2)
  .delay(.5)
  .gain(.23)


$: note("[~ c2 ~ f2]").sound("bd:4").lpf(100).fast(2).gain(.125)


all(x => x._pianoroll())
