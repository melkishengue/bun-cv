import React from 'react';

import type { CVSchemaType } from '@/validation';

export interface ProfileProps {
  profile: CVSchemaType['profile'];
}

export const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <>
      {props.profile.length > 0 ? (
        <section className="mt-8 first:mt-0" id="profile">
          <h2 className="mb-0 font-bold tracking-widest text-sm2 text-purple-700 ">
            PROFILE
          </h2>

          <section className="mb-0 grid grid-cols-2 ">
            {props.profile.map((profile, index) => (
              <p
                key={index}
                className="mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal"
              >
                <span className="-ml-2 select-none text-gray-600 mr-1">›</span>
                {index == 0 ? (
                  <strong>{profile}</strong>
                ) : (
                  <span>{profile}</span>
                )}
              </p>
            ))}
          </section>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
