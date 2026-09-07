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
  <svg
    className="golden-bee-guide"
    viewBox="0 0 1000 900"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
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

    <g ref={beeRef} className="golden-bee">
      <g ref={beeBodyRef} className="golden-bee-rotation">
        <g className="golden-bee-float">
          <ellipse
            className="bee-wing"
            cx="43"
            cy="38"
            rx="15"
            ry="7"
            transform="rotate(-30 43 38)"
          />

          <ellipse
            className="bee-wing"
            cx="67"
            cy="38"
            rx="15"
            ry="7"
            transform="rotate(30 67 38)"
          />

          <path
            className="bee-body-outline"
            d="
              M55 36
              C46 36 41 45 43 56
              C45 67 50 76 55 83
              C60 76 65 67 67 56
              C69 45 64 36 55 36
              Z
            "
          />

          <path
            className="bee-stripe-line"
            d="M44 51 C51 54 59 54 66 51"
          />

          <path
            className="bee-stripe-line"
            d="M45 60 C52 63 58 63 65 60"
          />

          <circle
            className="bee-head-outline"
            cx="55"
            cy="30"
            r="7"
          />

          <path
            className="bee-antenna"
            d="M51 25 C45 18 43 17 40 18"
          />

          <path
            className="bee-antenna"
            d="M59 25 C65 18 67 17 70 18"
          />
        </g>
      </g>
    </g>
  </svg>
);
}