"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    // .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters.")
    .min(1, "Password is required"),
});

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form Data: ", data);
  }

  return (
    <Card className="w-full sm:max-w-3/5 text-white bg-transparent border-none">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-4xl">Sign In</CardTitle>

        <CardDescription className="text-neutral-300">
          Enter your data to sign in your account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">
                    Email Adress
                  </FieldLabel>

                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                    className="bg-white/10 border-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-password">
                    Password
                  </FieldLabel>

                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    placeholder="Enter your password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    className="bg-white/10 border-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="submit"
            form="form-rhf-demo"
            className="w-full bg-brand-teal hover:bg-brand-navy cursor-pointer"
          >
            Sign in
          </Button>
        </Field>
      </CardFooter>

      <div className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brand-teal hover:underline">
          Sign up
        </Link>
      </div>
    </Card>
  );
}

export default LoginForm;
