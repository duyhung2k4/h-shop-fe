"use client"

import BoxLogin from "@/components/BoxLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Page() {
  return (
    <GoogleOAuthProvider
      clientId="75914166479-lmc0brsq2mm7tmq0n7ddui3hn30jh5nf.apps.googleusercontent.com"
    >
      <BoxLogin/>
    </GoogleOAuthProvider>
  )
}