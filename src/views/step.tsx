import React from 'react';

export interface StepProps {
  title: string;
  organizationName: string;
  timeInterval: string;
  organizationCity: string;
  description?: string;
  remote: boolean;
  activities: string[];
}

export const Step: React.FC<StepProps> = (props: StepProps) => {
  return (
    <section className="mb-4.5">
      <header>
        <h3
          id="job-title"
          className="text-lg font-semibold text-gray-700 leading-snugish"
        >
          {props.title}
          <span id="company-name" className="text-gray-550 font-semibold">
            {' '}
            @ {props.organizationName}
          </span>
        </h3>
        <p
          id="work-date-location"
          className="leading-normal text-sm text-gray-700 mt-1"
        >
          {props.timeInterval} //{' '}
          {props.remote ? <strong>Remote</strong> : <></>} -{' '}
          {props.organizationCity}
        </p>
      </header>
      {props.description ? (
        <div
          className="mt-3 text-sm text-gray-700 leading-normal"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      ) : (
        <></>
      )}
      <ul id="work-description-bullets" className="">
        {props.activities.map((activity, index) => (
          <li
            key={index}
            className="mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal"
          >
            <span className="-ml-2 select-none text-gray-600 mr-1">›</span>
            <span dangerouslySetInnerHTML={{ __html: activity }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export interface EducationStepProps {
  organizationName: string;
  timeInterval: string;
  location: string;
  summary: string;
  description: string;
  note?: string;
}

export const EducationStep: React.FC<EducationStepProps> = (
  props: EducationStepProps,
) => {
  return (
    <section className="mb-4.5">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {props.organizationName}
        </h3>
        <p className="leading-normal text-sm text-gray-650">
          {props.timeInterval} // {props.location}
        </p>
      </header>
      <p className="mt-2.1 text-sm text-gray-800 leading-normal">
        <span dangerouslySetInnerHTML={{ __html: props.summary }} />
      </p>
      <p className="mt-0.5 text-xs text-gray-600 leading-normal">
        {props.note ? (
          <>
            <i>*{props.note}</i>
            <br />
          </>
        ) : (
          <></>
        )}
        {props.description}
      </p>
    </section>
  );
};
