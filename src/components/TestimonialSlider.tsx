"use client";

import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Row,
  Column,
  Card,
  Icon,
  Badge,
  RevealFx,
  IconButton,
} from "@once-ui-system/core";

const testimonials = [
  {
    name: "Mhan & Lyra",
    event: "Wedding",
    text: "Angelo and his team were absolutely incredible! They captured every emotion of our wedding day perfectly. The SDE was the highlight of our reception and brought tears to everyone's eyes. Professional, creative, and such a joy to work with!",
    stars: 5,
  },
  {
    name: "Jared & Aimie",
    event: "Pre-Wedding",
    text: "We were quite nervous about our pre-wedding shoot, but Angelo made us feel so comfortable. The photos are stunning and exactly what we envisioned. His eye for lighting and composition is truly world-class. Highly recommended!",
    stars: 5,
  },
  {
    name: "The Gojocruz Family",
    event: "Baptismal",
    text: "We've been hiring Angeloramos Photography for all our family events, and they never disappoint. They are patient with children and always manage to catch those fleeting, candid moments that we treasure the most.",
    stars: 5,
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Column fillWidth gap="xl" vertical="center">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            TESTIMONIALS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            What Our Clients Say
          </Heading>
        </Column>
      </RevealFx>

      <Row fillWidth vertical="center" horizontal="center" gap="l" s={{ direction: "column" }}>
        <Flex s={{ hide: true }}>
          <IconButton
            icon="chevronLeft"
            variant="secondary"
            size="m"
            onClick={prevSlide}
            style={{ zIndex: 10 }}
          />
        </Flex>

        <Column
          fillWidth
          style={{ maxWidth: "800px", position: "relative", overflow: "hidden" }}
        >
          <Row
            style={{
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Column
                key={index}
                fillWidth
                style={{ flex: "0 0 100%", paddingLeft: "12px", paddingRight: "12px" }}
              >
                <Card
                  padding="48"
                  radius="xl"
                  background="surface"
                  border="brand-alpha-weak"
                  direction="column"
                  gap="32"
                  horizontal="center"
                  style={{
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                    position: "relative",
                  }}
                >
                  <Icon name="star" size="xl" onBackground="brand-strong" style={{ opacity: 0.1, position: "absolute", top: "24px", left: "24px", transform: "scale(4)" }} />
                  
                  <Row gap="8">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        size="m"
                        onBackground="brand-strong"
                        className="pulse-star"
                      />
                    ))}
                  </Row>

                  <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    align="center"
                    style={{ fontStyle: "italic", lineHeight: "1.8" }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </Text>

                  <Column gap="4" horizontal="center">
                    <Text variant="heading-strong-s">{testimonial.name}</Text>
                    <Badge background="brand-alpha-weak" onBackground="brand-strong">
                      {testimonial.event}
                    </Badge>
                  </Column>
                </Card>
              </Column>
            ))}
          </Row>
        </Column>

        <Flex s={{ hide: true }}>
          <IconButton
            icon="chevronRight"
            variant="secondary"
            size="m"
            onClick={nextSlide}
            style={{ zIndex: 10 }}
          />
        </Flex>
      </Row>

      {/* Slide Indicators */}
      <Row gap="12" horizontal="center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: activeIndex === index ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: activeIndex === index ? "var(--brand-strong)" : "var(--neutral-alpha-medium)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Row>

      <style jsx global>{`
        @keyframes starPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .pulse-star {
          animation: starPulse 2s infinite ease-in-out;
        }
      `}</style>
    </Column>
  );
}
