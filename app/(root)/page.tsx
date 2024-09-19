"use client";
import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
 
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts </h1>

        <div className="text-white-1  flex min-h-screen flex-col items-center justify-between p-24">
       
        </div>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, imgURL, description }) => {
            return (
              <PodcastCard
                key={id}
                podcastId={id}
                title={title}
                description={description}
                imgURL={imgURL}
              />
            );
          })}
        </div>

        <Button>Button</Button>
      </section>
    </div>
  );
};

export default Home;
