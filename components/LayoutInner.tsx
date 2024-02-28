import { FC, ReactNode } from "react"
import { SiteFooter } from "./site/SiteFooter/SiteFooter"

interface LayoutInnerProps {
  children: ReactNode
}

export const LayoutInner: FC<LayoutInnerProps> = ({ children }) => {
//export default function LayoutInner() {
  return (
    <>
      {children}
      <SiteFooter title={'Back to main page'} />
    </>
  )
}
