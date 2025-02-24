import React from 'react';

import type { CVSchemaType } from '@/validation';
import { Profile } from './profile';
import { EducationStep, Step } from './step';

export interface BodyProps {
  data: CVSchemaType;
}

const formatUTCDateTime = (): string => {
  const now: Date = new Date();

  const day: string = String(now.getUTCDate()).padStart(2, '0');
  const month: string = String(now.getUTCMonth() + 1).padStart(2, '0');
  const year: number = now.getUTCFullYear();

  const hours: string = String(now.getUTCHours()).padStart(2, '0');
  const minutes: string = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds: string = String(now.getUTCSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} UTC`;
};

export const Body: React.FC<BodyProps> = (props: BodyProps) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        <section className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
          <Profile profile={props.data.profile} />

          {props.data.timedBlocks
            .filter((block) => !block.ignore)
            .map((block, index) => (
              <section
                key={index}
                className="col-span-3 mt-6 first:mt-0"
                id="experience"
              >
                <h2
                  key={0}
                  className="mb-4 font-bold tracking-widest text-sm2 text-purple-700"
                >
                  {block.blockTitle.toUpperCase()}
                </h2>

                {block.blocks.map((experience, index) => (
                  <Step {...experience} key={index + 1} />
                ))}
              </section>
            ))}
        </section>
        <section className="print:col-span-1 col-span-3 md:col-span-1">
          <section className="col-span-1 mt-8 first:mt-0" id="skills">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              SKILLS
            </h2>
            {props.data.skillsBlocks.map((skillBlock, index) => (
              <section
                key={index}
                className="mb-1.5"
                id="programming-languages"
              >
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    {skillBlock.blockTitle}
                  </h3>
                </header>
                <div className="my-2.5 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    {skillBlock.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </section>

          <section className="col-span-3 mt-8 first:mt-0" id="education">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              EDUCATION
            </h2>

            {props.data.educationBlocks.map((educationBlock, index) => (
              <EducationStep key={index} {...educationBlock} />
            ))}
          </section>
        </section>
      </div>

      <button
        id="print-button"
        className="btn btn-primary fixed right-10 bottom-10"
      >
        <img
          className="w-14 border-2 border-dashed p-2 hover:bg-purple-200"
          src="https://img.icons8.com/ios-filled/100/7950F2/pdf-2.png"
          alt="Print PDF"
        />
      </button>

      <footer className="print:pb-0 pb-5">
        <section className="hidden print:block">
          <h2 className="text-xs font-hairline text-gray-550">
            Generated from https://cv.melkishengue.com at {formatUTCDateTime()}
          </h2>
        </section>

        <section
          id="resume-info"
          className="flex flex-row mt-16 print:mt-0 print:hidden"
        >
          <h2 className="text-xs font-hairline text-gray-550">
            This resume was built with bun, nestjs, jsx, htmx and Tailwind CSS
            for fun!
          </h2>
          <a
            target="_blank"
            href="https://github.com/melkishengue/bun-cv"
            className="group hover:text-gray-700 border-l border-gray-500 ml-3 pl-3 text-gray-550 text-xs font-hairline"
          >
            See the GitHub Repo
            <span
              className="
                  inline-block
                  text-gray-550
                  print:text-black
                  font-normal
                  group-hover:text-gray-700
                  transition
                  duration-100
                  ease-in
                "
            >
              ↗
            </span>
          </a>
          <a
            target="_blank"
            href="https://github.com/toreylittlefield/my-custom-tailwind-resume"
            className="group hover:text-gray-700 border-l border-gray-500 ml-3 pl-3 text-gray-550 text-xs font-hairline"
          >
            Original template from
            <span
              className="
                  inline-block
                  text-gray-550
                  print:text-black
                  font-normal
                  group-hover:text-gray-700
                  transition
                  duration-100
                  ease-in
                "
            >
              ↗
            </span>
          </a>
        </section>
      </footer>
    </>
  );
};
