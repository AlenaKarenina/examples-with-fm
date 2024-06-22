import { BlLayoutGrid } from "@/components/bl/BlLayoutGrid/BlLayoutGrid"
import { CARDS } from "@/components/bl/BlLayoutGrid/BlLayoutGrid.mock"
import { SiteLayoutInner } from "@/components/site/SiteLayoutInner"

export default function Page() {
  return (
    <SiteLayoutInner>
      <BlLayoutGrid cards={CARDS} />
    </SiteLayoutInner>
  )
}
