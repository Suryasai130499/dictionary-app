import { create } from 'zustand';

type Phonetic = {
  text: string;
  audio?: string;
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
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Mean[];
};

type MeaningProps = {
  meaning: Meaning[];
  setMeaning: (value: Meaning[]) => void;
};

const meaningStore = create<MeaningProps>((set) => ({
  meaning: [
    {
      word: 'hello',
      phonetic: 'həˈləʊ',
      phonetics: [
        {
          text: 'həˈləʊ',
          audio:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
        },
        {
          text: 'hɛˈləʊ',
        },
      ],
      origin:
        'early 19th century: variant of earlier hollo ; related to holla.',
      meanings: [
        {
          partOfSpeech: 'exclamation',
          definitions: [
            {
              definition:
                'used as a greeting or to begin a phone conversation.',
              example: 'hello there, Katie!',
              synonyms: [],
              antonyms: [],
            },
          ],
        },
        {
          partOfSpeech: 'noun',
          definitions: [
            {
              definition: 'an utterance of ‘hello’; a greeting.',
              example: 'she was getting polite nods and hellos from people',
              synonyms: [],
              antonyms: [],
            },
          ],
        },
        {
          partOfSpeech: 'verb',
          definitions: [
            {
              definition: 'say or shout ‘hello’.',
              example: 'I pressed the phone button and helloed',
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
  ],
  setMeaning: (value: Meaning[]) =>
    set(() => ({
      meaning: value,
    })),
}));

export default meaningStore;
