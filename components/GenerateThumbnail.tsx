import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function GenerateThumbnail() {
  const [isAiThumbnail, setAiThumbnail] = useState(false);

  return (
    <>
      <div className="generate_thumbnail">
        <Button
          onClick={() => setAiThumbnail(true)}
          type="button"
          variant="plain"
          className={cn("", { "bg-black-6": isAiThumbnail })}
        >
          Use AI to generate thumbnail
        </Button>
        <Button
          onClick={() => setAiThumbnail(false)}
          type="button"
          variant="plain"
          className={cn("", { "bg-black-6": !isAiThumbnail })}
        >
          Upload custom image
        </Button>
      </div>
    </>
  );
}

export default GenerateThumbnail;
