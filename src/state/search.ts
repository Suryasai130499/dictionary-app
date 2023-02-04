import { create } from 'zustand';

type SearchType = {
  text: string;
  setText: (value: string) => void;
};

const searchStore = create<SearchType>((set) => ({
  text: 'hello',
  setText: (value: string) =>
    set(() => ({
      text: value,
    })),
}));

export default searchStore;
