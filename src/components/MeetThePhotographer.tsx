"use client";

import {
  Heading,
  Text,
  Row,
  Column,
  Media,
  RevealFx,
  Button,
} from "@once-ui-system/core";
import { person, about } from "@/resources";

export default function MeetThePhotographer() {
  return (
    <Row fillWidth gap="xl" vertical="center" s={{ direction: "column-reverse" }}>
      {/* Text Column */}
      <RevealFx translateY="16" style={{ flex: 1.2 }}>
        <Column gap="l">
          <Column gap="m">
            <Text variant="label-default-s" onBackground="brand-medium">
              MEET THE PHOTOGRAPHER
            </Text>
            <Heading as="h2" variant="display-strong-m">
              Behind the Lens: {person.firstName}
            </Heading>
          </Column>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            style={{ lineHeight: "1.6" }}
          >
            {about.intro.description}
          </Text>
          <Row gap="16" paddingTop="8">
            <Button href="/about" variant="secondary" size="m" arrowIcon>
              Read Our Story
            </Button>
          </Row>
        </Column>
      </RevealFx>

      {/* Image Column */}
      <RevealFx translateY="16" delay={0.2} style={{ flex: 0.8 }}>
        <Column
          radius="xl"
          overflow="hidden"
          border="brand-alpha-weak"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(238, 175, 41, 0.1)",
          }}
          className="photographer-portrait"
        >
          <Media
            src={person.avatar}
            alt="Angelo Ramos Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
          {/* Decorative Gold Frame */}
          <div
            style={{
              position: "absolute",
              inset: "12px",
              border: "1px solid rgba(238, 175, 41, 0.3)",
              borderRadius: "16px",
              pointerEvents: "none",
            }}
          />
        </Column>
      </RevealFx>

      <style jsx global>{`
        .photographer-portrait:hover {
          transform: translateY(-8px);
          border-color: rgba(238, 175, 41, 0.5) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(238, 175, 41, 0.2);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      `}</style>
    </Row>
  );
}
