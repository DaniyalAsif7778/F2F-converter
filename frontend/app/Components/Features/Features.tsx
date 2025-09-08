"use client";

import { IconCookie, IconGauge, IconLock, IconMessage, IconUser } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Features.module.css';

export const MOCKDATA = [
  { icon: IconGauge, title: 'Extreme performance', description: 'This dust is actually a powerful poison...' },
  { icon: IconUser, title: 'Privacy focused', description: 'People say it can run at the same speed as lightning...' },
  { icon: IconCookie, title: 'No third parties', description: 'They’re popular, but they’re rare...' },
  { icon: IconLock, title: 'Secure by default', description: 'Although it still can’t fly, its jumping power...' },
  { icon: IconMessage, title: '24/7 Support', description: 'Rapidash usually can be seen casually cantering...' },
];

interface FeatureProps {
  icon: React.FC<{ size?: number; stroke?: number; color?: string }>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  if (!Icon) return null; // prevents crash if icon is missing

  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={24} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>{title}</Text>
      <Text size="sm" c="dimmed" lh={1.6}>{description}</Text>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>
        Integrate effortlessly with any technology stack
      </Title>
      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>
      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {MOCKDATA.map((feature, index) => (
          <Feature {...feature} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
