import { Row, IconButton, SmartLink, Text, Column, Icon } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" borderTop="neutral-alpha-weak" s={{ direction: "column" }}>
      <Column
        className={styles.mobile}
        maxWidth="m"
        paddingY="24"
        paddingX="16"
        gap="24"
        horizontal="center"
      >
        {/* Contact Info */}
        <Row gap="24" wrap horizontal="center" s={{ direction: "column", horizontal: "center" }}>
          <Link href="mailto:marisagojocruz06@yahoo.com.ph">
            <Row gap="8" vertical="center">
              <Icon name="email" size="s" onBackground="neutral-weak" />
              <Text variant="body-default-s" onBackground="neutral-weak">marisagojocruz06@yahoo.com.ph</Text>
            </Row>
          </Link>
          <Link href="tel:+639488895424">
            <Row gap="8" vertical="center">
              <Icon name="phone" size="s" onBackground="neutral-weak" />
              <Text variant="body-default-s" onBackground="neutral-weak">0948 889 5424</Text>
            </Row>
          </Link>
        </Row>

        {/* Social Icons */}
        <Row gap="16" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>

        {/* Copyright */}
        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
          <Text onBackground="neutral-weak">© {currentYear}</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">| All Rights Reserved</Text>
        </Text>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
