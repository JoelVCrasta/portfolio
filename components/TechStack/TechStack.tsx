import TechDragCards from "@/components/TechStack/TechDragCards"
import TechMobile from "@/components/TechStack/TechMobile"

const TechStack = () => {
  return (
    <section id="tech" className="py-4">
      <div className="block md:hidden">
        <TechMobile />
      </div>
      <div className="hidden md:block">
        <TechDragCards />
      </div>
    </section>
  )
}

export default TechStack
