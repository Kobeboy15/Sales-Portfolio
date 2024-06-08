export default function ProjectSection({ projects }) {
  const portfolioLink =
    "https://www.canva.com/design/DAF_rh_SLzY/9mqiY8bvmZmjDT4ym1VSkw/view?utm_content=DAF_rh_SLzY&utm_campaign=designshare&utm_medium=link&utm_source=viewer";
  return (
    <section id="projects" className="mb-16">
      <h3 className="mb-8 text-lg tracking-widest uppercase text-primary dark:text-primary_dark">
        Projects
      </h3>
      <div className="grid gap-8">
        {projects
          .sort((a, b) => b - a)
          .map((item, index) => {
            return <ProjectSectionItem project={item} key={index} />;
          })}
      </div>
      <a
        href={portfolioLink}
        target="_blank"
        className="flex items-center mt-12 font-semibold tracking-tight text-primary dark:text-primary_dark hover:text-indigo-800 dark:hover:text-indigo-300"
      >
        View Full Project Portfolio
        <i className="uil uil-arrow-right text-[24px] pt-0.5"></i>
      </a>
    </section>
  );
}

function ProjectSectionItem({ project }) {
  const { projectTitle, projectDescription, projectTags, isFeatured, images, projectVideo } =
    project;
  return (
    <section>
      <div className="grid grid-cols-1 gap-3">
        <div className="relative flex gap-2 pt-3">
          {images?.map((url, index) => {
            return (
              <a key={'images'+index} href={`images/${url}`} target="_blank">
                <img
                  src={`images/${url}`}
                  loading="lazy"
                  alt={`${projectTitle}-${index}`}
                  className="object-cover w-[120px] h-[120px] rounded-sm border transition-colors duration-200 border-slate-800/20 hover:cursor-pointer hover:border-primary dark:border-white/10 hover:dark:border-white/80"
                />
              </a>
            );
          })}
          {projectVideo && (
            <iframe width="560" height="315" src={projectVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          )}
        </div>
        <div>
          {isFeatured && (
            <small className="text-primary dark:text-primary_dark">
              Featured Project
            </small>
          )}
          <h4 className="text-lg font-medium leading-tight text-primary dark:text-primary_dark">
            {projectTitle}
          </h4>
          <p className="mt-2 text-sm leading-6 text-justify text-slate-800 dark:text-tropical_indigo/70">
            {projectDescription}
          </p>
          <div className="flex gap-1.5 gap flex-wrap  mt-3">
            {projectTags?.map((tag, index) => {
              return <ProjectSectionSkill key={index} name={tag} />;
            })}
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
