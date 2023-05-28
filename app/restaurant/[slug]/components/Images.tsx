import Image from 'next/image'
import React from 'react'

export default function Images() {
  return (
    <div>
    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">7 photos</h1>
    <div className="flex flex-wrap">
      <Image
        className="w-56 h-44 mr-1 mb-1"
        src="https://picsum.photos/536/354"
        alt=""
        width={100}
        height={100}
      />
      <Image
        className="w-56 h-44 mr-1 mb-1"
        src="https://picsum.photos/id/237/536/354"
        alt=""
        width={100}
        height={100}
      />
      <Image
        className="w-56 h-44 mr-1 mb-1"
        src="https://picsum.photos/seed/picsum/200/300"
        alt=""
        width={100}
        height={100}
      />
      <Image
        className="w-56 h-44 mr-1 mb-1"
        src="https://picsum.photos/id/1084/536/354?grayscale"
        alt=""
        width={100}
        height={100}
      />
      <Image
        className="w-56 h-44 mr-1 mb-1"
        src="https://picsum.photos/id/1060/536/354?blur=2"
        alt=""
        width={100}
        height={100}
      />
    </div>
  </div>
  )
}
