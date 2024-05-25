import { promises as fs } from "fs";

export default async function ExperienceSection() {
  const file = await fs.readFile(process.cwd() + "/src/app/KC.json", "utf-8");
  const { experiences } = JSON.parse(file);

  return (
    <section className="mb-16">
      <h3 className="mb-8 text-lg font-bold uppercase text-primary">
        Experience
      </h3>
      <div className="grid gap-8">
        {experiences.map((item, index) => {
          return <ExperienceSectionItem experience={item} key={index} />;
        })}
      </div>
      <button className="mt-12 font-semibold text-primary">
        View Full Resume
      </button>
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
      <div className="grid grid-cols-[0.5fr_1fr]">
        <p className="pt-1 text-xs font-semibold tracking-wide uppercase text-slate-700">
          {jobStart} - {jobEnd}
        </p>
        <div>
          <a
            href={jobCompanyLink}
            target="_blank"
            className="transition-colors"
          >
            <h4 className="flex items-center gap-1 text-base font-medium leading-tight transition origin-left text-primary hover:text-indigo-800">
              {jobTitle} - {jobCompany}{" "}
              <i class="uil uil-arrow-up-right text-[18px]"></i>
            </h4>
          </a>
          <p className="mt-2 text-sm leading-normal text-justify text-slate-800">
            {jobDescription}
          </p>
          <div className="flex gap-1.5 gap flex-wrap  mt-3">
            {jobSkills.map((skill, idx) => {
              return <ExperienceSectionSkills name={skill} />;
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
