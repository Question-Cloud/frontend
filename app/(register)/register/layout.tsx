import { GuestGuard } from "@/providers";
import React from "react";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <GuestGuard>{children}</GuestGuard>;
}
