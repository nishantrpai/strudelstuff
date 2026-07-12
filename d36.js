// ref: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTFlbWdjOHAzMW12Ym84MmUwM2Y5aWMzNXMxbWZkZTNweWYzdmZoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B1qmVjLOGejRjmmLJL/giphy.gif


let img = document.querySelector('.horse-bg');

if (!img) {
  // If it doesn't exist, create it once
  img = document.createElement('img');
  img.className = 'horse-bg'; // Fixed: Use className instead of class
  document.body.appendChild(img);
}

// These properties will now safely update every time you press Run
img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHV0c3VzazE0N2J1NHJveXg4aThwZzc0cm84eTZpbmozZWJmYXd6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKMXPlnuViOnZTIUlk/giphy.gif'; 
img.style.position = 'fixed';
img.style.top = '0';
img.style.right = '0';
img.style.width = '50vw';
img.style.height = '50vh';
img.style.objectFit = 'cover';
img.style.zIndex = '-1'; 
img.style.opacity = '0.5'; // Change this number to instantly adjust transparency!



const pad = note
  ("[E3,G3,B3][E4,G4,B4]")
  .s("supersaw")
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

const silence = s("bd").never()

$: arrange(
  [2,
    pad.fast(4)
  ],
  [2,
    stack(pad.fast(4), beat)
  ],
  [4,
    stack(pad.fast(4), beat, pad2.s("bd:6"))
  ],
  [4,
    stack(pad.fast(4), beat, pad2.fast(2))
  ],
  //good buildup
  [4,
    stack(pad.fast(4), beat, pad2.fast(4))
  ],
  [4,
    stack(pad.fast(4), beat, pad2.s("gm_distortion_guitar"))
  ],
   [4,
    stack(pad.fast(4), beat, pad2.s("saw"))
  ],
  [4,
    stack(pad.fast(4), beat, pad2.s("saw").delay(2))
  ],
    [4,
    stack(pad.fast(4), beat, pad2.s("saw").fast(4))
  ],

)
  
all(x => x._pianoroll({cycles: 64}))
