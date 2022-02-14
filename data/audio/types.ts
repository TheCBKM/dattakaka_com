import { language } from "../types";

export interface AudioCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  language: language;
  audioSeries: AudioSeries[];
  keywords: string[];
}

export interface AudioSeries {
  id: string;
  name: string;
  description: string;
  image: string;
  episodes: AudioEpisode[];
  language: language;
  keywords: string[];
  audioCollectionId: string;
}

export interface AudioEpisode {
  id: string;
  name: string;
  description: string;
  image: string;
  audio: string;
  language: language;
  keywords: string[];
  audioSeriesId: string;
  audioCollectionId: string;
}

export const FeaturedAudioCollection: string[] = ["1"];
export const FeaturedAudioSeries: string[] = ["1", "2"];

export const allCollection: string[] = ["1", "2"];
