"use client"

import React from "react"
import Image from "next/image"
import { TracingBeam } from "@/components/ui/TracingBeam/TracingBeam"
import lcs from './BlTracingBeam.module.css'
import { dummyContent } from "./BlTracingBeam.mock"

export function BlTracingBeam() {
  return (
    <TracingBeam className={lcs.el}>
      <div className={lcs.wrapper}>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className={lcs.item}>
            <h2 className={lcs.badge}>
              {item.badge}
            </h2>
            <p className={lcs.title}>
              {item.title}
            </p>
            <div className={lcs.text}>
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className={lcs.image}
                  priority={true}
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

