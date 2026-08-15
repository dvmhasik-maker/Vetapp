export type Species = 'dog' | 'cat';

export interface PatientInfo {
  name: string;
  breed: string;
  sex: string;
  age: string;
}

export interface DogInput {
  weight: string;
  LVOT_len: string;
  LVIDd: string;
  LVIDs: string;
  FS: string;
  EPSS: string;
  LA_Ao: string;
  Ao: string;
  MPA_Ao: string;
  RPAD: string;
  TAPSE: string;
  PA_vel: string;
  PV_AT: string;
  PV_ET: string;
  PR_vel: string;
  MV_E: string;
  DTE: string;
  MV_A: string;
  MCO: string;
  MV_Eprime: string;
  MV_Sprime: string;
  MR_Vol: string;
  MR_V1V3: string;
  TR_vel: string;
  LVOT_VTI: string;
  AV_vel: string;
  LV_ET: string;
  LV_PEP: string;
  HR: string;
  IVRT: string;
}

export interface CatInput {
  weight: string;
  LVform: string[];
  SEC: string;
  D2_IVSd: string;
  D2_LVPWd: string;
  LVOT_len: string;
  LVOT_turb: string;
  SAM: string;
  D2_LVwall: string;
  PM: string;
  M_IVSd: string;
  M_LVIDd: string;
  M_LVPWd: string;
  M_LVIDs: string;
  FS: string;
  EPSS: string;
  LA_len: string;
  LA_Ao: string;
  M_LAFS: string;
  PA_turb: string;
  PA_vel: string;
  PR_vel: string;
  MV_E: string;
  MV_A: string;
  MV_Eprime: string;
  MV_Aprime: string;
  MV_Sprime: string;
  MR_vel: string;
  MR_VTI: string;
  TR_vel: string;
  LVOT_VTI: string;
  HR: string;
  AV_vel: string;
  ET: string;
  PEP: string;
}

export interface EchoResultItem {
  group?: string;
  name: string;
  val: number;
  normal: number | null;
  range: [number, number] | null;
  inv: boolean;
  lo: string;
  hi: string;
  mid?: string;
  normalLabel?: string;
  // 추가 경계값으로 range 내부를 여러 구간(예: 경계/경증/중등도)으로 세분화할 때 사용.
  // splits는 range[0]~range[1] 사이 오름차순 경계값, midLabels/midColors 길이는 splits.length + 1.
  splits?: number[];
  midLabels?: string[];
  midColors?: string[];
  // range의 lo/hi 양쪽이 모두 비정상이지만 중증도가 다른 양방향 항목(예: 이완기능부전 stage1 vs stage3)에서
  // 어느 쪽이 더 경미한지 명시할 때 사용. 지정 없으면 기본값(중증=빨강)이 적용됨.
  loColor?: string;
  hiColor?: string;
}

export interface CatDiagnosis {
  label: string;
  thrombosisRisk?: string;
  lvotTurbulence?: string;
  samPresent?: string;
  pvTurbulence?: string;
  finalStage?: string;
}

export interface EchoResult {
  species: Species;
  patientInfo: PatientInfo;
  items: EchoResultItem[]; // For Dog
  catDiagnosis?: CatDiagnosis; // For Cat
  catStageRows?: any[];
  catExtraRows?: any[];
  date: string;
}
