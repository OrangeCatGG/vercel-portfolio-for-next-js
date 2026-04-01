"use client";

import {
  Heading,
  Text,
  Grid,
  Row,
  Media,
  RevealFx,
  Column,
  Icon,
} from "@once-ui-system/core";
import Link from "next/link";

const instagramImages = [
  { src: "/images/instagram/ig-1.png", alt: "Wedding photography sunset" },
  { src: "/images/instagram/ig-2.png", alt: "Debutant in grand ballroom" },
  { src: "/images/instagram/ig-3.png", alt: "Baby baptismal ceremony" },
  { src: "/images/instagram/ig-4.png", alt: "Wedding rings on bouquet" },
  { src: "/images/instagram/ig-5.png", alt: "Couple portrait outdoor" },
  { src: "/images/instagram/ig-6.png", alt: "Corporate event lighting" },
  { src: "/images/instagram/ig-7.png", alt: "Church wedding ceremony" },
  { src: "/images/instagram/ig-8.png", alt: "Debutant walking down stairs" },
  { src: "/images/instagram/ig-9.png", alt: "Couple whispering romantic" },
];

export default function InstagramGrid() {
  return (
    <Column fillWidth gap="xl" vertical="center">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            INSTAGRAM
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Follow our journey @angeloramosph
          </Heading>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Grid columns="3" gap="8" m={{ columns: "2" }} s={{ columns: "3" }}>
          {instagramImages.map((image, index) => (
            <Column
              key={index}
              fillWidth
              style={{ position: "relative" }}
              data-instagram-item
            >
              <Row
                radius="m"
                overflow="hidden"
                style={{
                  width: "100%",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Media
                  src={image.src}
                  alt={image.alt}
                  aspectRatio="1 / 1"
                  sizes="(max-width: 768px) 33vw, 25vw"
                  style={{
                    transition: "transform 0.5s ease",
                  }}
                />
                <Row
                  position="absolute"
                  fill
                  background="neutral-alpha-medium"
                  horizontal="center"
                  vertical="center"
                  style={{
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 1,
                  }}
                  className="hover-overlay"
                >
                  <Icon name="instagram" size="l" onBackground="neutral-strong" />
                </Row>
                <Link
                  href="https://www.instagram.com/angeloramosph/"
                  target="_blank"
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                  }}
                />
              </Row>
            </Column>
          ))}
        </Grid>
      </RevealFx>

      <style jsx global>{`
        [data-instagram-item]:hover img {
          transform: scale(1.1);
        }
        [data-instagram-item]:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>

      <RevealFx delay={0.4} horizontal="center">
        <Link
          href="https://www.instagram.com/angeloramosph/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Row vertical="center" gap="8">
            <Icon name="instagram" size="s" onBackground="brand-medium" />
            <Text variant="body-strong-m" onBackground="brand-medium">
              View more on Instagram
            </Text>
          </Row>
        </Link>
      </RevealFx>
    </Column>
  );
}
