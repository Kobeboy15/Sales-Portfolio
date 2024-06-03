export default async function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="mb-16">
      <h3 className="mb-8 text-lg tracking-widest uppercase text-primary dark:text-primary_dark">
        Experience
      </h3>
      <div className="grid gap-8">
        {experiences.map((item, index) => {
          return <ExperienceSectionItem experience={item} key={index} />;
        })}
      </div>
      <a
        href="/KCLamb_Resume.pdf"
        target="_blank"
        className="flex items-center mt-12 font-semibold tracking-tight text-primary dark:text-primary_dark hover:text-indigo-800 dark:hover:text-indigo-300"
      >
        View Full Resume
        <i className="uil uil-arrow-right text-[24px] pt-0.5"></i>
      </a>
    </section>
  );
}

function ExperienceSectionItem({ experience }) {
  const {
    jobTitle,
    jobCompany,
    jobCompanyLink,
    jobStart,
    jobEnd,
    jobDescription,
    jobSkills,
  } = experience;

  return (
    <section>
      <div className="grid lg:grid-cols-[0.5fr_1fr]">
        <p className="pt-1 pb-2 text-xs font-semibold tracking-wide uppercase lg:pb-0 text-slate-700 dark:text-tropical_indigo/80">
          {jobStart} - {jobEnd}
        </p>
        <div>
          <a
            href={jobCompanyLink}
            target="_blank"
            className="transition-colors"
          >
            <h4 className="text-base font-medium leading-tight transition origin-left text-primary dark:text-primary_dark hover:text-indigo-800 dark:hover:text-indigo-300">
              {jobTitle} - {jobCompany}{" "}
              <i className="uil uil-arrow-up-right"></i>
            </h4>
          </a>
          <p className="mt-2 text-sm leading-normal text-justify text-slate-800 dark:text-tropical_indigo/70">
            {jobDescription}
          </p>
          <div className="flex gap-1.5 gap flex-wrap  mt-3">
            {jobSkills.map((skill, idx) => {
              return <ExperienceSectionSkills key={idx} name={skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSectionSkills({ name }) {
  return (
    <div className="flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-primary bg-primary/15">
      {name}
    </div>
  );
}
