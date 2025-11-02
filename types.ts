
export interface CaseStudyResult {
  metric: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  brand: string;
  subtitle: string;
  description: string;
  goal: string;
  strategy: string[];
  results: CaseStudyResult[];
  imageUrl?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  phones: string[];
  email: string;
  linkedin: string;
  portfolio: string;
  aboutMe: {
    title: string;
    description: string;
  };
  achievements: {
    title: string;
    items: {
      label: string;
      value: string;
    }[];
  };
  caseStudies: {
    title: string;
    studies: CaseStudy[];
  },
  skillsAndCourses: {
    title: string;
    courses: {
      title: string;
      items: string[];
    };
    skills: {
      title: string;
      items: string[];
    };
  };
  contact: {
    title: string;
    qrCodeText: string;
  };
}

export interface LanguageData {
  ar: PortfolioData;
  en: PortfolioData;
}