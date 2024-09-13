import React from "react";

const PostcastDetails = ({params,searchParams}:{params:{podcastId:string},searchParams:{}}) => {
  
console.log(params,searchParams)
    return <div>
        
        PostcastDetails


<h1 className="text-white-2">{params.podcastId}</h1>


    </div>;
};

export default PostcastDetails;
