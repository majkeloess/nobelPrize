/// <reference types="vite/client" />

interface TempData {
  birth: string;
  death: string;
  wiki: string;
  moreData: string;
}

interface LaureateDetails {
  birth: {
    date: string;
    place: {
      locationString: {
        en: string;
      };
    };
  };
  death: {
    date: string;
    place: {
      locationString: {
        en: string;
      };
    };
  };
  wikipedia: {
    english: string;
  };
}

interface Data {
  name: string;
  category: string;
  prize: string;
  birth: string;
  death: string;
  links: {
    wiki: string;
    moreData: string;
  };
}

interface YearData {
  id: number;
  category: string;
  prize: string;
  name: string;
  laureateId: string;
  birth: string;
  death: string;
  links: {
    wiki: string;
    moreData: string;
  };
}

interface Link {
  rel: string;
  href: string;
  action: string;
  types: string;
}

interface KnownName {
  en: string;
}

interface FullName {
  en: string;
}

interface Motivation {
  en: string;
  se: string;
}

interface Laureate {
  id: string;
  knownName: KnownName;
  fullName: FullName;
  portion: string;
  sortOrder: string;
  motivation: Motivation;
  links: Link[];
}

interface Category {
  en: string;
  no: string;
  se: string;
}

interface CategoryFullName {
  en: string;
  no: string;
  se: string;
}

interface NobelPrize {
  awardYear: string;
  category: Category;
  categoryFullName: CategoryFullName;
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  links: Link[];
  laureates: Laureate[];
}

interface ApiResponse {
  nobelPrizes: NobelPrize[];
}

interface YearContextType {
  years: string[];
  setYears: React.Dispatch<React.SetStateAction<string[]>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
}
