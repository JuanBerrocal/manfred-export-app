import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV } from '@lemoncode/manfred-common/model';

import headerUserTemplate from './header-user.ejs?raw';

export const generateHeaderUser = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateHeaderUserInner(profileSectionVm);
};

const generateHeaderUserInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(headerUserTemplate, rootObject);
};
