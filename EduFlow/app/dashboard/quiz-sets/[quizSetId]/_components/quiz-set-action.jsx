"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const QuizSetAction = ({ isPublished = false }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Button variant="outline" size="sm">
        {isPublished ? "Unpublish" : "Publish"}
      </Button>

      <Button size="sm">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};
