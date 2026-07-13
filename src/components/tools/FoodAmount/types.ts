export interface Product {
  name: string;
  englishName?: string;
  kcal: number;
  form?: 'dry' | 'wet';
  packageSizeG?: number;
  unit?: '캔' | '파우치' | '병' | '컵';
}

export interface BrandProducts {
  [key: string]: Product[];
}

export interface SpeciesConfig {
  dog: { text: string; val: number }[];
  cat: { text: string; val: number }[];
}

export interface ResultData {
  name: string;
  der: number;
  kcalPerG: string;
  foodG: number;
  profile: string;
  status: string;
  rer: number;
  foodInfo: string;
  feedingUnitLabel: string;
  feedingUnitSub: string;
  feedingUnitValue: string;
  date: string;
}
