import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'

export const Particle = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    let isMounted = true

    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async engine => {
          await loadFull(engine)
        })

        if (isMounted) {
          setInit(true)
        }
      } catch (error) {
        console.error('Failed to initialize particles:', error)
      }
    }

    initializeParticles()

    return () => {
      isMounted = false
    }
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles container:', container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            easing: 'ease-out-quad',
            maxSpeed: 50,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            maxSpeed: 50,
          },
        },
      },
      particles: {
        color: {
          value: '#c9d7e0',
        },
        move: {
          direction: 'bottom',
          enable: true,
          random: true,
          speed: { min: 1, max: 3 },
          straight: false,
          outModes: {
            default: 'out',
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 50,
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          random: true,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 10 },
          random: true,
          animation: {
            enable: false,
          },
        },
        wobble: {
          distance: 10,
          enable: true,
          speed: 10,
        },
        rotate: {
          value: { min: 0, max: 360 },
          random: true,
          animation: {
            enable: true,
            speed: 3,
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  )

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '0',
      }}
    />
  )
}
