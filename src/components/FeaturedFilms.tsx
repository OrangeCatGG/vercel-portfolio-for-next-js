"use client";

import {
  Heading,
  Text,
  Button,
  Grid,
  Row,
  Media,
  RevealFx,
  Column,
  Icon,
  Card,
  Badge,
} from "@once-ui-system/core";
import Link from "next/link";

const featuredFilms = [
  {
    id: "1",
    title: "Mhan and Lyra",
    date: "12.19.2024",
    location: "The Manila Hotel",
    type: "Same Day Edit",
    videoSrc: "/videos/wedding/wedding1.mp4",
  },
  {
    id: "2",
    title: "Jared and Aimie",
    date: "11.12.2024",
    location: "Amarabelliana's Gowns",
    type: "Pre-Wedding Film",
    videoSrc: "/videos/wedding/wedding2.mp4",
  },
  {
    id: "3",
    title: "Jared and Aimie",
    date: "",
    location: "Crystal Palace of Aquila in the Sky",
    type: "Same Day Edit",
    facebookUrl: "https://www.facebook.com/angeloramos.photography/videos/1925604778073944/",
  },
];

export default function FeaturedFilms() {
  return (
    <Column fillWidth gap="xl" vertical="center">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            FEATURED FILMS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Cinematic Highlights
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            Experience the magic of our Same Day Edit films, capturing heart-touching moments and playing them right during the celebration.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Grid columns="2" gap="24" s={{ columns: "1" }}>
          {featuredFilms.map((film, index) => (
            <Link
              key={index}
              href={`/work/sde/${film.id}`}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Card
                fillWidth
                radius="xl"
                overflow="hidden"
                border="neutral-alpha-weak"
                background="surface"
                direction="column"
                gap="0"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                className="film-card"
              >
                <Row
                  fillWidth
                  vertical="center"
                  horizontal="center"
                  style={{
                    background: "#000",
                    aspectRatio: "16/9",
                    position: "relative",
                  }}
                >
                  {film.videoSrc ? (
                    <video
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={`${film.videoSrc}#t=10`} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(film.facebookUrl || "")}&show_text=false`}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        overflow: "hidden",
                      }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  )}
                  <Row
                    position="absolute"
                    vertical="center"
                    horizontal="center"
                    style={{
                      inset: 0,
                      background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(0px)",
                      transition: "all 0.3s ease",
                    }}
                    className="video-overlay"
                  >
                    <Row
                      padding="20"
                      radius="full"
                      style={{
                        background: "rgba(238, 175, 41, 0.2)",
                        backdropFilter: "blur(8px)",
                        border: "2px solid rgba(238, 175, 41, 0.5)",
                        transition: "all 0.3s ease",
                      }}
                      className="play-icon"
                    >
                      <Icon name="play" size="l" onBackground="brand-strong" />
                    </Row>
                  </Row>
                </Row>
                <Column padding="24" gap="12">
                  <Row horizontal="between" vertical="center" fillWidth>
                    <Heading as="h3" variant="heading-strong-m">
                      {film.title}
                    </Heading>
                    <Badge
                      background="brand-alpha-weak"
                      paddingX="12"
                      paddingY="4"
                      onBackground="brand-strong"
                      textVariant="label-default-s"
                    >
                      {film.type}
                    </Badge>
                  </Row>
                  <Row gap="8" vertical="center">
                    <Icon name="calendar" size="s" onBackground="brand-medium" />
                    <Text variant="body-default-s" onBackground="brand-medium">
                      {film.date}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      •
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {film.location}
                    </Text>
                  </Row>
                </Column>
              </Card>
            </Link>
          ))}
        </Grid>
      </RevealFx>

      <style jsx global>{`
        .film-card:hover {
          transform: translateY(-8px);
          border-color: rgba(238, 175, 41, 0.4) !important;
        }
        .film-card:hover .video-overlay {
          background: rgba(0,0,0,0.2) !important;
          backdrop-filter: blur(0px) !important;
        }
        .film-card:hover .play-icon {
          transform: scale(1.1);
          background: rgba(238, 175, 41, 0.4) !important;
          box-shadow: 0 0 30px rgba(238, 175, 41, 0.3);
        }
      `}</style>

      <RevealFx delay={0.4} horizontal="center">
        <Button href="/work" variant="secondary" size="m" arrowIcon>
          View More Films
        </Button>
      </RevealFx>
    </Column>
  );
}
