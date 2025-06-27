'use client';
import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

export type SelectedSortType = 'lowestPriceFirst' | 'highestPriceFirst' | 'ascending' | 'descending' | null

type AppContextType = {
  // Filter state
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  selectedSort: SelectedSortType;
  setSelectedSort: Dispatch<SetStateAction<SelectedSortType>>

  // Product name state
  selectedProductName: string | null;
  setSelectedProductName: Dispatch<SetStateAction<string | null>>;

  // Cart counter state
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState('');
  const [selectedProductName, setSelectedProductName] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<SelectedSortType>(null)
  const [cartCount, setCartCount] = useState(0)

  return (
    <AppContext.Provider value={{
      category,
      setCategory,
      selectedProductName,
      setSelectedProductName,
      selectedSort,
      setSelectedSort,
      cartCount,
      setCartCount,
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook (renamed to reflect broader scope)
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}