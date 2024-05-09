import ExampleParallaxThird from "@/components/bl/ExampleParallaxThird/ExampleParallaxThird"
import { SiteLayoutInner } from "@/components/site/SiteLayoutInner"
import { SiteNavbar } from "@/components/site/SiteNavBar/SiteNavBar"

export default function Page() {
  return (
    <SiteLayoutInner>
      <SiteNavbar />
      <ExampleParallaxThird />
    </SiteLayoutInner>
  )
}
