import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgURL,
}: {
  podcastId: number;
  title: string;
  imgURL: string;
  description: string;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          className="aspect-square rounded-xl 2xl:size-[200px] h-fit w-full"
          src={imgURL}
          height={174}
          width={174}
          alt={title}
        />

        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 text-white-4 truncate font-normal capitalize">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
