"use client";

import { Row, Column, Text, Heading, RevealFx } from "@once-ui-system/core";
import { useEffect, useState } from "react";

const stats = [
  { label: "Events Covered", value: 500, suffix: "+" },
  { label: "Happy Couples", value: 200, suffix: "+" },
  { label: "Professional Gear", value: 15, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 2000;
    const incrementTime = totalDuration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Heading variant="display-strong-m" onBackground="brand-strong">
      {count}{suffix}
    </Heading>
  );
}

export default function StatsSection() {
  return (
    <RevealFx translateY="16" fillWidth>
      <Row 
        fillWidth 
        paddingY="64" 
        gap="32" 
        wrap 
        horizontal="center"
        borderTop="neutral-alpha-weak"
        borderBottom="neutral-alpha-weak"
      >
        {stats.map((stat, index) => (
          <Column 
            key={index} 
            horizontal="center" 
            gap="8" 
            style={{ flex: "1 1 200px" }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <Text variant="label-default-s" onBackground="neutral-weak">
              {stat.label.toUpperCase()}
            </Text>
          </Column>
        ))}
      </Row>
    </RevealFx>
  );
}
