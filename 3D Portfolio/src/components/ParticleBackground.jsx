import React from 'react'
import Particles from 'react-tsparticles'

const ParticleBackground = () => {
  return (
    <Particles 
        options={{
            background: {
                color: "#ffffff" // Set background color to transparent
            },
            backgroundMode: {
                enable: false, // Set background mode to none
            },
            fps_limit: 60,
            interactivity: {
                detect_on: "canvas",
                events: {
                    resize: true
                }
            },
            particles: {
                color: {
                    value: "#ffffff" // Set color of the particles
                },
                number: {
                    density: {
                        enable: true,
                        area: 800 // Adjust density of particles
                    },
                    value: 80 // Set number of particles
                },
                opacity: {
                    value: 0.5, // Adjust opacity of particles
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: {
                    value: 3, // Adjust size of particles
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                    }
                }
            }
        }}/>
  )
}

export default ParticleBackground
