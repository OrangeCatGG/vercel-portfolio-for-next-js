import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Card,
  Badge,
  RevealFx,
  Grid,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const whyChooseUs = [
  {
    icon: "camera",
    title: "Professional Equipment",
    description: "State-of-the-art cameras, lenses, and lighting equipment for stunning results.",
  },
  {
    icon: "heart",
    title: "Passion for Storytelling",
    description: "We capture emotions and moments that tell your unique story.",
  },
  {
    icon: "clock",
    title: "Timely Delivery",
    description: "Receive your photos and videos promptly after your event.",
  },
  {
    icon: "sparkle",
    title: "Creative Excellence",
    description: "Artistic vision combined with technical expertise in every shot.",
  },
];

export default function About() {
  return (
    <Column maxWidth="m" fillWidth horizontal="center" paddingY="24" gap="80">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <RevealFx translateY="4">
        <Column horizontal="center" gap="m">
          <Badge
            background="brand-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="brand-strong"
            textVariant="label-default-s"
          >
            Our Story
          </Badge>
          <Heading variant="display-strong-l" align="center">
            About Us
          </Heading>
        </Column>
      </RevealFx>

      {/* Main About Section */}
      <RevealFx translateY="8" delay={0.1}>
        <Row gap="48" fillWidth vertical="center" s={{ direction: "column" }}>
          {about.avatar.display && (
            <Column horizontal="center" style={{ minWidth: "200px" }}>
              <Avatar src={person.avatar} size="xl" />
            </Column>
          )}
          <Column gap="24" flex={1}>
            <Heading as="h2" variant="heading-strong-xl">
              {person.name}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {about.intro.description}
            </Text>
            <Row gap="16" wrap>
              <Row gap="8" vertical="center">
                <Icon name="mapPin" onBackground="brand-medium" />
                <Text variant="body-default-m" onBackground="neutral-weak">Philippines</Text>
              </Row>
              {person.languages && person.languages.length > 0 && (
                <Row gap="8" wrap>
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Row>
              )}
            </Row>
            {social.length > 0 && (
              <Row gap="8" wrap>
                {social.map((item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="s"
                      weight="default"
                      variant="secondary"
                    />
                  )
                )}
              </Row>
            )}
          </Column>
        </Row>
      </RevealFx>

      {/* Why Choose Us */}
      <Column gap="32">
        <RevealFx translateY="8">
          <Column horizontal="center" gap="m">
            <Text variant="label-default-s" onBackground="brand-medium">WHY CHOOSE US</Text>
            <Heading as="h2" variant="display-strong-m" align="center">
              What Sets Us Apart
            </Heading>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="16" delay={0.1}>
          <Grid columns="2" gap="24" s={{ columns: "1" }}>
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                direction="column"
                gap="16"
              >
                <Row gap="16" vertical="center">
                  <Row 
                    padding="12" 
                    radius="m" 
                    background="brand-alpha-weak"
                  >
                    <Icon name={item.icon as any} size="m" onBackground="brand-strong" />
                  </Row>
                  <Text variant="heading-strong-m">{item.title}</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </RevealFx>
      </Column>

      {/* Our Expertise */}
      {about.work.display && (
        <Column gap="32">
          <RevealFx translateY="8">
            <Column gap="m">
              <Text variant="label-default-s" onBackground="brand-medium">EXPERTISE</Text>
              <Heading as="h2" variant="display-strong-m">
                {about.work.title}
              </Heading>
            </Column>
          </RevealFx>
          
          <RevealFx translateY="16" delay={0.1}>
            <Column gap="24">
              {about.work.experiences.map((experience, index) => (
                <Card
                  key={`${experience.company}-${index}`}
                  fillWidth
                  padding="32"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                  direction="column"
                  gap="16"
                >
                  <Row fillWidth horizontal="between" vertical="center" wrap>
                    <Heading as="h3" variant="heading-strong-l">
                      {experience.company}
                    </Heading>
                    <Badge
                      background="brand-alpha-weak"
                      paddingX="12"
                      paddingY="8"
                      textVariant="label-default-s"
                      onBackground="brand-medium"
                    >
                      {experience.timeframe}
                    </Badge>
                  </Row>
                  <Text variant="body-default-m" onBackground="brand-weak">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="12" paddingLeft="20">
                    {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                      <Row key={i} as="li" gap="8" vertical="start">
                        <Icon name="check" size="s" onBackground="brand-medium" style={{ marginTop: "4px" }} />
                        <Text variant="body-default-m">{achievement}</Text>
                      </Row>
                    ))}
                  </Column>
                </Card>
              ))}
            </Column>
          </RevealFx>
        </Column>
      )}

      {/* Equipment & Capabilities */}
      {about.technical.display && (
        <Column gap="32">
          <RevealFx translateY="8">
            <Column gap="m">
              <Text variant="label-default-s" onBackground="brand-medium">CAPABILITIES</Text>
              <Heading as="h2" variant="display-strong-m">
                {about.technical.title}
              </Heading>
            </Column>
          </RevealFx>
          
          <RevealFx translateY="16" delay={0.1}>
            <Column gap="24">
              {about.technical.skills.map((skill, index) => (
                <Card
                  key={`${skill.title}-${index}`}
                  fillWidth
                  padding="32"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                  direction="column"
                  gap="16"
                >
                  <Text variant="heading-strong-l">{skill.title}</Text>
                  {skill.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  )}
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l">
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Card>
              ))}
            </Column>
          </RevealFx>
        </Column>
      )}

      {/* CTA Section */}
      <RevealFx translateY="8">
        <Card
          fillWidth
          padding="48"
          radius="xl"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          direction="column"
          gap="24"
          horizontal="center"
          align="center"
        >
          <Heading as="h2" variant="display-strong-m" align="center">
            Ready to Work Together?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "500px" }}>
            Let us capture your special moments with creativity and professionalism.
          </Text>
          <Row gap="16" wrap horizontal="center">
            <Button
              href="/contact"
              variant="primary"
              size="l"
              arrowIcon
            >
              Get in Touch
            </Button>
            <Button
              href="/gallery"
              variant="secondary"
              size="l"
            >
              View Our Work
            </Button>
          </Row>
        </Card>
      </RevealFx>
    </Column>
  );
}
