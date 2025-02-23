import type { CVSchemaType } from '@/validation';
import React from 'react';

import { Header } from './header';
import { Body } from './body';

export interface HomeProps {
  data: CVSchemaType;
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Header
        data={{
          firstName: props.data.firstName,
          lastName: props.data.lastName,
          email: props.data.email,
          phone: props.data.phone,
          socials: props.data.socials,
          profilePic: props.data.profilePic,
        }}
      />

      <Body data={props.data} />
    </>
  );
};
