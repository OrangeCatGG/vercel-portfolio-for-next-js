import { 
  Column, 
  Heading, 
  Meta, 
  Schema, 
  Text, 
  Card, 
  Grid, 
  Row, 
  Icon, 
  Button,
  RevealFx,
  Badge,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const photographyServices = [
  {
    name: "Photo Coverage",
    description: "Complete event documentation with professional photographers capturing every precious moment.",
    icon: "camera",
  },
  {
    name: "Pictorial",
    description: "Studio or location portrait sessions for individuals, couples, families, and groups.",
    icon: "person",
  },
  {
    name: "Class Picture",
    description: "Professional class photos with individual and group shots for schools and organizations.",
    icon: "grid",
  },
  {
    name: "Graduation Picture",
    description: "Commemorate your academic achievement with elegant graduation portraits.",
    icon: "book",
  },
];

const videographyServices = [
  {
    name: "Video Coverage",
    description: "Full event videography capturing the complete story of your special day.",
    icon: "play",
  },
  {
    name: "Same Day Edit (SDE)",
    description: "A highlight video edited and presented during your event for guests to enjoy.",
    icon: "sparkle",
  },
  {
    name: "Save the Date",
    description: "Creative pre-event videos to announce and invite guests to your celebration.",
    icon: "calendar",
  },
  {
    name: "AVP (Audio Visual Presentation)",
    description: "Cinematic presentations perfect for debuts, weddings, and corporate events.",
    icon: "monitor",
  },
];

const eventAddons = [
  {
    name: "Photobooth",
    description: "Interactive photo booth setup with props and instant prints for your guests.",
    icon: "grid",
  },
  {
    name: "Projector",
    description: "High-quality projector rental for presentations and video screenings.",
    icon: "monitor",
  },
  {
    name: "Mobile Sound System",
    description: "Professional audio equipment for events of all sizes.",
    icon: "volume",
  },
  {
    name: "Onsite Editing",
    description: "Real-time photo editing and printing during your event.",
    icon: "edit",
  },
];

const productServices = [
  {
    name: "Albums",
    description: "Beautifully designed photo albums to preserve your memories.",
    icon: "book",
  },
  {
    name: "Frames",
    description: "Quality framing for your favorite photographs.",
    icon: "image",
  },
  {
    name: "Layouting",
    description: "Professional layout design for invitations, tarpaulins, and more.",
    icon: "grid",
  },
  {
    name: "Tarpaulin",
    description: "Custom printed tarpaulins for events and occasions.",
    icon: "image",
  },
  {
    name: "PVC ID",
    description: "Professional PVC ID cards with photo and custom design.",
    icon: "person",
  },
];

const ServiceCategory = ({ 
  title, 
  subtitle, 
  services, 
  delay = 0 
}: { 
  title: string; 
  subtitle: string; 
  services: typeof photographyServices; 
  delay?: number;
}) => (
  <Column fillWidth gap="l">
    <RevealFx translateY="8" delay={delay}>
      <Column gap="8">
        <Text variant="label-default-s" onBackground="brand-medium">{subtitle}</Text>
        <Heading as="h2" variant="display-strong-s">{title}</Heading>
      </Column>
    </RevealFx>
    
    <RevealFx translateY="16" delay={delay + 0.1}>
      <Grid columns="repeat(2, 1fr)" gap="16" s={{ columns: "1fr" }}>
        {services.map((service, index) => (
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
                <Icon name={service.icon as any} size="m" onBackground="brand-strong" />
              </Row>
              <Text variant="heading-strong-m">{service.name}</Text>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {service.description}
            </Text>
          </Card>
        ))}
      </Grid>
    </RevealFx>
  </Column>
);

export default function Work() {
  return (
    <Column maxWidth="m" paddingY="24" gap="80">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
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
            Professional Services
          </Badge>
          <Heading variant="display-strong-l" align="center">
            Our Services
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "600px" }}>
            Comprehensive photography and videography solutions for all your special occasions. 
            Quality work, professional equipment, and dedicated service.
          </Text>
        </Column>
      </RevealFx>

      {/* Photography Services */}
      <ServiceCategory 
        title="Photography Services" 
        subtitle="CAPTURE EVERY MOMENT"
        services={photographyServices}
        delay={0}
      />

      {/* Videography Services */}
      <ServiceCategory 
        title="Videography Services" 
        subtitle="TELL YOUR STORY"
        services={videographyServices}
        delay={0.1}
      />

      {/* Event Add-ons */}
      <ServiceCategory 
        title="Event Add-ons" 
        subtitle="ENHANCE YOUR EVENT"
        services={eventAddons}
        delay={0.2}
      />

      {/* Products & Printing */}
      <ServiceCategory 
        title="Products & Printing" 
        subtitle="PRESERVE YOUR MEMORIES"
        services={productServices}
        delay={0.3}
      />

      {/* Promo Banner */}
      <RevealFx translateY="8" delay={0.4}>
        <Card
          fillWidth
          padding="48"
          radius="xl"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          direction="column"
          gap="20"
          horizontal="center"
          align="center"
        >
          <Badge
            background="brand-medium"
            paddingX="16"
            paddingY="8"
            textVariant="label-strong-s"
          >
            Special Offer
          </Badge>
          <Heading as="h2" variant="display-strong-m" align="center">
            FREE PICTORIAL
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Book any of our event packages and get a complimentary pictorial session!
          </Text>
          <Button
            href="/contact"
            variant="primary"
            size="l"
            arrowIcon
          >
            Inquire Now
          </Button>
        </Card>
      </RevealFx>

      {/* CTA */}
      <RevealFx translateY="8" delay={0.5}>
        <Column horizontal="center" gap="m">
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Need a custom package? Contact us to discuss your specific requirements.
          </Text>
          <Row gap="16" wrap horizontal="center">
            <Button
              href="/contact"
              variant="secondary"
              size="m"
              prefixIcon="email"
            >
              Get a Quote
            </Button>
            <Button
              href="tel:+639488895424"
              variant="ghost"
              size="m"
              prefixIcon="phone"
            >
              Call Us: 0948 889 5424
            </Button>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
