"use client";   import headerIcon from "../../public/headericon.svg";

import { Anchor, Container, Group } from '@mantine/core';
 import classes from './FooterSimple.module.css';
 import Image from 'next/image';

 const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <div className='flex  items-center justify-center'> <Image src={headerIcon} width="30" height="30" alt="logo"></Image><h1>F2F-Converter</h1></div>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}