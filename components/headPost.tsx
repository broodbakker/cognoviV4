
import React, { FunctionComponent } from 'react'
import Link from "next/link";
//typescript
import { PostData } from "../typescript"

type HeadPostProps = {
  postData: PostData,
}

export const HeadPost: FunctionComponent<HeadPostProps> = ({ postData }) => {
  const url = postData.slug
  return (
    <Link href={`/${url}`} as={`/${url}`}>
      <div className="relative w-full h-72 md:max-w-4xl md:h-96  md:mx-auto cursor-pointer">

        <div className="relative w-full h-full ">
          <div className="absolute z-10 bottom-0 m-4">
            <h2 className="text-shadow text-white text-4xl md:text-5xl">{postData.attributes.title}</h2>
          </div>
          <img
            src={`${postData.photos.headerData.image}/?nf_resize=fit&w=700`}
            alt={postData.attributes.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </Link>
  )
}