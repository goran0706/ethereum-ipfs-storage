import { useContext } from 'react'

import { SearchContext } from '../context/SearchContext'

const useSearchQuery = () => {
  const searchContext = useContext(SearchContext)

  if (!searchContext) {
    throw new Error('useSearchQuery has to be used within <SearchContext.Provider>')
  }

  return searchContext
}

export default useSearchQuery
