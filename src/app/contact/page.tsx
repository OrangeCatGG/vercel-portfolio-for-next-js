"use client";

import { 
  Column, 
  Heading, 
  Text, 
  Card, 
  Row, 
  Icon, 
  Button,
  RevealFx,
  Badge,
  Input,
  Textarea,
} from "@once-ui-system/core";
import { person } from "@/resources";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: "email",
    label: "Email",
    value: "marisagojocruz06@yahoo.com.ph",
    href: "mailto:marisagojocruz06@yahoo.com.ph",
  },
  {
    icon: "openLink",
    label: "Phone",
    value: "0948 889 5424",
    href: "tel:+639488895424",
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: "@angeloramos_photography",
    href: "https://instagram.com/angeloramos_photography",
  },
];

const eventTypes = [
  "Wedding",
  "Debut / Pre-Debut",
  "Birthday",
  "Baptismal",
  "Corporate Event",
  "Reunion",
  "Modelling",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would send this to an API
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <Column maxWidth="s" paddingY="80" gap="32" horizontal="center" align="center">
        <RevealFx translateY="8">
          <Row 
            padding="24" 
            radius="full" 
            background="brand-alpha-weak"
          >
            <Icon name="check" size="xl" onBackground="brand-strong" />
          </Row>
        </RevealFx>
        <RevealFx translateY="8" delay={0.1}>
          <Column gap="16" horizontal="center">
            <Heading variant="display-strong-m" align="center">
              Thank You!
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              We&apos;ve received your inquiry and will get back to you within 24 hours.
            </Text>
          </Column>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2}>
          <Row gap="16">
            <Button href="/" variant="secondary" size="m">
              Back to Home
            </Button>
            <Button href="/gallery" variant="primary" size="m">
              View Gallery
            </Button>
          </Row>
        </RevealFx>
      </Column>
    );
  }

  return (
    <Column maxWidth="l" paddingY="24" gap="64">
      {/* Header */}
      <RevealFx translateY="4">
        <Column horizontal="center" gap="m">
          <Badge
            background="brand-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="brand-strong"
            textVariant="label-default-s"
          >
            Get in Touch
          </Badge>
          <Heading variant="display-strong-l" align="center">
            Contact Us
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "600px" }}>
            Ready to capture your special moments? Send us a message and we&apos;ll 
            get back to you with a personalized quote.
          </Text>
        </Column>
      </RevealFx>

      <Row gap="48" fillWidth s={{ direction: "column" }}>
        {/* Contact Form */}
        <RevealFx translateY="16" delay={0.1} flex={3}>
          <Card
            fillWidth
            padding="32"
            radius="xl"
            background="surface"
            border="neutral-alpha-weak"
          >
            <form onSubmit={handleSubmit}>
              <Column gap="24">
                <Heading as="h2" variant="heading-strong-l">
                  Send Us a Message
                </Heading>
                
                <Row gap="16" fillWidth s={{ direction: "column" }}>
                  <Column flex={1} gap="8">
                    <Text variant="label-default-s">Your Name *</Text>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Juan Dela Cruz"
                      required
                    />
                  </Column>
                  <Column flex={1} gap="8">
                    <Text variant="label-default-s">Email Address *</Text>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </Column>
                </Row>

                <Row gap="16" fillWidth s={{ direction: "column" }}>
                  <Column flex={1} gap="8">
                    <Text variant="label-default-s">Phone Number</Text>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="09XX XXX XXXX"
                    />
                  </Column>
                  <Column flex={1} gap="8">
                    <Text variant="label-default-s">Event Date</Text>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange("eventDate", e.target.value)}
                    />
                  </Column>
                </Row>

                <Column gap="8">
                  <Text variant="label-default-s">Event Type</Text>
                  <Row wrap gap="8">
                    {eventTypes.map((type) => (
                      <Badge
                        key={type}
                        background={formData.eventType === type ? "brand-medium" : "surface"}
                        border={formData.eventType === type ? "brand-medium" : "neutral-alpha-medium"}
                        paddingX="16"
                        paddingY="8"
                        textVariant="body-default-s"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleChange("eventType", type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </Row>
                </Column>

                <Column gap="8">
                  <Text variant="label-default-s">Your Message *</Text>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your event, expected number of guests, and any specific requirements..."
                    rows={5}
                    required
                  />
                </Column>

                <Button
                  type="submit"
                  variant="primary"
                  size="l"
                  fillWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Column>
            </form>
          </Card>
        </RevealFx>

        {/* Contact Info Sidebar */}
        <RevealFx translateY="16" delay={0.2} flex={2}>
          <Column gap="32" fillWidth>
            <Card
              fillWidth
              padding="32"
              radius="xl"
              background="surface"
              border="neutral-alpha-weak"
              direction="column"
              gap="24"
            >
              <Heading as="h2" variant="heading-strong-l">
                Contact Information
              </Heading>
              
              <Column gap="20">
                {contactInfo.map((info, index) => (
                  <Link key={index} href={info.href} target={info.icon === "instagram" ? "_blank" : undefined}>
                    <Row gap="16" vertical="center">
                      <Row 
                        padding="12" 
                        radius="m" 
                        background="brand-alpha-weak"
                      >
                        <Icon name={info.icon as any} size="m" onBackground="brand-strong" />
                      </Row>
                      <Column gap="2">
                        <Text variant="label-default-s" onBackground="neutral-weak">{info.label}</Text>
                        <Text variant="body-default-m">{info.value}</Text>
                      </Column>
                    </Row>
                  </Link>
                ))}
              </Column>
            </Card>

            <Card
              fillWidth
              padding="32"
              radius="xl"
              background="brand-alpha-weak"
              border="brand-alpha-medium"
              direction="column"
              gap="16"
            >
              <Row gap="12" vertical="center">
                <Icon name="sparkle" size="m" onBackground="brand-strong" />
                <Text variant="heading-strong-m">FREE PICTORIAL</Text>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Book any event package and receive a complimentary pictorial session!
              </Text>
            </Card>

            <Card
              fillWidth
              padding="32"
              radius="xl"
              background="surface"
              border="neutral-alpha-weak"
              direction="column"
              gap="16"
            >
              <Heading as="h3" variant="heading-strong-m">
                Quick Response
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                We typically respond within 24 hours. For urgent inquiries, 
                please call us directly.
              </Text>
              <Button
                href="tel:+639488895424"
                variant="secondary"
                size="m"
                prefixIcon="openLink"
                fillWidth
              >
                Call Now
              </Button>
            </Card>
          </Column>
        </RevealFx>
      </Row>

      {/* Instagram CTA */}
      <RevealFx translateY="8" delay={0.3}>
        <Card
          fillWidth
          padding="48"
          radius="xl"
          background="surface"
          border="neutral-alpha-weak"
          direction="column"
          gap="20"
          horizontal="center"
          align="center"
        >
          <Icon name="instagram" size="xl" onBackground="brand-strong" />
          <Heading as="h2" variant="heading-strong-l" align="center">
            Follow Us on Instagram
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            See our latest work and behind-the-scenes moments
          </Text>
          <Button
            href="https://instagram.com/angeloramos_photography"
            variant="primary"
            size="l"
            prefixIcon="instagram"
          >
            @angeloramos_photography
          </Button>
        </Card>
      </RevealFx>
    </Column>
  );
}
