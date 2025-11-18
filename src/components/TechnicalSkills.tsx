import type React from 'react';

export const TechnicalSkills: React.FC = () => {
  const sections = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript'],
    },
    {
      title: 'Backend Development',
      skills: ['FastAPI', 'Spring Boot', 'Node.js', 'Express.js', 'Django', 'RESTful APIs', 'SQLAlchemy'],
    },
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'React.js', 'Bootstrap', 'Redux'],
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MySQL', 'AWS S3', 'Relational Schema Design', 'MongoDB'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS (EC2, S3, Glue)', 'Docker', 'Version Control (Git, GitHub)', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-400">
            A snapshot of the tools, languages, and platforms I use to design, build, and
            scale applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(15,23,42,0.7)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-lg font-semibold text-slate-50 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {section.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm transition-colors duration-200 group-hover:border-cyan-400/60 group-hover:text-cyan-50"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
