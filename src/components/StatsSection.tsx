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
      <Column 
        fillWidth 
        paddingY="64" 
        paddingX="32"
        gap="32" 
        radius="xl"
        background="surface"
        border="neutral-alpha-weak"
        horizontal="center"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Row 
          fillWidth 
          gap="32" 
          wrap 
          horizontal="center"
        >
          {stats.map((stat, index) => (
            <Column 
              key={index} 
              horizontal="center" 
              gap="12" 
              style={{ flex: "1 1 180px", minWidth: '150px' }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <Text variant="label-default-s" onBackground="brand-medium" style={{ letterSpacing: '0.1em' }}>
                {stat.label.toUpperCase()}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
    </RevealFx>
  );
}
