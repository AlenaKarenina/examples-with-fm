import { FC, ReactNode } from "react"
import { SiteFooter } from "./SiteFooter/SiteFooter"

interface SiteLayoutInnerProps {
  children: ReactNode
}

export const SiteLayoutInner: FC<SiteLayoutInnerProps> = ({ children }) => {
  return (
    <>
      {children}
      <SiteFooter title={'Back to main page'} />
    </>
  )
}
