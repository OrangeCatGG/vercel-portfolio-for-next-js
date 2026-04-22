"use client";

import { useState } from "react";
import {
  Heading,
  Text,
  Row,
  Column,
  Icon,
  Card,
  RevealFx,
  IconButton,
} from "@once-ui-system/core";

const faqs = [
  {
    question: "Do you travel for destination weddings or events?",
    answer: "Absolutely! While we are based in Metro Manila, we love capturing stories in places like Tagaytay, Batangas, Cebu, and even international destinations. Travel fees vary by location.",
  },
  {
    question: "How soon can we see our photos and videos?",
    answer: "For weddings, we typically provide a 'Sneak Peek' within 48 hours. The full high-resolution gallery and edited cinematic films are delivered within 4-8 weeks depending on the package.",
  },
  {
    question: "Do you provide the raw or unedited files?",
    answer: "We take great pride in our signature editing style, which is part of the professional service you book. While we don't usually provide raw files, our final delivery includes a comprehensive collection of fully edited moments.",
  },
  {
    question: "What is your reservation and payment policy?",
    answer: "A non-refundable reservation fee is required to secure your date. The remaining balance is typically settled 2 weeks before the event or as agreed upon in our contract.",
  },
  {
    question: "Do you have backup equipment at events?",
    answer: "Yes! We always carry dual-camera setups and redundant backup systems for both photo and audio to ensure not a single moment is missed due to technical issues.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Column fillWidth gap="xl" vertical="center" paddingY="64">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="m">
          <Text variant="label-default-s" onBackground="brand-medium">
            COMMON INQUIRIES
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Frequently Asked Questions
          </Heading>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Column fillWidth gap="m" horizontal="center" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <Card
              key={index}
              fillWidth
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              direction="column"
              gap="12"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer", transition: "all 0.3s ease" }}
              className="faq-item"
            >
              <Row horizontal="between" vertical="center" fillWidth>
                <Heading as="h3" variant="heading-strong-s">
                  {faq.question}
                </Heading>
                <IconButton
                  icon={openIndex === index ? "chevronUp" : "chevronDown"}
                  variant="ghost"
                  size="s"
                />
              </Row>
              {openIndex === index && (
                <RevealFx translateY="4" speed="fast">
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {faq.answer}
                  </Text>
                </RevealFx>
              )}
            </Card>
          ))}
        </Column>
      </RevealFx>

      <style jsx global>{`
        .faq-item:hover {
          border-color: rgba(238, 175, 41, 0.3) !important;
          background: rgba(238, 175, 41, 0.05) !important;
        }
      `}</style>
    </Column>
  );
}
