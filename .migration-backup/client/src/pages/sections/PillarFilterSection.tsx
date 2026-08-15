import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const pillarFilters = [
  {
    value: "all",
    label: "All",
    className:
      "w-[78px] bg-[#5525e8] text-white hover:bg-[#5525e8] hover:text-white data-[state=on]:bg-[#5525e8] data-[state=on]:text-white",
  },
  {
    value: "strong",
    label: "Strong",
    className:
      "w-[82px] bg-[#e8f8ef] text-[#29b765] hover:bg-[#e8f8ef] hover:text-[#29b765] data-[state=on]:bg-[#e8f8ef] data-[state=on]:text-[#29b765]",
  },
  {
    value: "average",
    label: "Average",
    className:
      "w-[92px] bg-[#fff5dc] text-[#a36a00] hover:bg-[#fff5dc] hover:text-[#a36a00] data-[state=on]:bg-[#fff5dc] data-[state=on]:text-[#a36a00]",
  },
  {
    value: "needs-work",
    label: "Needs work",
    className:
      "w-[108px] bg-[#ffeaf0] text-[#d43c6a] hover:bg-[#ffeaf0] hover:text-[#d43c6a] data-[state=on]:bg-[#ffeaf0] data-[state=on]:text-[#d43c6a]",
  },
];

export const PillarFilterSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <section
      className="flex w-full flex-col items-start gap-4"
      aria-labelledby="pillars-heading"
    >
      <header className="flex w-full items-center justify-between">
        <h2
          id="pillars-heading"
          className="[font-family:'Inter',Helvetica] text-xl font-bold leading-normal tracking-[0] text-[#17172a]"
        >
          Your 7 Pillars
        </h2>
        <Button
          type="button"
          variant="link"
          className="h-auto p-0 [font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] text-[#5525e8] hover:text-[#5525e8]"
        >
          How it works&nbsp;&nbsp;›
        </Button>
      </header>
      <ToggleGroup
        type="single"
        value={selectedFilter}
        onValueChange={(value) => {
          if (value) {
            setSelectedFilter(value);
          }
        }}
        className="flex flex-wrap items-center justify-start gap-3"
        aria-label="Filter pillars by status"
      >
        {pillarFilters.map((filter) => (
          <ToggleGroupItem
            key={filter.value}
            value={filter.value}
            className={`h-8 shrink-0 rounded-2xl px-0 [font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] ${filter.className}`}
          >
            {filter.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </section>
  );
};
