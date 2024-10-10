"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import React from "react";

const PostcastDetails = ({
  params,
  searchParams,
}: {
  params: { podcastId: string };
  //   params: { podcastId: Id<'podcasts'> };
  searchParams: {};
}) => {
  // console.log(params.podcastId)
  //const podcast=useQuery(api.podcasts.getPodcastsById,{podcastId:params.podcastId})

  return (
    <div>
      PostcastDetails
      <h1 className="text-white-2">{params.podcastId}</h1>
    </div>
  );

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently Playing..</h1>
        <figure className="flex gap-3">
          <Image
            src={"/icons/headphone.svg"}
            width={24}
            height={24}
            alt="Headphone Icon"
          />
          <h2 className="text-16 font-bold"> </h2>
        </figure>
      </header>
    </section>
  );
};

export default PostcastDetails;
