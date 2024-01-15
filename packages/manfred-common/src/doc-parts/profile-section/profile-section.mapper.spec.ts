import { ContactMean, ManfredAwesomicCV } from '@/model';
import { mapFromMacCvToProfileSectionVm, mapRelevantLinksToVm } from './profile-section.mapper';
import { PhoneNumbers, ProfileSectionVm, RelevantLinkVm } from './profile-section.vm';
describe('Testing profile-section.mapper.ts', () => {
  describe('relevanLinksToVm specs', () => {
    it('should return relevant link type with "otros" when passed relevantLinks type is "other"', () => {
      // Arrange
      const relevantLinks: any = [
        {
          type: 'other',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      const expectedResult: RelevantLinkVm[] = [
        {
          type: 'otros',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      // Act
      const result = mapRelevantLinksToVm(relevantLinks);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return relevant link type with "web" when passed relevantLinks type is "website"', () => {
      // Arrange
      const relevantLinks: any = [
        {
          type: 'website',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      const expectedResult: RelevantLinkVm[] = [
        {
          type: 'web',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      // Act
      const result = mapRelevantLinksToVm(relevantLinks);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return relevant link type with "linkedin" when passed relevantLinks type is "linkedin"', () => {
      // Arrange
      const relevantLinks: any = [
        {
          type: 'linkedin',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      const expectedResult: RelevantLinkVm[] = [
        {
          type: 'linkedin',
          URL: 'https://www.google.es',
          description: 'This is my link.',
        },
      ];
      // Act
      const result = mapRelevantLinksToVm(relevantLinks);
      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapFromMacCvToProfileSectionVm specs', () => {
    it('It should returns empty cv when passed cv is null', () => {
      // Arrange
      const cv: any = null;
      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns empty cv when passed cv is undefined', () => {
      // Arrange
      const cv: any = undefined;
      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns empty cv when passed aboutMe field is null', () => {
      // Arrange
      const person: any = null;

      const cv: ManfredAwesomicCV = {
        settings: {
          language: '',
          lastUpdate: '',
          MACVersion: '',
        },
        aboutMe: {
          profile: person,
        },
      };

      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns empty cv when passed aboutMe field is undefined', () => {
      // Arrange
      const person: any = undefined;

      const cv: ManfredAwesomicCV = {
        settings: {
          language: '',
          lastUpdate: '',
          MACVersion: '',
        },
        aboutMe: {
          profile: person,
        },
      };

      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns empty cv when any field from aboutMe field is null', () => {
      // Arrange
      const person: any = {
        name: null,
        surnames: null,
        title: null,
        description: null,
        birthday: null,
        avatar: null,
        contact: null,
        location: null,
      };

      const cv: ManfredAwesomicCV = {
        settings: {
          language: '',
          lastUpdate: '',
          MACVersion: '',
        },
        aboutMe: {
          profile: person,
        },
      };

      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns empty cv when any field from aboutMe field is undefined', () => {
      // Arrange

      const person: any = {
        name: undefined,
        surnames: undefined,
        title: undefined,
        description: undefined,
        birthday: undefined,
        avatar: undefined,
        contact: undefined,
        location: undefined,
      };

      const cv: ManfredAwesomicCV = {
        settings: {
          language: '',
          lastUpdate: '',
          MACVersion: '',
        },
        aboutMe: {
          profile: person,
        },
      };

      const expectedResult: ProfileSectionVm = {
        name: '',
        surnames: '',
        title: '',
        description: '',
        fullname: ' ',
        emails: [] as string[],
        phoneNumbers: [] as PhoneNumbers[],
        relevantLinks: [] as RelevantLinkVm[],
        avatarUrl: '',
        city: '',
        country: '',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('It should returns cv with proper data when fields from aboutMe field have valid values', () => {
      // Arrange
      const theContact: ContactMean = {
        contactMails: ['john.doe@mydomain.com', 'john.doe@anydomain.com'],
        phoneNumbers: [{ number: '659120720', countryCode: '+34' }],
      };

      const theLink: any = {
        type: 'github',
        URL: 'john.doe@github.com',
        description: 'This is my link.',
      };

      const person: any = {
        name: 'John',
        surnames: 'Doe',
        title: 'Computer Science Bachelor',
        description: 'Frontend developer',
        birthday: '30/03/1990',
        avatar: { link: 'http://manfredexport.com' },
        location: { municipality: 'Madrid', country: 'Spain' },
      };

      const cv: ManfredAwesomicCV = {
        settings: {
          language: 'English',
          lastUpdate: '25/04/2023',
          MACVersion: '1.0',
        },
        aboutMe: {
          profile: person,
          relevantLinks: [theLink],
        },
        careerPreferences: {
          contact: theContact,
        },
      };

      const expectedResult: ProfileSectionVm = {
        name: 'John',
        surnames: 'Doe',
        title: 'Computer Science Bachelor',
        description: 'Frontend developer',
        fullname: 'John Doe',
        emails: theContact.contactMails as string[],
        phoneNumbers: theContact.phoneNumbers as PhoneNumbers[],
        relevantLinks: [theLink] as RelevantLinkVm[],
        avatarUrl: 'http://manfredexport.com',
        city: 'Madrid',
        country: 'Spain',
      };

      // Act
      const result = mapFromMacCvToProfileSectionVm(cv);
      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});

export {};
