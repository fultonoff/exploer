import { DUMMY_POSTS } from "@/DUMMY_DATA";
import React from "react";
import { notFound } from "next/navigation";
import PaddingContainer from "@/components/layout/padding-container";
import PostHiro from "@/components/post/post-hiro";
import SocialLink from "@/components/elements/social-link";
import PostBody from "@/components/post/post-body";
import CtaCard from "@/components/elements/cta-card";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <div className="space-y-10">


      
      <PostHiro post={post} />
      <div className=" flex gap-10 flex-col md:flex-row">
        <div className="relative">
          <div className=" items-center sticky top-20 flex md:flex-col gap-5">
            <div className="font-medium md:hidden">Share this content</div>
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`
                ${baseUrl}/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareURL
              platform="github"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`
               ${ baseUrl}/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareURL
              platform="instagram"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`
                ${baseUrl}/post/${post.slug}`
              }`}
            />
          </div>
        </div>
        <PostBody body={post.body}/>
      </div>
      <CtaCard/>
      </div>
    </PaddingContainer>
  );
};

export default page;
