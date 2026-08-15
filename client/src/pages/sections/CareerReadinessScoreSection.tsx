import { Card, CardContent } from "@/components/ui/card";

const careerReadinessScore = {
  title: "Your Career Readiness Score",
  score: "72%",
  change: "↑ 8% from last assessment",
  message: "Great progress! You're on track.",
  illustration: {
    src: "/figmaAssets/group-13.png",
    alt: "Group",
  },
};

export const CareerReadinessScoreSection = (): JSX.Element => {
  return (
    <section className="w-full" aria-labelledby="career-readiness-score-title">
      <Card className="min-h-[188px] w-full max-w-[1130px] rounded-[22px] border border-solid border-[#e8e8f0] bg-white shadow-none">
        <CardContent className="flex min-h-[188px] items-center justify-between gap-6 px-7 py-7 pr-[60px]">
          <div className="flex w-[183px] shrink-0 flex-col items-start gap-2">
            <h2
              id="career-readiness-score-title"
              className="[font-family:'Inter',Helvetica] text-[13px] font-normal leading-normal tracking-[0] text-[#17172a]"
            >
              {careerReadinessScore.title}
            </h2>
            <div className="flex w-[165px] flex-col items-start gap-1.5">
              <p className="[font-family:'Inter',Helvetica] text-[54px] font-bold leading-normal tracking-[0] text-[#5525e8]">
                {careerReadinessScore.score}
              </p>
              <p className="[font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] text-[#29b765]">
                {careerReadinessScore.change}
              </p>
              <p className="[font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] text-[#73758a]">
                {careerReadinessScore.message}
              </p>
            </div>
          </div>
          <img
            className="h-[122px] w-[122px] shrink-0 object-contain"
            alt={careerReadinessScore.illustration.alt}
            src={careerReadinessScore.illustration.src}
          />
        </CardContent>
      </Card>
    </section>
  );
};
