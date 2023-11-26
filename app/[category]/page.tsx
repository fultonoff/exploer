import React from "react";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

const Page = ({
  params,
}: {
  params: {
    category: string;
  };
}) => {

  const posts = DUMMY_POSTS.filter((post)=> post.category.title.toLowerCase() === params.category)

  console.log(posts);
  return <div>Category{params.category}</div>;
};

export default Page;
