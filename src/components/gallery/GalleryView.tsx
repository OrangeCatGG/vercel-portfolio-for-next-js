"use client";

import { useState } from "react";
import {
  Media,
  MasonryGrid,
  Column,
  Row,
  Badge,
  Heading,
  Text,
  RevealFx,
} from "@once-ui-system/core";
import { albums } from "@/resources/albums";
import { gallery } from "@/resources/content";

export default function GalleryView() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);


  const currentAlbum = albums.find((a) => a.title === selectedAlbum);

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
            {selectedAlbum ? selectedAlbum : "Gallery"}
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            {selectedAlbum
              ? `${currentAlbum?.images.length} photos`
              : "Browse through our collection of captured moments from weddings, debuts, birthdays, and other special occasions."}
          </Text>
        </Column>
      </RevealFx>

      {/* Back Button (when viewing an album) */}
      {selectedAlbum && (
        <Row fillWidth horizontal="center">
          <Badge
            background="surface"
            border="neutral-alpha-medium"
            paddingX="20"
            paddingY="8"
            textVariant="body-default-m"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedAlbum(null);
              setVisibleCount(20);
            }}
          >
            ← Back to Albums
          </Badge>
        </Row>
      )}

      {/* Albums Grid (when no album is selected) */}
      {!selectedAlbum && (
        <>
          {/* Featured local gallery */}
          {gallery.images.length > 0 && (
            <RevealFx translateY="8" delay={0.1} fillWidth>
              <Column fillWidth gap="16">
                <Heading variant="heading-strong-m">Featured Photos</Heading>
                <MasonryGrid columns={3} s={{ columns: 1 }}>
                  {gallery.images.slice(0, 6).map((image, index) => (
                    <Column key={`local-${index}`}>
                      <Media
                        enlarge
                        priority={index < 4}
                        sizes="(max-width: 560px) 100vw, 33vw"
                        radius="m"
                        aspectRatio={
                          image.orientation === "horizontal"
                            ? "16 / 9"
                            : "3 / 4"
                        }
                        src={image.src}
                        alt={image.alt}
                      />
                    </Column>
                  ))}
                </MasonryGrid>
              </Column>
            </RevealFx>
          )}

          {/* Album Cards */}
          <RevealFx translateY="12" delay={0.2} fillWidth>
            <Column fillWidth gap="16">
              <Heading variant="heading-strong-m">Albums</Heading>
              <Row fillWidth gap="16" wrap>
                {albums.map((album) => (
                  <Column
                    key={album.title}
                    style={{
                      cursor: "pointer",
                      flex: "1 1 340px",
                      maxWidth: "calc(50% - 8px)",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "var(--radius-m, 12px)",
                    }}
                    onClick={() => setSelectedAlbum(album.title)}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 10",
                        overflow: "hidden",
                        borderRadius: "var(--radius-m, 12px)",
                      }}
                    >
                      <Media
                        sizes="(max-width: 560px) 100vw, 50vw"
                        radius="m"
                        aspectRatio="16 / 10"
                        src={album.cover}
                        alt={album.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "48px 20px 20px",
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.85))",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <Text
                          variant="heading-strong-m"
                          onBackground="neutral-strong"
                          style={{ color: "#fff" }}
                        >
                          {album.title}
                        </Text>
                        <Text
                          variant="body-default-s"
                          style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          {album.images.length} photos
                        </Text>
                      </div>
                    </div>
                  </Column>
                ))}
              </Row>
            </Column>
          </RevealFx>
        </>
      )}

      {/* Album Detail View (when an album is selected) */}
      {selectedAlbum && currentAlbum && (
        <RevealFx translateY="16" delay={0.1}>
          <Column fillWidth gap="32">
            <MasonryGrid columns={2} s={{ columns: 1 }}>
              {currentAlbum.images.slice(0, visibleCount).map((src, index) => (
                <Column key={`${src}-${index}`}>
                  <Media
                    enlarge
                    priority={index < 4}
                    sizes="(max-width: 560px) 100vw, 50vw"
                    radius="m"
                    aspectRatio="16 / 9"
                    src={src}
                    alt={`${currentAlbum.title} photo ${index + 1}`}
                  />
                </Column>
              ))}
            </MasonryGrid>
            
            {visibleCount < currentAlbum.images.length && (
              <Row fillWidth horizontal="center" paddingBottom="48">
                <Badge
                  background="brand-alpha-weak"
                  onBackground="brand-strong"
                  paddingX="24"
                  paddingY="12"
                  textVariant="body-strong-m"
                  style={{ cursor: "pointer" }}
                  onClick={() => setVisibleCount(prev => prev + 20)}
                >
                  Load More Photos ({currentAlbum.images.length - visibleCount} remaining)
                </Badge>
              </Row>
            )}
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
