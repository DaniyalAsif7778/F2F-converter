"use client";

 
import { Container, SimpleGrid, Text, ThemeIcon,   } from '@mantine/core';
import classes from './Features.module.css';

import {
    IconFileText,
    IconBolt,
    IconCloud,
    IconSettings,
    IconShieldLock,
    IconDevices,
  } from '@tabler/icons-react';
  
  export const MOCKDATA = [
    {
      icon: IconFileText,
      title: '300+ formats supported',
      description:
        'We support more than 25,600 different conversions between more than 300 different file formats. More than any other converter.',
    },
    {
      icon: IconBolt,
      title: 'Fast and easy',
      description:
        'Just drop your files on the page, choose an output format and click "Convert" button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.',
    },
    {
      icon: IconCloud,
      title: 'In the cloud',
      description:
        'All conversions take place in the cloud and will not consume any capacity from your computer.',
    },
    {
      icon: IconSettings,
      title: 'Custom settings',
      description:
        'Most conversion types support advanced options. For example, with a video converter you can choose quality, aspect ratio, codec and other settings, rotate and flip.',
    },
    {
      icon: IconShieldLock,
      title: 'Security guaranteed',
      description:
        'We delete uploaded files instantly and converted ones after 24 hours. No one has access to your files and privacy is 100% guaranteed.',
    },
    {
      icon: IconDevices,
      title: 'All devices supported',
      description:
        'Convertio is browser-based and works for all platforms. There is no need to download and install any software.',
    },
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
      <ThemeIcon variant="filled" color="white"  size={40} radius={40}>
        <Icon size={32} stroke={1.5} color="#e03131"  />
      </ThemeIcon>
      <Text mt="sm" mb={7}>{title}</Text>
      <Text size="sm" c="dimmed" lh={1.6}>{description}</Text>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <Container className={classes.wrapper}>
      
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
