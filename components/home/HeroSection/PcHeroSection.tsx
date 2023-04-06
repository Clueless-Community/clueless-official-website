/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import createGlobe from 'cobe';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useSpring } from '@react-spring/web';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<null | number>(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: 1460,
      height: 1460,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      opacity: 0.9,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.3, 0.1],
      glowColor: [1, 1, 1],
      scale: 1.12,
      markers: [
        { location: [37.7595, -122.4367], size: 0.01 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [26.732311, 88.410286], size: 0.2 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        if (window.screen.width < 600) {
          phi = 1.5;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => globe.destroy();
  }, []);
  return (
    <div
      id="hero"
      className="relative xl:h-[800px] lg:h-[685px] md:h-[570px] sm:h-[520px] h-[430px] items-start flex justify-between"
    >
      <Box className="flex flex-col mt-32 z-20">
        <h1 className="text-white text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-black leading-none">
          Clueless <br />
          Community.
        </h1>
        <div className="relative top-2 sm:left-16 left-10">
          <h2 className="text-white text-[1.6rem] sm:text-[2rem] ">
            Learn, Grow.
          </h2>
          <div className="flex lg:space-x-5 sm:space-x-24 space-x-20 sm:mt-4 mt-1">
            <button className="hidden lg:flex text-sm xl:text-base items-center  space-x-2 btn-green btnHover">
              <svg
                width="18"
                height="18"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon"
                  d="M21.1532 1.57902C19.5698 0.842959 17.8554 0.308724 16.0697 5.46086e-05C16.054 -0.000444727 16.0385 0.00248535 16.0241 0.00863889C16.0097 0.0147924 15.9968 0.02402 15.9863 0.0356705C15.7721 0.427443 15.522 0.937934 15.3554 1.32971C13.4613 1.04478 11.535 1.04478 9.64094 1.32971C9.47427 0.926062 9.22426 0.427443 8.99806 0.0356705C8.98616 0.0119267 8.95044 5.46086e-05 8.91473 5.46086e-05C7.12896 0.308724 5.42653 0.842959 3.83125 1.57902C3.81935 1.57902 3.80744 1.59089 3.79554 1.60276C0.557354 6.43462 -0.335528 11.1359 0.10496 15.7897C0.10496 15.8134 0.116865 15.8372 0.140675 15.849C2.28359 17.4161 4.34317 18.3659 6.37894 18.9951C6.41466 19.007 6.45037 18.9951 6.46228 18.9713C6.93848 18.3184 7.36706 17.6298 7.73612 16.9056C7.75993 16.8581 7.73612 16.8107 7.6885 16.7988C7.00991 16.5376 6.36704 16.2289 5.73607 15.8728C5.68845 15.849 5.68845 15.7778 5.72416 15.7422C5.85512 15.6472 5.98607 15.5404 6.11703 15.4454C6.14084 15.4216 6.17656 15.4216 6.20037 15.4335C10.2957 17.2974 14.7125 17.2974 18.7602 15.4335C18.784 15.4216 18.8198 15.4216 18.8436 15.4454C18.9745 15.5522 19.1055 15.6472 19.2364 15.7541C19.2841 15.7897 19.2841 15.8609 19.2245 15.8846C18.6055 16.2527 17.9507 16.5495 17.2721 16.8107C17.2245 16.8225 17.2126 16.8819 17.2245 16.9175C17.6054 17.6417 18.034 18.3303 18.4983 18.9832C18.534 18.9951 18.5698 19.007 18.6055 18.9951C20.6531 18.3659 22.7127 17.4161 24.8556 15.849C24.8794 15.8372 24.8914 15.8134 24.8914 15.7897C25.4152 10.4117 24.0223 5.74605 21.2008 1.60276C21.1889 1.59089 21.177 1.57902 21.1532 1.57902ZM8.35519 12.9523C7.12896 12.9523 6.10512 11.8245 6.10512 10.4354C6.10512 9.04644 7.10515 7.91861 8.35519 7.91861C9.61713 7.91861 10.6172 9.05831 10.6052 10.4354C10.6052 11.8245 9.60522 12.9523 8.35519 12.9523ZM16.653 12.9523C15.4268 12.9523 14.403 11.8245 14.403 10.4354C14.403 9.04644 15.403 7.91861 16.653 7.91861C17.915 7.91861 18.915 9.05831 18.9031 10.4354C18.9031 11.8245 17.915 12.9523 16.653 12.9523Z"
                  fill="black"
                />
              </svg>

              <h1>Join Discord</h1>
            </button>

            <button className="border-2 sm:text-sm text-xs xl:text-base btn-outline">
              Explore Projects
            </button>
          </div>
        </div>
      </Box>
      <Box
        className="flex lg:max-w-[600px] 2xl:max-w-[650px] sm:max-w-[400px] w-[460px] sm:w-[100%] sm:mt-16 mt-10 xl:mt-0 absolute -right-96 sm:left-0 sm:relative"
        style={{
          aspectRatio: 1,
        }}
      >
        <div className="green-gradient absolute z-0 top-96 bottom-48 opacity-70 -left-20 block sm:hidden"></div>
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            if (canvasRef.current != null) {
              canvasRef.current.style.cursor = 'grabbing';
            }
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            if (canvasRef.current != null) {
              canvasRef.current.style.cursor = 'grab';
            }
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            if (canvasRef.current != null) {
              canvasRef.current.style.cursor = 'grab';
            }
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
          style={{
            cursor: 'grab',
            contain: 'layout paint size',
            opacity: 0,
            transition: 'opacity 1s ease',
          }}
          className="w-[100%] h-[100%]"
        />
      </Box>

      <img
        className="lg:block absolute -left-4 xl:top-[19rem] top-[18.2rem] hidden w-80 xl:w-96"
        draggable="false"
        src="/LandingPage/HeroSection/hero_line.png"
        alt=""
      />
      <img
        className="absolute -left-1 md:w-72 sm:w-64 w-52 sm:top-[14.5rem] top-[13.6rem] lg:hidden block "
        src="LandingPage/HeroSection/Frame 3.svg"
        alt=""
      />
    </div>
  );
}

export default HeroSection;
