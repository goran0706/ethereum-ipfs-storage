import { ReactNode, createContext, useState } from 'react'

interface ISearchContextType {
  query: string
  updateQuery: (query: string) => void
}

export const SearchContext = createContext<ISearchContextType | null>(null)

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('')
  const updateQuery = (query: string) => setQuery(query)
  return <SearchContext.Provider value={{ query, updateQuery }}>{children}</SearchContext.Provider>
}

export default SearchProvider
