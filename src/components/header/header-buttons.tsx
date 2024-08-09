import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { ThemeToggle } from "@/components/header/theme/theme-toggle";
import ReportButton from "@/components/header/report/report-button";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeaderButtons() {
  return (
    <div className="m-4 flex justify-end">
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <ReportButton />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};
