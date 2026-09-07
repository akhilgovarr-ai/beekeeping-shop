"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * HERO PARALLAX
       */
      gsap.to(".hero-founder-image", {
        yPercent: 10,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /*
       * HERO CONTENT
       */
      gsap.fromTo(
        ".hero-content",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -60,
          opacity: 0.28,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "35% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /*
       * GENERIC SECTION REVEALS
       */
      const sections = gsap.utils.toArray<HTMLElement>(
        ".manifesto-section, .production-section, .collection-section, .nature-section"
      );

      sections.forEach((section) => {
        const kicker = section.querySelector(".section-kicker");
        const heading = section.querySelector("h2");
        const line = section.querySelector(".section-gold-line");

        if (line) {
          gsap.fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 1.25,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        if (kicker) {
          gsap.fromTo(
            kicker,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: kicker,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (heading) {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 55,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 86%",
                once: true,
              },
            }
          );
        }
      });

      /*
       * MANIFESTO COPY
       */
      gsap.fromTo(
        ".manifesto-copy p",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".manifesto-copy",
            start: "top 85%",
            once: true,
          },
        }
      );

      /*
       * PRODUCTION PHOTO
       */
      gsap.fromTo(
        ".production-photo-main",
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".production-photo-main",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * PRODUCTION PRINCIPLES
       */
      gsap.fromTo(
        ".production-principle",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".production-principles",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * COLLECTION GROUPS
       */
      gsap.utils
        .toArray<HTMLElement>(".collection-group")
        .forEach((group) => {
          const heading = group.querySelector(".collection-group-heading");

          if (heading) {
            gsap.fromTo(
              heading,
              {
                opacity: 0,
                y: 40,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        });

      /*
       * PRODUCT CARDS
       */
      const cardGroups = [
        ".hive-product-card",
        ".catalog-product-card",
        ".tea-product-card",
      ];

      cardGroups.forEach((selector) => {
        const cards = gsap.utils.toArray<HTMLElement>(selector);

        if (!cards.length) return;

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0].parentElement,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      /*
       * URBECH FEATURED
       */
      gsap.fromTo(
        ".urbech-featured",
        {
          opacity: 0,
          x: -45,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".urbech-showcase",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * URBECH LIST
       */
      gsap.fromTo(
        ".urbech-list-item",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.055,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".urbech-list",
            start: "top 83%",
            once: true,
          },
        }
      );

      /*
       * NATURE IMAGE PARALLAX
       */
      gsap.fromTo(
        ".nature-visual img",
        {
          scale: 1.12,
          yPercent: -4,
        },
        {
          scale: 1.03,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".nature-visual",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      /*
       * NATURE QUOTE
       */
      gsap.fromTo(
        ".nature-quote",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".nature-quote",
            start: "top 86%",
            once: true,
          },
        }
      );

      /*
       * FOOTER
       */
      gsap.fromTo(
        ".footer-main",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top 82%",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}