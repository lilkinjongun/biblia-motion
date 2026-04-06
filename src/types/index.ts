export interface Section {
  id: string;
  title: string;
  icon: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
}

export interface ColorInfo {
  name: string;
  hex: string;
  usage: string;
  message: string;
}

export interface TypographyInfo {
  element: string;
  font: string;
  weight: string;
  size: string;
  usage: string;
}

export interface TimingInfo {
  action: string;
  duration: string;
  easing: string;
  description: string;
}

export interface PlatformSpec {
  platform: string;
  ratio: string;
  resolution: string;
  usage: string;
}

export interface SoundInfo {
  action: string;
  sound: string;
  tone: string;
  duration: string;
}

export interface Principle {
  number: number;
  title: string;
  description: string;
}
