"use client";

import { useState } from "react";
import { Media, MasonryGrid, Column, Row, Badge, Heading, Text, RevealFx } from "@once-ui-system/core";

type GalleryImage = {
  src: string;
  alt: string;
  orientation: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/horizontal-1.jpg",
    alt: "Wedding ceremony photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/images/gallery/vertical-1.jpg",
    alt: "Bridal portrait photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/images/gallery/horizontal-2.jpg",
    alt: "Debut celebration photography",
    orientation: "horizontal",
    category: "Debut",
  },
  {
    src: "/images/gallery/vertical-2.jpg",
    alt: "Debutante portrait photography",
    orientation: "vertical",
    category: "Debut",
  },
  {
    src: "/images/gallery/horizontal-3.jpg",
    alt: "Birthday celebration photography",
    orientation: "horizontal",
    category: "Birthday",
  },
  {
    src: "/images/gallery/vertical-3.jpg",
    alt: "Family portrait photography",
    orientation: "vertical",
    category: "Others",
  },
  {
    src: "/images/gallery/horizontal-4.jpg",
    alt: "Baptismal ceremony photography",
    orientation: "horizontal",
    category: "Others",
  },
  {
    src: "/images/gallery/vertical-4.jpg",
    alt: "Graduation portrait photography",
    orientation: "vertical",
    category: "Others",
  },
];

const categories = ["All", "Wedding", "Debut", "Birthday", "Others"];

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Column fillWidth gap="32">
      {/* Header */}
      <RevealFx translateY="4">
        <Column horizontal="center" gap="m">
          <Badge
            background="brand-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="brand-strong"
            textVariant="label-default-s"
          >
            Our Portfolio
          </Badge>
          <Heading variant="display-strong-l" align="center">
            Gallery
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "600px" }}>
            Browse through our collection of captured moments from weddings, 
            debuts, birthdays, and other special occasions.
          </Text>
        </Column>
      </RevealFx>

      {/* Category Filters */}
      <RevealFx translateY="8" delay={0.1}>
        <Row horizontal="center" gap="8" wrap>
          {categories.map((category) => (
            <Badge
              key={category}
              background={activeCategory === category ? "brand-medium" : "surface"}
              border={activeCategory === category ? "brand-medium" : "neutral-alpha-medium"}
              paddingX="20"
              paddingY="10"
              textVariant="body-default-m"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </Row>
      </RevealFx>

      {/* Gallery Grid */}
      <RevealFx translateY="16" delay={0.2}>
        <MasonryGrid columns={2} s={{ columns: 1 }}>
          {filteredImages.map((image, index) => (
            <Column key={`${image.src}-${index}`} data-gallery-image>
              <Media
                enlarge
                priority={index < 4}
                sizes="(max-width: 560px) 100vw, 50vw"
                radius="m"
                aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
                src={image.src}
                alt={image.alt}
              />
            </Column>
          ))}
        </MasonryGrid>
      </RevealFx>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <Column horizontal="center" padding="48">
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            No images found in this category.
          </Text>
        </Column>
      )}
    </Column>
  );
}
