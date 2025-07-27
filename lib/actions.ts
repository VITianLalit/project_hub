"use server";

import { signIn, signOut } from "@/auth";

export async function handleGitHubSignIn() {
  await signIn("github");
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}
