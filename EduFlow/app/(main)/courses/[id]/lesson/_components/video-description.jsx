"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function VideoDescription({ description }) {
  return (
    <div className="mt-4">
      <Tabs defaultValue="description">
        <TabsList className="bg-transparent p-0 border-b border-border w-full justify-start h-auto rounded-none">
          <TabsTrigger className="capitalize" value="description">
            Description
          </TabsTrigger>
        </TabsList>

        <div className="pt-3">
          <TabsContent value="description">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default VideoDescription;
