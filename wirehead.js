
// wirehead
samples('github:bubobubobubobubo/dough-waveforms')

let img = document.querySelector('.horse-bg');

if (!img) {
  // If it doesn't exist, create it once
  img = document.createElement('img');
  img.className = 'horse-bg'; // Fixed: Use className instead of class
  document.body.appendChild(img);
}

// These properties will now safely update every time you press Run
img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZseGI4bDJyZzQ0OW54YXVnNW9hYjFsaDJ5ZHFiN2Roa25oaXlpNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwkciVuXOgX7z44/giphy.gif'; 
img.style.position = 'fixed';
img.style.top = '0';
img.style.left = '0';
img.style.width = '100vw';
img.style.height = '100vh';
img.style.objectFit = 'cover';
img.style.zIndex = '-1'; 
img.style.opacity = '0.2'; // Change this number to instantly adjust transparency!


// switch from kalimba -> supersaw for entry
const seq1 = note(`
[f1 f2]*2
`)
  .sound("supersaw")
  .lpf(300)
  .slow(2)
  .transpose("<-1!2 0!1>")
  .gain(.5)

const seq2 = note("f1 f2")
  .sound("bd:4")
  .slow(4)
  .gain(.2)

const silence = seq2.never()


$: arrange(
  [
    4, 

        stack(
      seq1,
      seq2
    ).gain(segment(2, range(0, .12, saw)))
          .lpf(segment(2, range(80, 250, saw)))



  ],
  [
    4,
    stack(
      seq1,
      seq2
    )
  ],

  [
    4,
    stack(
      seq1.fast(4),
      seq2.fast(4)
    )
  ],
  [
    16,
    stack(
      seq1.fast(8),
      seq2.sound("bd:6").fast(8),
    )
  ],
  [
    4,
    stack(
      seq1.fast(8).degradeBy(0.01),
      seq2.sound("bd:6").fast(8),
    ).gain(segment(2, range(0.25, 0, sine)))
  ],
  [999, silence]
)


all(x => x._pianoroll())
