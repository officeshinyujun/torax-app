import { create } from "zustand";

interface SearchHistoryItem {
    id: string;
    query: string;
}

interface ISearchStore {
    searchHistory: SearchHistoryItem[];
    currentQuery: string;
    setSearchHistory: (history: SearchHistoryItem[]) => void;
    setCurrentQuery: (query: string) => void;
    addToSearchHistory: (query: string) => void;
}

export const useSearchStore = create<ISearchStore>((set, get) => ({
    searchHistory: [],
    currentQuery: '',
    setSearchHistory: (history: SearchHistoryItem[]) => set({ searchHistory: history }),
    setCurrentQuery: (query: string) => set({ currentQuery: query }),
    addToSearchHistory: (query: string) => {
        if (!query.trim()) return;
        const newItem = { id: Date.now().toString(), query };
        set(state => ({
            searchHistory: [newItem, ...state.searchHistory],
            currentQuery: query
        }));
    },
}));