"use client";

import {
  Heading,
  Text,
  Grid,
  Row,
  Column,
  Icon,
  Card,
  RevealFx,
  Badge,
} from "@once-ui-system/core";

const gearItems = [
  {
    title: "Pro Full-Frame Bodies",
    description: "4K Cinematic video & 40MP+ stills for ultimate detail.",
    icon: "camera",
    tag: "Primary",
  },
  {
    title: "Signature Glass",
    description: "Prime & Zoom lenses (F1.2 - F2.8) for that creamy bokeh.",
    icon: "grid",
    tag: "Lenses",
  },
  {
    title: "Cinematic Drone",
    description: "4K Aerial coverage to capture the scale of your beauty.",
    icon: "volume", // Using volume/play as drone icon surrogate
    tag: "Aerial",
  },
  {
    title: "Studio Lighting",
    description: "Off-camera strobes & portable LEDs for perfect lighting.",
    icon: "email", // Using email as flash icon surrogate
    tag: "Lighting",
  },
  {
    title: "Pro Stabilizers",
    description: "Ronin Gimbals & heavy-duty tripods for steady shots.",
    icon: "play", // Using play as gimbal icon surrogate
    tag: "Stability",
  },
  {
    title: "On-site Storage",
    description: "Dual-slot recording & real-time backups for data safety.",
    icon: "heart", // Using heart as safety icon surrogate
    tag: "Reliability",
  },
];

export default function EquipmentShowcase() {
  return (
    <Column fillWidth gap="xl" vertical="center">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            TECHNICAL SPECS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            What&apos;s in Our Bag
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            We invest in state-of-the-art technology because your once-in-a-lifetime moments deserve nothing less than perfection.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Grid columns="3" gap="24" s={{ columns: "1" }} m={{ columns: "2" }}>
          {gearItems.map((item, index) => (
            <Card
              key={index}
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              direction="column"
              gap="16"
              style={{
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              className="gear-card"
            >
              {/* Background Glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle, rgba(238, 175, 41, 0.1) 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />

              <Row horizontal="between" vertical="center" fillWidth>
                <Row
                  padding="12"
                  radius="m"
                  background="brand-alpha-weak"
                  style={{
                    border: "1px solid rgba(238, 175, 41, 0.2)",
                  }}
                  className="gear-icon"
                >
                  <Icon name={item.icon as any} size="m" onBackground="brand-strong" />
                </Row>
                <Badge
                  background="neutral-alpha-weak"
                  onBackground="neutral-weak"
                  textVariant="label-default-s"
                >
                  {item.tag}
                </Badge>
              </Row>

              <Column gap="8">
                <Heading as="h3" variant="heading-strong-s">
                  {item.title}
                </Heading>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  style={{ opacity: 0.8 }}
                >
                  {item.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </RevealFx>

      <style jsx global>{`
        .gear-card:hover {
          transform: translateY(-4px);
          border-color: rgba(238, 175, 41, 0.4) !important;
          background: rgba(238, 175, 41, 0.05) !important;
        }
        .gear-card:hover .gear-icon {
          transform: scale(1.1);
          background: rgba(238, 175, 41, 0.3) !important;
        }
      `}</style>
    </Column>
  );
}
