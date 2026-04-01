"use client";

import { useState } from "react";
import {
  Heading,
  Text,
  Row,
  Column,
  Badge,
  Grid,
  Media,
  RevealFx,
  Button,
} from "@once-ui-system/core";
import { gallery } from "@/resources";

const categories = ["All", "Wedding", "Debut", "Baptismal", "Others"];

export default function HomeGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? gallery.images
    : gallery.images.filter((img) => img.category === activeCategory);

  // Limit to 6 images for the home page preview
  const displayImages = filteredImages.slice(0, 6);

  return (
    <Column fillWidth gap="l">
      {/* Header & Tabs */}
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            PORTFOLIO
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Moments We&apos;ve Captured
          </Heading>
          
          <Row wrap gap="8" horizontal="center" paddingTop="16">
            {categories.map((category) => (
              <Badge
                key={category}
                background={activeCategory === category ? "brand-medium" : "surface"}
                border={activeCategory === category ? "brand-medium" : "neutral-alpha-medium"}
                paddingX="20"
                paddingY="8"
                textVariant="body-default-m"
                style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </Row>
        </Column>
      </RevealFx>

      {/* Grid */}
      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Grid columns="3" gap="12" s={{ columns: "2" }}>
          {displayImages.map((image, index) => (
            <Row
              key={`${activeCategory}-${index}`}
              radius="m"
              overflow="hidden"
              style={{ position: "relative" }}
              data-gallery-image
            >
              <Media
                src={image.src}
                alt={image.alt}
                aspectRatio="1 / 1"
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </Row>
          ))}
        </Grid>
      </RevealFx>

      {/* Footer CTA */}
      <RevealFx delay={0.4} horizontal="center">
        <Button href="/gallery" variant="secondary" size="m" arrowIcon>
          View Full Gallery
        </Button>
      </RevealFx>

      <style jsx global>{`
        [data-gallery-image] {
          transition: transform 0.3s ease;
        }
        [data-gallery-image]:hover {
          transform: scale(1.02);
        }
      `}</style>
    </Column>
  );
}
