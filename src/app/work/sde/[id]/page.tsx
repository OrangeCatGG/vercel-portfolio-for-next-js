import { Column, Heading, Text, Card, Row, Icon, Button, RevealFx, Badge } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import Link from "next/link";

const sdeVideos: Record<string, {
  couple: string;
  type: string;
  date?: string;
  video: string;
  credits: { icon: string; label: string; value: string }[];
}> = {
  "1": {
    couple: "Mhan and Lyra",
    type: "Same Day Edit",
    date: "12.19.2024",
    video: "/videos/wedding/wedding1.mp4",
    credits: [
      { icon: "mapPin", label: "Venue", value: "The Manila Hotel" },
      { icon: "sparkle", label: "HMUA", value: "Glenn Mendoza Hair & Makeup Artist" },
      { icon: "calendar", label: "Coordinator", value: "Melvin Roxas · Okasyon Events" },
      { icon: "person", label: "Stylist", value: "Jaime Tolentino" },
    ],
  },
  "2": {
    couple: "Jared and Aimie",
    type: "Pre-Wedding Film",
    video: "/videos/wedding/wedding2.mp4",
    credits: [
      { icon: "sparkle", label: "HMUA", value: "Dabica Gonzales-Valentin Hmua" },
      { icon: "person", label: "Wardrobe", value: "Amarabelliana's Gowns" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(sdeVideos).map((id) => ({ id }));
}

export default function SDEVideoPage({ params }: { params: { id: string } }) {
  const video = sdeVideos[params.id];
  if (!video) notFound();

  return (
    <Column maxWidth="m" fillWidth horizontal="center" paddingY="24" gap="32">
      {/* Back button */}
      <RevealFx translateY="4">
        <Row>
          <Button href="/work" variant="tertiary" size="s" prefixIcon="arrowLeft">
            Back to Services
          </Button>
        </Row>
      </RevealFx>

      {/* Header */}
      <RevealFx translateY="8">
        <Column horizontal="center" gap="12">
          <Badge
            background="brand-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="brand-strong"
            textVariant="label-default-s"
          >
            {video.type}
          </Badge>
          <Heading variant="display-strong-l" align="center">
            {video.couple}
          </Heading>
          {video.date && (
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {video.date}
            </Text>
          )}
        </Column>
      </RevealFx>

      {/* Video Player */}
      <RevealFx translateY="16" delay={0.1} fillWidth>
        <Card
          fillWidth
          radius="xl"
          overflow="hidden"
          border="neutral-alpha-weak"
          padding="0"
        >
          <video
            controls
            autoPlay
            style={{
              width: "100%",
              display: "block",
              background: "#000",
            }}
          >
            <source src={video.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
      </RevealFx>

      {/* Caption Card */}
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <Card
          fillWidth
          padding="32"
          radius="xl"
          background="surface"
          border="brand-alpha-weak"
          direction="column"
          gap="16"
        >
          <Heading as="h2" variant="heading-strong-l">
            {video.couple}
          </Heading>
          <Column gap="12">
            {video.credits.map((credit, i) => (
              <Row key={i} gap="12" vertical="center">
                <Icon name={credit.icon as any} size="s" onBackground="brand-medium" />
                <Text variant="body-default-m" onBackground="neutral-weak">
                  <Text as="span" variant="body-strong-m">{credit.label}: </Text>
                  {credit.value}
                </Text>
              </Row>
            ))}
          </Column>
          <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
            © Angelo Ramos Photography
          </Text>
        </Card>
      </RevealFx>

      {/* CTA */}
      <RevealFx translateY="8" delay={0.3}>
        <Row gap="16" wrap horizontal="center">
          <Button href="/contact" variant="primary" size="l" arrowIcon>
            Book Your SDE
          </Button>
          <Button href="/work" variant="secondary" size="l">
            View All Services
          </Button>
        </Row>
      </RevealFx>
    </Column>
  );
}
