import Education from "@/components/education";
import Favourites from "@/components/favourites";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";


export default function Page() {
  return (
    <div>
      <Hero />
      <Skills />
      <Favourites />
      <Education />
      <Portfolio />
    </div>
  )
}
