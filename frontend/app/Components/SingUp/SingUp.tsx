"use client";
import {
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../GoogleButton";
import { TwitterButton } from "../TwitterButton";

export default function SignUp(props: PaperProps) {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: false,
    },

    validate: {
      name: (val) => (val.trim().length < 2 ? "Name is too short" : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email format"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null,
      terms: (val) => (!val ? "You must accept terms and conditions" : null),
    },
  });

  return (
    <Paper
      radius="lg"
      p="xl"
      withBorder
      
      {...props}
      style={{
        background: "white", // white background
      }}
    >
      <Text size="xl" fw={700} ta="center"  c="gray" mb="md">
        Welcome to F2F Converter
      </Text>

      <Divider label="Sign up with Email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            label="Full Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name}
            radius="md"
            required
          />

          <TextInput
            required
            label="Email"
            placeholder="hello@example.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Enter a strong password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password}
            radius="md"
          />

          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
            error={form.errors.terms}
          />
        </Stack>

        {/* Main Sign Up button (blue) */}
        <Button fullWidth mt="xl" radius="xl" color="blue">
          Sign Up
        </Button>
      </form>

      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Group grow mt="md">
        <GoogleButton radius="xl" />
        <TwitterButton radius="xl" />
      </Group>
    </Paper>
  );
}
