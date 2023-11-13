// particle-container.component.ts

import { Component, OnInit, HostListener  } from '@angular/core';

declare var particlesJS: any; // Declare particlesJS to avoid TypeScript errors

@Component({
  selector: 'app-particles',
  template: '<div id="particles-js"></div>',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  ngOnInit(): void {
    this.initializeParticles();
  }

  private initializeParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff' // Set the color of the particles
        },
        shape: {
          type: '', // You can change the shape to 'triangle', 'edge', 'polygon', 'star', etc.
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'path/to/your/image.png',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#FFFFFF',
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}
// import { OnInit, Component } from '@angular/core';
// import 'particles.js';

// declare var particlesJS: any;

// @Component({
//   selector: 'app-particles',
//   template: '<div id="particles-js"></div>',
//   styleUrls: ['./particles.component.css']
// })
// export class ParticlesComponent implements OnInit {

//     ngOnInit(): void {
//       particlesJS('particles-js', {
//         // Your particles.js configuration here
//       });
//   }


// }