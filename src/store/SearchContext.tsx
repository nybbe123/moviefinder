import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface Props {
  children: ReactNode
}

interface ContextValue {
  isConfirmed: boolean
}

export const SearchContext = createContext<ContextValue>({
  isConfirmed: false
})

function SearchProvider({ children }: Props) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <SearchContext.Provider value={{ isConfirmed }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

export const useKey = () => useContext(SearchContext)
