import { CareerDashboardSidebarSection } from "./sections/CareerDashboardSidebarSection";
import { CareerReadinessScoreSection } from "./sections/CareerReadinessScoreSection";
import { LearningBottomNavigationSection } from "./sections/LearningBottomNavigationSection";
import { PillarFilterSection } from "./sections/PillarFilterSection";
import { PillarProgressListSection } from "./sections/PillarProgressListSection";

export const ElementLearningCenter = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-[#f8f8fc] [font-family:'Inter',Helvetica]">
      <div className="grid min-h-screen grid-cols-[16%_minmax(0,1fr)]">
        <aside className="min-w-0">
          <CareerDashboardSidebarSection />
        </aside>
        <main className="min-w-0 px-[2.75vw] py-[18px]">
          <header className="mb-[15px]">
            <h1 className="text-[14px] font-bold leading-normal tracking-[0] text-[#17172a]">
              Learning Center
            </h1>
            <p className="mt-[2px] text-[7px] font-normal leading-normal tracking-[0] text-[#73758a]">
              Improve your career readiness across 7 pillars.
            </p>
          </header>
          <div className="flex w-full flex-col gap-[14px]">
            <CareerReadinessScoreSection />
            <PillarFilterSection />
            <PillarProgressListSection />
          </div>
          <footer className="relative left-[-8vw] mt-[7px] flex justify-center">
            <LearningBottomNavigationSection />
          </footer>
        </main>
      </div>
    </div>
  );
};
