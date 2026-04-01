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
  Card,
  Badge,
  Button
} from "@once-ui-system/core";

const bookingSteps = [
  {
    id: 1,
    title: "Connect",
    description: "Send us an inquiry through our contact form or shoot us a quick message on Messenger.",
    icon: "email",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Design",
    description: "We'll discuss your vision and curate the perfect photography and film package for your budget.",
    icon: "grid",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Capture",
    description: "Relax and enjoy your special day while our professional team captures every authentic moment.",
    icon: "camera",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Relive",
    description: "Receive your beautifully edited gallery and high-impact cinematic films to treasure forever.",
    icon: "heart",
    delay: 0.4,
  },
];

export default function BookingTimeline() {
  return (
    <Column fillWidth gap="xl" vertical="center">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            OUR PROCESS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            How to Book Your Date
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            Planning your big day is stressful enough. We&apos;ve simplified our booking process into four effortless steps.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Grid columns="4" gap="24" s={{ columns: "1" }} m={{ columns: "2" }}>
          {bookingSteps.map((step, index) => (
            <Card
              key={index}
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              direction="column"
              gap="24"
              horizontal="center"
              style={{
                position: "relative",
                transition: "all 0.3s ease",
              }}
              className="timeline-card"
            >
              {/* Step Number Circle */}
              <Row
                padding="12"
                radius="full"
                background="brand-medium"
                horizontal="center"
                vertical="center"
                style={{
                  width: "48px",
                  height: "48px",
                  position: "absolute",
                  top: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 20px rgba(238, 175, 41, 0.4)",
                  zIndex: 2,
                }}
              >
                <Text variant="label-strong-l" onBackground="neutral-strong">
                  {step.id}
                </Text>
              </Row>

              {/* Icon */}
              <Row
                padding="20"
                radius="full"
                background="brand-alpha-weak"
                horizontal="center"
                vertical="center"
                style={{
                  border: "1px solid rgba(238, 175, 41, 0.2)",
                  transition: "all 0.3s ease",
                }}
                className="step-icon"
              >
                <Icon name={step.icon as any} size="l" onBackground="brand-strong" />
              </Row>

              <Column gap="8" horizontal="center">
                <Heading as="h3" variant="heading-strong-m" align="center">
                  {step.title}
                </Heading>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  align="center"
                >
                  {step.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </RevealFx>

      <style jsx global>{`
        .timeline-card:hover {
          transform: translateY(-4px);
          border-color: rgba(238, 175, 41, 0.3) !important;
          background: rgba(238, 175, 41, 0.05) !important;
        }
        .timeline-card:hover .step-icon {
          transform: scale(1.1) rotate(5deg);
          background: rgba(238, 175, 41, 0.2) !important;
        }
      `}</style>

      <RevealFx delay={0.6} horizontal="center">
        <Button
          href="/contact"
          variant="primary"
          size="l"
          arrowIcon
        >
          Book Your Date Now
        </Button>
      </RevealFx>
    </Column>
  );
}
