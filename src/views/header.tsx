import React from 'react';

import type { CVSchemaType } from '@/validation';

export interface HeaderProps {
  data: Pick<
    CVSchemaType,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phone'
    | 'socials'
    | 'profilePic'
    | 'description'
  >;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <>
      <header className="flex row-gap-5 flex-row flex-wrap items-center mb-5 md:mb-2 border-b-2 border-opacity-50 border-gray-400 r-6 pb-2">
        <div className="initials-container mr-5 text-base leading-none pb-3 pt-3 text-white bg-[#553C9A] font-medium px-3">
          <div className="initial text-center text-2xl pb-1">
            {props.data.firstName[0]}{' '}
          </div>
          <div className="text-center text-2xl initial">
            {props.data.lastName[0]}
          </div>
        </div>
        <div className="mr-auto">
          <div className="print:text-5xl lg:text-5xl md:text-5xl text-2xl font-semibold text-gray-750 pb-px">
            {props.data.firstName} {props.data.lastName}
          </div>
          {props.data.description ? (
            // <div className="text-sm italic">{props.data.description}</div>
            <div
              className="text-sm italic"
              dangerouslySetInnerHTML={{ __html: props.data.description }}
            />
          ) : null}
        </div>
        {/* <div className="w-24 overflow-clip mt-2 md:mt-0">
          <img src={props.data.profilePic} />
        </div> */}
      </header>
      <section className="mb-10 first:mt-0" id="contact">
        <h2 className="mb-2 md:mb-0 font-bold tracking-widest text-sm2 text-gray-550">
          CONTACT
        </h2>

        <ul className="print:flex-row flex flex-wrap flex-col sm:flex-row justify-between gap-2 list-inside">
          <li key="0" className="mt-1.5 leading-normal text-gray-700 text-md">
            <a
              href="mailto:hi@toreylittlefield.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-envelope text-purple-900 mr-1"></i>
              {props.data.email}
            </a>
          </li>
          <li key="1" className="mt-1.5 leading-normal text-gray-700 text-md">
            <a href="tel:+14132827194">
              <i className="fas fa-mobile-alt text-purple-900 mr-1"></i>
              {props.data.phone}
            </a>
          </li>

          {props.data.socials.map((social, index) => (
            <li
              key={index + 2}
              className="mt-1.5 leading-normal text-gray-700 text-md"
            >
              <a
                href={social.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={'text-purple-900 mr-1 fab fa-' + social.icon}></i>
                {social.name}
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
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
