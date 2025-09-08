"use client";
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";
import Login from "../Login/Login";
import Link from "next/link";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
    link: "/open-source",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
    link: "/free",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
    link: "/docs",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
    link: "/security",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
    link: "/analytics",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
    link: "/notifications",
  },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [loginOpened, { toggle: toggleLogin, close: closeLogin }] =
    useDisclosure(false);
  const [mobileFeaturesOpened, { toggle: toggleMobileFeatures }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          {/* Desktop navigation */}
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Home
            </Link>

            {/* Features dropdown */}
            <Menu
              trigger="hover"
              openDelay={100}
              closeDelay={200}
              shadow="md"
              width={300}
            >
              <Menu.Target>
                <UnstyledButton className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                {mockdata.map((item) => (
                  <Menu.Item
                    key={item.title}
                    component={Link}
                    href={item.link}
                    leftSection={
                      <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={theme.colors.blue[6]} />
                      </ThemeIcon>
                    }
                  >
                    <Text size="sm" fw={500}>
                      {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {item.description}
                    </Text>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            <Link href="/learn" className={classes.link}>
              Learn
            </Link>
            <Link href="/academy" className={classes.link}>
              Academy
            </Link>
          </Group>

          {/* Desktop auth buttons */}
          <Group visibleFrom="sm">
            <Button variant="default" onClick={toggleLogin}>
              Log in
            </Button>
            <Button >
             <Link href="/SingUp"> Sing Up</Link>
            </Button>
          </Group>

          {/* Mobile burger */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <Link href="/" className={classes.link}>
            Home
          </Link>

          {/* Features collapsible in mobile */}
          <UnstyledButton className={classes.link} onClick={toggleMobileFeatures}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                size={16}
                color={theme.colors.blue[6]}
                style={{
                  transform: mobileFeaturesOpened ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </Center>
          </UnstyledButton>

          <Collapse in={mobileFeaturesOpened}>
            {mockdata.map((item) => (
              <UnstyledButton
                className={classes.subLink}
                key={item.title}
                component={Link}
                href={item.link}
              >
                <Group wrap="nowrap" align="flex-start">
                  <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.colors.blue[6]} />
                  </ThemeIcon>
                  <div>
                    <Text size="sm" fw={500}>
                      {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {item.description}
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            ))}
          </Collapse>

          <Link href="/learn" className={classes.link}>
            Learn
          </Link>
          <Link href="/academy" className={classes.link}>
            Academy
          </Link>

          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={toggleLogin}>
              Log in
            </Button>
            <Link href="/SingUp"> 
              Sign up
            </Link>
            
          </Group>
        </ScrollArea>
      </Drawer>

      {/* Login drawer */}
      <Drawer
        opened={loginOpened}
        onClose={closeLogin}
        size="sm"
        padding="md"
        title="Log in"
        position="right"
        zIndex={2000}
      >
        <Login />
      </Drawer>
    </Box>
  );
}
