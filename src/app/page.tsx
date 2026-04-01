import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Icon,
  Media,
  Card,
  Grid,
} from "@once-ui-system/core";
import { home, about, person, baseURL, gallery } from "@/resources";
import Link from "next/link";
import InstagramGrid from "@/components/InstagramGrid";
import FeaturedFilms from "@/components/FeaturedFilms";
import BookingTimeline from "@/components/BookingTimeline";
import HomeGallery from "@/components/HomeGallery";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import MeetThePhotographer from "@/components/MeetThePhotographer";
import TestimonialSlider from "@/components/TestimonialSlider";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const services = [
  { name: "Photo & Video Coverage", icon: "camera" },
  { name: "Photobooth", icon: "grid" },
  { name: "Same Day Edit (SDE)", icon: "play" },
  { name: "Save the Date / AVP", icon: "heart" },
  { name: "Albums & Frames", icon: "book" },
  { name: "Onsite Editing", icon: "edit" },
  { name: "Pictorial", icon: "person" },
  { name: "Mobile Sound System", icon: "volume" },
];

const events = [
  "Wedding",
  "Baptismal",
  "Birthday",
  "Debut / Pre-Debut",
  "Reunion",
  "Modelling",
  "Corporate Events",
  "Any Occasion",
];


export default function Home() {
  return (
    <Column maxWidth="l" gap="104" paddingY="0" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="l" style={{ minHeight: "80vh" }} vertical="center">
        <Column maxWidth="m" horizontal="center" align="center" gap="m">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingBottom="16">
              <Badge
                background="brand-alpha-weak"
                paddingX="16"
                paddingY="8"
                onBackground="brand-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2" gap="8" vertical="center">
                  <Icon name="sparkle" size="s" />
                  {home.featured.title}
                </Row>
              </Badge>
            </RevealFx>
          )}
          
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-xl" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingTop="8">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          
          <RevealFx delay={0.4} horizontal="center" paddingTop="24">
            <Row gap="16" wrap horizontal="center">
              <Button
                id="gallery"
                data-border="rounded"
                href="/gallery"
                variant="primary"
                size="l"
                arrowIcon
              >
                View Gallery
              </Button>
              <Button
                id="contact"
                data-border="rounded"
                href="/contact"
                variant="secondary"
                size="l"
              >
                Book Now
              </Button>
            </Row>
          </RevealFx>
        </Column>
        
        {/* Hero Image */}
        <RevealFx translateY="16" delay={0.6} fillWidth paddingTop="48">
          <Row fillWidth radius="l" overflow="hidden" style={{ aspectRatio: "21/9" }}>
            <Media
              src="/images/hero-wedding.jpg"
              alt="Wedding photography by Angeloramos Photography"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Row>
        </RevealFx>
      </Column>

      {/* Meet The Photographer Section */}
      <MeetThePhotographer />

      {/* Services Section */}
      <Column fillWidth gap="l" id="services">
        <RevealFx translateY="8" fillWidth>
          <Column fillWidth horizontal="center" gap="m">
            <Text variant="label-default-s" onBackground="brand-medium">OUR SERVICES</Text>
            <Heading as="h2" variant="display-strong-m" align="center">
              Complete Photography Solutions
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "600px" }}>
              From intimate portraits to grand celebrations, we offer comprehensive 
              photography and videography services tailored to your needs.
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="16" delay={0.2}>
          <Grid columns="4" gap="16" s={{ columns: "2" }}>
            {services.map((service, index) => (
              <Card
                key={index}
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                direction="column"
                gap="12"
                horizontal="center"
                align="center"
              >
                <Row 
                  padding="12" 
                  radius="full" 
                  background="brand-alpha-weak"
                >
                  <Icon name={service.icon as any} size="l" onBackground="brand-strong" />
                </Row>
                <Text variant="body-strong-m" align="center">{service.name}</Text>
              </Card>
            ))}
          </Grid>
        </RevealFx>
        
        <RevealFx delay={0.4} horizontal="center">
          <Button
            href="/work"
            variant="secondary"
            size="m"
            arrowIcon
          >
            View All Services
          </Button>
        </RevealFx>
      </Column>

      {/* Booking Timeline Section */}
      <BookingTimeline />

      {/* Events Covered Section */}
      <Column fillWidth gap="l">
        <RevealFx translateY="8">
          <Column horizontal="center" gap="m">
            <Text variant="label-default-s" onBackground="brand-medium">EVENTS WE COVER</Text>
            <Heading as="h2" variant="display-strong-m" align="center">
              Every Celebration Matters
            </Heading>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="16" delay={0.2}>
          <Row wrap gap="12" horizontal="center">
            {events.map((event, index) => (
              <Badge
                key={index}
                background="surface"
                border="neutral-alpha-medium"
                paddingX="20"
                paddingY="12"
                textVariant="body-default-m"
              >
                {event}
              </Badge>
            ))}
          </Row>
        </RevealFx>
      </Column>

      {/* Gallery Preview */}
      <HomeGallery />

      {/* Testimonials Section */}

      {/* Featured Films Section */}
      <FeaturedFilms />

      {/* Testimonials Slider Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <RevealFx translateY="8">
        <Card
          fillWidth
          padding="64"
          radius="xl"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          direction="column"
          gap="24"
          horizontal="center"
          align="center"
        >
          <Heading as="h2" variant="display-strong-m" align="center">
            Ready to Capture Your Special Moments?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "500px" }}>
            Contact us today to discuss your event and receive a personalized quote. 
            Let us help you preserve your precious memories.
          </Text>
          <Row gap="16" wrap horizontal="center" paddingTop="8">
            <Button
              href="/contact"
              variant="primary"
              size="l"
              arrowIcon
            >
              Get in Touch
            </Button>
            <Button
              href="https://www.instagram.com/angeloramosph/"
              variant="secondary"
              size="l"
              prefixIcon="instagram"
            >
              Follow Us
            </Button>
          </Row>
        </Card>
      </RevealFx>

      {/* Equipment Showcase Section */}
      <EquipmentShowcase />

      {/* Instagram Grid Preview */}
      <InstagramGrid />

      {/* Contact Info */}
      <Column fillWidth gap="m" horizontal="center" paddingBottom="48">
        <Row gap="32" wrap horizontal="center" s={{ direction: "column", horizontal: "center" }}>
          <Row gap="12" vertical="center">
            <Icon name="email" onBackground="brand-medium" />
            <Link href="mailto:marisagojocruz06@yahoo.com.ph">
              <Text variant="body-default-m" onBackground="neutral-weak">marisagojocruz06@yahoo.com.ph</Text>
            </Link>
          </Row>
          <Row gap="12" vertical="center">
            <Icon name="phone" onBackground="brand-medium" />
            <Link href="tel:+639488895424">
              <Text variant="body-default-m" onBackground="neutral-weak">0948 889 5424</Text>
            </Link>
          </Row>
          <Row gap="12" vertical="center">
            <Icon name="instagram" onBackground="brand-medium" />
            <Link href="https://www.instagram.com/angeloramosph/" target="_blank">
              <Text variant="body-default-m" onBackground="neutral-weak">@angeloramosph</Text>
            </Link>
          </Row>
          <Row gap="12" vertical="center">
            <Icon name="facebook" onBackground="brand-medium" />
            <Link href="https://www.facebook.com/angeloramos.photography" target="_blank">
              <Text variant="body-default-m" onBackground="neutral-weak">angeloramos.photography</Text>
            </Link>
          </Row>
        </Row>
      </Column>
    </Column>
  );
}
