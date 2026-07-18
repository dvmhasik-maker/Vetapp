export type ObesityCategory = 'under' | 'normal' | 'over' | 'obese';

export interface ObesityBanner {
  theme: 'blue' | 'green' | 'orange' | 'red';
  icon: string;
  label: string;
  actions: string[];
  note: string;
}

export interface CatObesityResult {
  chest: number;
  leg: number;
  fbmi: number;
  category: ObesityCategory;
  categoryLabel: string;
  banner: ObesityBanner;
}
