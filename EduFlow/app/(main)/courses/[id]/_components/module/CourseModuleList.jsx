import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Video } from "lucide-react";
import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({ module }) => {
  return (
    <Accordion type="multiple" collapsible className="w-full">
      <AccordionItem className="border-none" value={module?._id?.toString()}>
        <AccordionTrigger>{module?.title}</AccordionTrigger>
        <AccordionContent>
          {/* header */}
          <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              {(module?.duration / 60).toPrecision(2)} Hours
            </span>
          </div>
          {/* header ends */}

          <div className="space-y-3">{module?.lessonIds && module?.lessonIds.map((lessonId) => <CourseLessonList key={lessonId} lessonId={lessonId} />)}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CourseModuleList;
