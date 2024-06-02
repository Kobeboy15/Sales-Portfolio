import Image from "next/image";

export default function ProjectSection() {
  const projectItems = ["hello", "hello2", "owd", "4"];

  return (
    <section id="projects" className="mb-16">
      <h3 className="mb-8 text-lg tracking-widest uppercase text-primary dark:text-primary_dark">
        Projects
      </h3>
      <div className="grid gap-8">
        {projectItems.map((item, index) => {
          return <ProjectSectionItem key={index} />;
        })}
      </div>
      <button className="flex items-center mt-12 font-semibold tracking-tight text-primary dark:text-primary_dark hover:text-indigo-800 dark:hover:text-indigo-300">
        View Project Portfolio
        <i className="uil uil-arrow-right text-[24px] pt-0.5"></i>
      </button>
    </section>
  );
}

function ProjectSectionItem() {
  return (
    <section>
      <div className="grid lg:grid-cols-[0.4fr_1fr] gap-8">
        <div className="relative h-[120px]">
          <Image
            src="/image.png"
            fill
            loading="lazy"
            alt="Picture of the author"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h4 className="text-base font-medium leading-tight text-primary dark:text-primary_dark">
            Senior Frontend Engineer, Accessibility
          </h4>
          <p className="mt-2 text-sm text-slate-800 dark:text-tropical_indigo">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          <div className="flex gap-1.5 gap flex-wrap  mt-3">
            <ProjectSectionSkill name={"Javascript"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectSectionSkill({ name }) {
  return (
    <div className="flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-primary bg-primary/15">
      {name}
    </div>
  );
}
