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
    src: "/upload/643405084_1403924914867548_5356318093091625407_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/643432821_1403937904866249_1606065758966942195_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/644055401_1403925101534196_5850016501037753793_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/644992560_1403936248199748_2479726541124459247_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/upload/646731634_1407941631132543_7267704576008112847_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/647488047_1407920634467976_4575963463927026081_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/647860886_1407921207801252_2265483709074230455_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/upload/648834815_1407920677801305_2391843919423853094_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/648999862_1407941587799214_6146639121367153032_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/upload/644529092_1403906004869439_2072253442678557298_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/644697741_1403888501537856_7408920720871332226_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/upload/645063984_1403890824870957_6159837259599932731_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/645304854_1403906088202764_2092610171447579370_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
  },
  {
    src: "/upload/645418179_1403906854869354_8830061894182832409_n.jpg",
    alt: "Event photography",
    orientation: "horizontal",
    category: "Wedding",
  },
  {
    src: "/upload/645711881_1403889861537720_4852969470801467914_n.jpg",
    alt: "Event photography",
    orientation: "vertical",
    category: "Wedding",
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
      <RevealFx translateY="4" fillWidth>
        <Column fillWidth horizontal="center" gap="m">
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
      <RevealFx translateY="8" delay={0.1} fillWidth>
        <Row fillWidth horizontal="center" gap="8" wrap>
          {categories.map((category) => (
            <Badge
              key={category}
              background={activeCategory === category ? "brand-medium" : "surface"}
              border={activeCategory === category ? "brand-medium" : "neutral-alpha-medium"}
              paddingX="20"
              paddingY="8"
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
