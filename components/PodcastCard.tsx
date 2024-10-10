"use client";

import Image from "next/image";
import React from "react";

import { PodcastCardProps } from "@/types";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

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
  const router = useRouter();
  const handleViews = () => {
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer" onClick={handleViews}>
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
