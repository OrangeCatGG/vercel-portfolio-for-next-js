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
  Button,
} from "@once-ui-system/core";

const packages = [
  {
    name: "Classic Photo",
    subtitle: "PERFECT FOR SMALLER SESSIONS",
    features: [
      "1 Professional Photographer",
      "Unlimited High-Res Photos",
      "Color-Graded Full Collection",
      "Online Private Gallery (1 Year)",
      "3-5 Photo Sneak Peeks (48h)",
    ],
    accent: "neutral-alpha-medium",
  },
  {
    name: "Wedding Gold",
    subtitle: "OUR MOST POPULAR CHOICE",
    featured: true,
    features: [
      "2 Photographers & 2 Videographers",
      "Cinematic Same Day Edit (SDE)",
      "High-Definition Raw Video Coverage",
      "40-Page Premium Hardbound Album",
      "Full Digital Delivery (Google Drive)",
    ],
    accent: "brand-strong",
  },
  {
    name: "Diamond Cinematic",
    subtitle: "FOR THE COMPLETE STORY",
    features: [
      "3 Photographers & 3 Videographers",
      "4K Drone Aerial Footage",
      "15-Minute Wedding Documentary Film",
      "2 Large Glass Portrait Prints",
      "Pre-Wedding / Engagement Pictorial",
    ],
    accent: "brand-strong",
  },
];

export default function PackageHighlights() {
  return (
    <Column fillWidth gap="xl" vertical="center" paddingY="64">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            FEATURED COLLECTIONS
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Investment & Packages
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            Choose a collection that fits your vision. All packages include our commitment to 
            capturing every raw, beautiful emotion from your day.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Row wrap gap="24" horizontal="center" fillWidth>
          {packages.map((pkg, index) => (
            <Card
              key={index}
              padding="48"
              radius="xl"
              background="surface"
              border={pkg.featured ? "brand-medium" : "neutral-alpha-weak"}
              direction="column"
              gap="32"
              horizontal="center"
              style={{
                flex: "1 1 320px",
                maxWidth: "400px",
                position: pkg.featured ? "relative" : "static",
                transform: "none",
                zIndex: pkg.featured ? 10 : 1,
                boxShadow: pkg.featured ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
              }}
              className="package-card"
            >
              {pkg.featured && (
                <Badge
                  background="brand-strong"
                  onBackground="brand-weak"
                  style={{ position: "absolute", top: "16px", right: "16px" }}
                >
                  POPULAR
                </Badge>
              )}

              <Column gap="8" horizontal="center">
                <Text variant="label-default-s" onBackground="brand-weak">
                  {pkg.subtitle}
                </Text>
                <Heading as="h3" variant="display-strong-xs" align="center">
                  {pkg.name}
                </Heading>
              </Column>

              <Column gap="12" fillWidth>
                {pkg.features.map((feature, fIndex) => (
                  <Row key={fIndex} gap="12" vertical="center">
                    <Icon
                      name="sparkle"
                      size="s"
                      onBackground={pkg.featured ? "brand-strong" : "neutral-weak"}
                    />
                    <Text variant="body-default-m" onBackground="neutral-alpha-strong">
                      {feature}
                    </Text>
                  </Row>
                ))}
              </Column>

              <Button
                href="/contact"
                variant={pkg.featured ? "primary" : "secondary"}
                size="l"
                fillWidth
                arrowIcon
              >
                Inquire Now
              </Button>
            </Card>
          ))}
        </Row>
      </RevealFx>

      <style jsx global>{`
        .package-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
        }
        .package-card:hover {
          transform: translateY(-12px) !important;
          border-color: var(--brand-strong) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4) !important;
        }
      `}</style>
    </Column>
  );
}
