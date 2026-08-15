import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const pillarProgressItems = [
  {
    name: "Communication",
    icon: "/figmaAssets/frame-104.svg",
    progressColor: "bg-[#29b765]",
    status: "Strong",
    statusClassName: "w-[92px] bg-[#e8f8ef] text-[#29b765]",
  },
  {
    name: "Leadership",
    icon: "/figmaAssets/frame-104-2.svg",
    progressColor: "bg-[#fdb915]",
    status: "Average",
    statusClassName: "w-[92px] bg-[#fff5dc] text-[#a36a00]",
  },
  {
    name: "Digital Skills",
    icon: "/figmaAssets/frame-104-3.svg",
    progressColor: "bg-[#0f7cf5]",
    status: "Needs work",
    statusClassName: "w-[92px] bg-[#ffeaf0] text-[#d43c6a]",
  },
  {
    name: "Problem Solving",
    icon: "/figmaAssets/frame-104-4.svg",
    progressColor: "bg-[#fe640a]",
    status: "Average",
    statusClassName: "w-[92px] bg-[#fff5dc] text-[#a36a00]",
  },
  {
    name: "Critical THinking",
    icon: "/figmaAssets/frame-104-1.svg",
    progressColor: "bg-[#7d5aeb]",
    status: "Strong",
    statusClassName: "w-[82px] bg-[#e8f8ef] text-[#29b765]",
  },
  {
    name: "Professionalism",
    icon: "/figmaAssets/frame-104-6.svg",
    progressColor: "bg-[#0dada7]",
    status: "Strong",
    statusClassName: "w-[82px] bg-[#e8f8ef] text-[#29b765]",
  },
  {
    name: "Adaptability",
    icon: "/figmaAssets/frame-104-5.svg",
    progressColor: "bg-[#ff3666]",
    status: "Average",
    statusClassName: "w-[92px] bg-[#fff5dc] text-[#a36a00]",
  },
];

export const PillarProgressListSection = (): JSX.Element => {
  return (
    <section
      className="flex w-full flex-col items-stretch gap-1"
      aria-label="Pillar progress"
    >
      {pillarProgressItems.map((pillar) => (
        <button
          key={pillar.name}
          type="button"
          className="group w-full rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`View ${pillar.name} progress`}
        >
          <Card className="min-h-[66px] rounded-lg border-[#e8e8f0] bg-white shadow-none transition-colors group-hover:bg-[#fcfcfe]">
            <CardContent className="flex min-h-[66px] items-center justify-between gap-4 p-2 px-4">
              <div className="flex min-w-0 flex-1 items-center gap-8">
                <img
                  className="h-[50px] w-[50px] shrink-0"
                  alt="Frame"
                  src={pillar.icon}
                />
                <div className="flex min-w-0 max-w-[746px] flex-1 flex-col gap-1">
                  <p className="[font-family:'Inter',Helvetica] text-[10px] font-normal leading-normal tracking-[0] text-[#17172a]">
                    {pillar.name}
                  </p>
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className="h-[7px] min-w-0 max-w-[704px] flex-1 overflow-hidden rounded-[99px] bg-[#e6e7ee]"
                      role="progressbar"
                      aria-label={`${pillar.name} progress`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={80}
                    >
                      <div
                        className={`h-[7px] w-[68.4659%] rounded-[99px] ${pillar.progressColor}`}
                      />
                    </div>
                    <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-normal tracking-[0] text-[#17172a]">
                      80%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-[7px]">
                <Badge
                  className={`flex h-8 shrink-0 items-center justify-center rounded-2xl border-0 px-2 [font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] shadow-none hover:bg-inherit ${pillar.statusClassName}`}
                >
                  {pillar.status}
                </Badge>
                <img
                  className="h-6 w-6"
                  alt=""
                  aria-hidden="true"
                  src="/figmaAssets/solar-alt-arrow-right-linear.svg"
                />
              </div>
            </CardContent>
          </Card>
        </button>
      ))}
    </section>
  );
};
