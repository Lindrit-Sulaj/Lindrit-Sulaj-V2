import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Cta from "@/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="px-4 xl:px-0">
        <div className="max-w-screen-xl bg-black text-white p-8 md:p-14 -mt-[65px] mx-auto flex flex-col md:flex-row gap-y-6 justify-between">
          <div className="w-full md:w-auto">
            <h3 className="font-semibold text-2xl">My recent clients</h3>
            <p className="text-neutral-300 mt-1 max-w-lg">I have partnered with clients from Germany, Kosovo and Switzerland to deliver professional websites built for their unique business needs.</p>
          </div>
          <div className="flex grow justify-evenly items-center flex-wrap gap-y-4">
            <img src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:h-56/image%20(1)_6xEr7uDhB.png?updatedAt=1707242120875" width="56px" height="56px" alt="Dream Design Logo" className="h-8 w-auto md:h-14" />
            <img src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:h-56/image_7N5KU9BOi.png?updatedAt=1718452462888" alt="Berisha Pflasterbau" width="93px" height="56px" className="h-8 w-auto md:h-14" rel="nofollow" />
            <img src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:h-56/image%20(2)_6cxv_3DDX.png?updatedAt=1707242403911" className="h-8 w-auto md:h-14" width="93px" height="56px" alt="Beaute Infinie AJ Logo" />
            <img src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:h-56/image%20(3)_Psvsy2Vp0.png?updatedAt=1717925034444" className="h-8 w-auto md:h-14" width="81px" height="56px" alt="Protec Safe" />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Cta />
    </main>
  );
}
