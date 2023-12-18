import ejs from 'ejs';
import { HexColor } from '@/model';
import { ManfredAwesomicCV } from '@lemoncode/manfred-common/model';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';
import { mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { createColorPalette } from './html-document-start.helper';

export const generateHtmlDocumentStart = (cv: ManfredAwesomicCV, color: HexColor): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);
  const avatarUrl = profileSectionVm.avatarUrl;
  const colorPalette = createColorPalette(color);

  return ejs.render(htmlDocumentStartTemplate, { colorPalette, avatarUrl });
};
