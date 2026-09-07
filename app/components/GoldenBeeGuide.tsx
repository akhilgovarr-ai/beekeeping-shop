"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function GoldenBeeGuide() {
  const beeRef = useRef<SVGGElement | null>(null);
  const beeBodyRef = useRef<SVGGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const bee = beeRef.current;
    const beeBody = beeBodyRef.current;
    const path = pathRef.current;

    if (!bee || !beeBody || !path) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(bee, { opacity: 0 });
      return;
    }

    gsap.set(bee, {
      opacity: 0,
      transformOrigin: "center",
    });

    const context = gsap.context(() => {
      /*
       * Движение пчелы по траектории
       */
      gsap.to(bee, {
        ease: "none",

        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },

        scrollTrigger: {
          trigger: ".site-main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.25,

          onUpdate: (self) => {
            /*
             * При скролле вверх пчела разворачивается
             */
            gsap.to(beeBody, {
              rotation: self.direction === 1 ? 0 : 180,
              duration: 0.28,
              ease: "power2.out",
              overwrite: true,
            });
          },
        },
      });

      /*
       * Появление после Hero
       */
      ScrollTrigger.create({
        trigger: ".hero",
        start: "bottom 80%",

        onEnter: () => {
          gsap.to(bee, {
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(bee, {
            opacity: 0,
            duration: 0.35,
          });
        },
      });

      /*
       * Исчезновение перед Footer
       */
      ScrollTrigger.create({
        trigger: ".site-footer",
        start: "top 88%",

        onEnter: () => {
          gsap.to(bee, {
            opacity: 0,
            scale: 0.8,
            duration: 0.55,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(bee, {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div className="golden-bee-guide" aria-hidden="true">
      <svg
        className="golden-bee-stage"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Невидимая траектория */}
        <path
          ref={pathRef}
          className="golden-bee-motion-path"
          d="
            M 90 850
            C 180 680, 280 760, 390 585
            C 500 410, 650 510, 770 330
            C 850 210, 900 245, 940 120
          "
        />

        {/* Пчела */}
        <g
          ref={beeRef}
          className="golden-bee"
        >
          <g ref={beeBodyRef}>
            <circle
              className="golden-bee-glow"
              cx="0"
              cy="0"
              r="30"
            />

            {/* крыло сверху */}
            <path
              className="bee-wing"
              d="
                M -5 -5
                C -26 -29, -45 -25, -42 -8
                C -39 7, -20 7, -5 1
                Z
              "
            />

            {/* крыло снизу */}
            <path
              className="bee-wing"
              d="
                M -4 5
                C -25 27, -44 24, -42 8
                C -39 -7, -20 -7, -4 -1
                Z
              "
            />

            {/* тело */}
            <ellipse
              className="bee-body"
              cx="7"
              cy="0"
              rx="20"
              ry="11"
            />

            {/* полосы */}
            <path
              className="bee-stripe"
              d="M 0 -10 L 0 10"
            />

            <path
              className="bee-stripe"
              d="M 8 -11 L 8 11"
            />

            {/* голова */}
            <circle
              className="bee-head"
              cx="27"
              cy="0"
              r="7"
            />

            {/* усики */}
            <path
              className="bee-detail"
              d="M 30 -5 C 36 -12, 40 -12, 43 -10"
            />

            <path
              className="bee-detail"
              d="M 30 5 C 36 12, 40 12, 43 10"
            />

            {/* хвост */}
            <path
              className="bee-detail"
              d="M -13 0 L -23 0"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}