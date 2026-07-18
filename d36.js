// ref: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTFlbWdjOHAzMW12Ym84MmUwM2Y5aWMzNXMxbWZkZTNweWYzdmZoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B1qmVjLOGejRjmmLJL/giphy.gif
//tags: against all odds, space

let img = document.querySelector('.horse-bg');

if (!img) {
  // If it doesn't exist, create it once
  img = document.createElement('img');
  img.className = 'horse-bg'; // Fixed: Use className instead of class
  document.body.appendChild(img);
}

// These properties will now safely update every time you press Run
img.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVlcHFuYjh0OHZ4ejNlYjYyYzdiY3J4M3NobTFmcml4MTBkNmhweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IxwbtFKGFxgac/giphy.gif'; 
img.style.position = 'fixed';
img.style.top = '0';
img.style.right = '0';
img.style.width = '100vw';
img.style.height = '100vh';
img.style.objectFit = 'cover';
img.style.zIndex = '-1'; 
img.style.opacity = '0.7'; // Change this number to instantly adjust transparency!



const pad = note
  ("[E3,G3,B3][E4,G4,B4]")
  .s("gm_kalimba")
  .delay(1)
  .decay(0.75)
  .scale("<c1 f5>:minor:pentatonic").gain(0.5)

const beat = s("[bd:4 bd:6]!2")

const pad2 = note(`c f <b , g> e`)
  .s("gm_epiano2")
  .scale("<c3 f3>:minor:pentatonic")
  .lpf(2000)
  .slow(2)
  .delay(1)

const buildup = s("supersaw").seg(16).lpf(tri.range(100, 200).slow(2))


const silence = s("bd").never()

$: arrange(
  [4,
    stack(pad.fast(4), beat)
  ],
  [4,
    stack(pad.fast(4), beat, pad2.s("bd:6"))
  ],
  [4,
    stack(pad.fast(4), beat, pad2.fast(4))
  ],
  [4,
    stack(pad.fast(4), beat, pad2.s("gm_distortion_guitar"))
  ],
   [4,
    stack(pad.fast(4), beat, pad2.s("saw"), buildup)
  ],
  [4,
    stack(pad.s('supersaw').delay(.5).fast(4), beat, pad2.s("saw").delay(2), buildup)
  ],
  [8,
    stack(pad.s('supersaw').fast(4), beat, pad2.s("saw").fast(4), buildup.fast(4))
  ],

)
  
all(x => x._pianoroll({cycles: 64}))
