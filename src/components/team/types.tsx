export interface ProfileData {
  name: string;
  role: string;
  picture: string;
  biography: string;
  linkedin: string;
}

export interface CohortData {
  header: string;
  profiles: ProfileData[];
}

export type SMIFData = Record<string, CohortData>;
