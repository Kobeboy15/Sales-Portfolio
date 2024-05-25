export default function ProjectSection() {
  const projectItems = ["hello", "hello2", "owd", "4"];

  return (
    <section className="mb-16">
      <h3 className="mb-8 text-lg font-bold uppercase text-primary">Project</h3>
      <div className="grid gap-8">
        {projectItems.map((item, index) => {
          return <ProjectSectionItem key={index} />;
        })}
      </div>
      <button className="mt-12 font-semibold text-primary">
        View Project Portfolio
      </button>
    </section>
  );
}

function ProjectSectionItem() {
  return (
    <section>
      <div className="grid">
        <div>
          <h4 className="text-base font-medium leading-tight text-primary">
            Senior Frontend Engineer, Accessibility
          </h4>
          <p className="mt-2 text-sm text-slate-800">
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
