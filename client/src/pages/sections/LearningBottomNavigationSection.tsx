import {
  BookOpenIcon,
  CircleDotIcon,
  HandHeartIcon,
  HouseIcon,
  UserCircleIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: "home", label: "Home", icon: HouseIcon },
  { id: "mentorship", label: "Mentorship", icon: CircleDotIcon },
  { id: "learn", label: "Learn", icon: BookOpenIcon },
  { id: "support", label: "Support", icon: HandHeartIcon },
  { id: "profile", label: "Profile", icon: UserCircleIcon },
] as const;

export const LearningBottomNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("learn");

  return (
    <nav
      aria-label="Learning navigation"
      className="flex min-h-[62px] w-full max-w-[580px] items-center rounded-3xl border border-[#e8e8f0] bg-white px-8 py-[17px]"
    >
      <div className="flex w-full items-center justify-between gap-2">
        {navigationItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeItem === id;

          return (
            <Button
              key={id}
              type="button"
              variant="ghost"
              onClick={() => setActiveItem(id)}
              aria-current={isActive ? "page" : undefined}
              className={`h-7 w-[83px] shrink-0 gap-1 rounded-[20px] p-0 hover:bg-[#f0ebff] ${
                isActive
                  ? "bg-[#f0ebff] text-[#5525e8] hover:text-[#5525e8]"
                  : "text-[#73758a] hover:text-[#73758a]"
              }`}
            >
              <Icon
                aria-hidden="true"
                className={`h-[13px] w-[13px] ${
                  isActive ? "text-[#5525e8]" : "text-[#73758a]"
                }`}
                strokeWidth={2.5}
              />
              <span className="font-['Inter',Helvetica] text-[9px] font-medium leading-none tracking-[0]">
                {label}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
