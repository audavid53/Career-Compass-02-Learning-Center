import { AwardIcon, Clock3Icon, HeartIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = [
  { label: "My Progress", icon: Clock3Icon },
  { label: "Challenges", icon: StarIcon },
  { label: "Achievements", icon: AwardIcon },
  { label: "Saved", icon: HeartIcon },
];

export const CareerDashboardSidebarSection = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState("My Progress");

  return (
    <aside
      aria-label="Career dashboard navigation"
      className="flex min-h-screen w-full max-w-[230px] flex-col bg-[#1c1e26] px-5 pt-[39px] pb-2 [font-family:'Inter',Helvetica]"
    >
      <header className="flex items-center gap-2">
        <h1 className="text-lg font-bold leading-none tracking-[0] text-white">
          CareerEdge
        </h1>
        <span
          aria-label="CareerEdge"
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5525e8] text-[7px] font-bold leading-none text-white"
        >
          CE
        </span>
      </header>
      <nav className="mt-[67px]" aria-label="Dashboard sections">
        <ul className="flex flex-col gap-2.5">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.label;

            return (
              <li key={item.label}>
                <Button
                  type="button"
                  variant="ghost"
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveSection(item.label)}
                  className="h-auto w-full justify-start gap-2 rounded-none px-4 py-3 text-xs font-medium leading-none text-white hover:bg-white/5 hover:text-white focus-visible:ring-[#5525e8]"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                  />
                  <span>{item.label}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Card className="mt-auto w-full rounded-lg border border-[#ffffff1a] bg-[#1f1f1f] text-white shadow-none">
        <CardContent className="flex flex-col items-center gap-4 px-[18px] py-4">
          <section
            className="flex w-full flex-col items-center gap-2"
            aria-label="Profile"
          >
            <div className="flex flex-col items-center gap-[13px]">
              <div className="relative h-16 w-16">
                <div className="h-[67px] w-[67px] -translate-x-0.5 -translate-y-px rounded-full border-[1.42px] border-[#5525e8] bg-[url('/figmaAssets/frame-180.png')] bg-cover bg-center" />
                <span
                  aria-label="Online"
                  className="absolute bottom-0 right-0 h-[9px] w-[9px] rounded-full border-[0.71px] border-white bg-[#29b765]"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <h2 className="text-base font-bold leading-none tracking-[0] text-white">
                  Mary Sokoh
                </h2>
                <p className="text-xs font-normal leading-none tracking-[0] text-[#73758a]">
                  Aspiring Product Designer
                </p>
              </div>
            </div>
            <Badge className="gap-1 rounded-2xl border-0 bg-[#5525e8] px-2 py-1 text-[8px] font-normal leading-none text-white hover:bg-[#5525e8]">
              <img
                className="h-3 w-3"
                alt=""
                aria-hidden="true"
                src="/figmaAssets/mag-right.svg"
              />
              Explorer
            </Badge>
          </section>
          <section
            className="flex w-full flex-col gap-2"
            aria-label="Career progression"
          >
            <div className="flex h-[87px] flex-col justify-center rounded border-[0.4px] border-[#ffffff14] bg-[#1f1f1f] px-2 pt-3 pb-[11px]">
              <p className="text-[10px] font-normal leading-none tracking-[0] text-white">
                Level 4
              </p>
              <strong className="mt-1 text-sm font-bold leading-none tracking-[0] text-white">
                2,450 XP
              </strong>
              <div
                className="mt-1 h-1.5 w-full overflow-hidden rounded-[99px] bg-white"
                role="progressbar"
                aria-label="Experience progress"
                aria-valuemin={0}
                aria-valuemax={3000}
                aria-valuenow={2450}
              >
                <div className="h-full w-[61px] rounded-l-[99px] bg-[#5525e8]" />
              </div>
              <p className="mt-1 text-[10px] font-normal leading-none tracking-[0] text-[#c8c8c8]">
                Next Level : 3,000 XP
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="h-auto w-full justify-between rounded border-[0.4px] border-[#ffffff14] bg-[#1f1f1f] p-2 text-white hover:bg-[#272727] hover:text-white focus-visible:ring-[#5525e8]"
            >
              <span className="flex items-center gap-2">
                <img
                  className="h-3 w-3"
                  alt=""
                  aria-hidden="true"
                  src="/figmaAssets/world-map.svg"
                />
                <span className="text-[8px] font-normal leading-none tracking-[0]">
                  Next Badge: <strong className="font-bold">Pathfinder</strong>
                </span>
              </span>
              <img
                className="h-3 w-3"
                alt=""
                aria-hidden="true"
                src="/figmaAssets/solar-alt-arrow-right-linear.svg"
              />
            </Button>
          </section>
        </CardContent>
      </Card>
    </aside>
  );
};
