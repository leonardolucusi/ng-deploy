import { Component, OnInit, HostListener  } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  template: '<div id="particles-js"></div>',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  ngOnInit(): void {
    this.initializeParticles();
  }
  readonly numberOfParticles: number = 300;

  private initializeParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: this.numberOfParticles,
          density: {
            enable: true,
            value_area: 5000
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
          distance: 150,
          color: '#FFFFFF',
          opacity: 0.5,
          width: 1.6
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