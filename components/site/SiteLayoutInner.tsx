import { FC, ReactNode } from "react"
import { SiteFooter } from "./SiteFooter/SiteFooter"
import { SiteNavbar } from "./SiteNavBar/SiteNavBar"

interface SiteLayoutInnerProps {
  children: ReactNode
}

export const SiteLayoutInner: FC<SiteLayoutInnerProps> = ({ children }) => {
  return (
    <>
      <SiteNavbar />
      {children}
      <SiteFooter title={'Back to main page'} />
    </>
  )
}
