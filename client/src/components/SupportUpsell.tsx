import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRAND } from "@/components/brand/LogoIcons";
import { Link } from "wouter";
import { MessageCircle, ArrowRight } from "lucide-react";
import { config } from "@/lib/config";

export function SupportUpsell() {
  return (
    <Card 
      className="border-2 overflow-hidden rounded-2xl"
      style={{ 
        backgroundColor: BRAND.sky, 
        borderColor: BRAND.blue 
      }}
      data-testid="card-support-upsell"
    >
      <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: BRAND.navy }}>
            🎓 AI ব্যবহার শিখতে চান? Premium Support নিন
          </h2>
          <p className="text-lg" style={{ color: BRAND.navy, opacity: 0.8 }}>
            লাইভ Google Meet সেশনে আপনার কাজ অনুযায়ী কাস্টম prompt pack + workflow পান। ৳৭৯৯/ঘন্টা থেকে শুরু।
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
          <Button 
            className="w-full sm:w-auto gap-2 rounded-full"
            size="lg"
            asChild
            style={{ backgroundColor: BRAND.blue, color: BRAND.white }}
            data-testid="button-book-support"
          >
            <a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              সাপোর্ট বুক করুন
            </a>
          </Button>
          <Button 
            variant="outline"
            className="w-full sm:w-auto gap-2 rounded-full"
            size="lg"
            asChild
            style={{ borderColor: BRAND.blue, color: BRAND.blue }}
            data-testid="link-support-details"
          >
            <Link href="/support">
              বিস্তারিত দেখুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
