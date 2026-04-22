"use client";

import {
  Heading,
  Text,
  Row,
  Column,
  Icon,
  Card,
  RevealFx,
  Badge,
} from "@once-ui-system/core";

const regions = [
  {
    name: "METRO MANILA (NCR)",
    locations: ["Manila", "Quezon City", "Makati", "Taguig (BGC)", "Pasig", "Marikina"],
  },
  {
    name: "LUZON (DESTINATION)",
    locations: ["Tagaytay", "Antipolo", "Batangas", "Cavite", "Laguna", "Baguio"],
  },
  {
    name: "VISAYAS & MINDANAO",
    locations: ["Cebu", "Bohol", "Davao", "Boracay", "Available for Flight"],
  },
];

export default function ServiceLocations() {
  return (
    <Column fillWidth gap="xl" vertical="center" paddingY="64">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            COVERAGE AREAS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Where We Capture Stories
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            Based in the heart of the Philippines, we travel to wherever your love story 
            takes us—from intimate local chapels to grand destination celebrations.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Card
          fillWidth
          padding="48"
          radius="xl"
          background="surface"
          border="neutral-alpha-weak"
          direction="column"
          gap="48"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Destination Badge - Centered for better layout */}
          <Row horizontal="center" fillWidth>
            <Badge background="brand-alpha-weak" onBackground="brand-strong" padding="12">
              <Row gap="12" vertical="center">
                <Icon name="play" size="s" />
                <Text variant="label-default-s" onBackground="brand-strong">
                  AVAILABLE FOR WORLDWIDE TRAVEL
                </Text>
              </Row>
            </Badge>
          </Row>

          <Row wrap gap="48" horizontal="start" fillWidth s={{ direction: "column", gap: "32" }}>
            {regions.map((region, index) => (
              <Column key={index} gap="16" style={{ flex: "1 1 200px" }}>
                <Heading as="h3" variant="heading-strong-s" onBackground="brand-weak">
                  {region.name}
                </Heading>
                <Column gap="8">
                  {region.locations.map((loc, lIndex) => (
                    <Row key={lIndex} gap="8" vertical="center">
                      <div
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--brand-strong)",
                        }}
                      />
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {loc}
                      </Text>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Row>
        </Card>
      </RevealFx>

      <style jsx global>{`
        .location-item:hover {
          color: var(--brand-strong) !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </Column>
  );
}
