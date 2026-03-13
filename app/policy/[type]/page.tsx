import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  TERMS_OF_SERVICE,
  PRIVACY_POLICY,
  LIABILITY_WAIVER,
} from "@/lib/legal-policies";
import type { Metadata } from "next";

const POLICIES: Record<string, { title: string; content: string }> = {
  terms: { title: "Terms of Service", content: TERMS_OF_SERVICE },
  privacy: { title: "Privacy Policy", content: PRIVACY_POLICY },
  waiver: { title: "Liability Waiver and Release", content: LIABILITY_WAIVER },
};

export async function generateStaticParams() {
  return Object.keys(POLICIES).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const policy = POLICIES[type];
  if (!policy) return {};
  return {
    title: policy.title,
    description: `${policy.title} for GolfLabs golf simulator facilities.`,
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const policy = POLICIES[type];

  if (!policy) {
    notFound();
  }

  const paragraphs = policy.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="w-full z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              <span className="text-primary">GOLF</span>
              <span className="text-foreground">LABS</span>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{policy.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm leading-relaxed">
                {paragraphs.map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  const isHeader =
                    /^[A-Z\s&]+$/.test(trimmed) || /^\d+\.\s+[A-Z]/.test(trimmed);
                  const isSubItem =
                    /^\([a-z]\)/.test(trimmed) || /^\d+\.\d+\./.test(trimmed);

                  if (isHeader && trimmed.length < 80) {
                    return (
                      <h3
                        key={index}
                        className="font-semibold text-foreground text-base pt-3"
                      >
                        {trimmed}
                      </h3>
                    );
                  }

                  if (isSubItem) {
                    return (
                      <p key={index} className="pl-4 text-muted-foreground">
                        {trimmed}
                      </p>
                    );
                  }

                  if (trimmed === trimmed.toUpperCase() && trimmed.length > 80) {
                    return (
                      <p key={index} className="font-medium text-foreground text-sm">
                        {trimmed}
                      </p>
                    );
                  }

                  return (
                    <p key={index} className="text-muted-foreground">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
