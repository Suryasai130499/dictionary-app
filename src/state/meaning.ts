import { create } from 'zustand';

type Phonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
};

type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

type Mean = {
  partOfSpeech: string;
  definitions: Definition[];
};

type Meaning = {
  word?: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  origin?: string;
  meanings?: Mean[];
  sourceUrls?: string[];
};

type Error = {
  message?: string;
  resolution?: string;
  title?: string;
};

type MeaningProps = {
  meaning: Meaning;
  setMeaning: (value: Meaning) => void;
  error: Error;
  setError: (value: Error) => void;
};

const meaningStore = create<MeaningProps>((set) => ({
  meaning: {},
  setMeaning: (value: Meaning) =>
    set(() => ({
      meaning: value,
    })),
  error: {},
  setError: (value: Error) =>
    set(() => ({
      error: value,
    })),
}));

export default meaningStore;
