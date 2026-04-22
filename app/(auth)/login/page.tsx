import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div>
      Login<Link href="/register">Sign up</Link>
    </div>
  );
}
