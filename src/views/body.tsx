import React from 'react';

import type { CVSchemaType } from '@/validation';
import { Profile } from './profile';
import { EducationStep, Step } from './step';

export interface BodyProps {
  data: CVSchemaType;
}

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

          {/* <section className="mt-8 first:mt-0" id="projects">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              TECHNICAL PROJECTS
            </h2>

            <section className="mb-4.5">
              <header>
                <h3 className="text-sm font-semibold tex t-gray-700 leading-snugish">
                  <a
                    href="https://www.t-mobile.com/support/new-to-tmobile"
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    T-Mobile New Customer Onboarding
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
                </h3>
                <p className="leading-normal text-sm text-gray-650">
                  Stack: Javascript, Vue.js, Laravel
                </p>
                <p className="leading-normal text-sm text-gray-650">
                  <i>Finished</i>
                </p>
              </header>
              <div className="mt-2.1 text-xs text-gray-700 leading-normal">
                <p>
                  <span className="font-semibold">Description:</span>
                  T-Mobile onboarding experience for new customers and Sprint
                  customers after merger.
                </p>
                <p>
                  <span className="font-semibold">Market Need:</span>
                  Large churn from Sprint customers migrating to T-Mobile.
                </p>
                <p>
                  <span className="font-semibold">Solves:</span>
                  Integrates the T-Mobile Un-Carrier campaign, showcases
                  benefits, and educates customers
                </p>
                <span className="font-semibold">Features: </span>

                <br />
                <ul className="list-inside">
                  <li className="ml-1.5">
                    <span className="-ml-1.5 select-none text-gray-600">›</span>
                    Users can set up online account to manage T-Mobile account &
                    see of the benefits they recieve with T-Mobile service.
                  </li>
                  <li className="ml-1.5">
                    <span className="-ml-1.5 select-none text-gray-600">›</span>
                    Helps transition customers migrating from Sprint.
                  </li>
                </ul>
              </div>
            </section>
          </section> */}

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
    </>
  );
};
