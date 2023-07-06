import { Center, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEvent, FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'

import useSearchQuery from '../hooks/useSearchQuery'

const Search = () => {
  const { query, updateQuery } = useSearchQuery()

  const handleChange = (event: ChangeEvent) => updateQuery((event.target as HTMLInputElement).value)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    updateQuery((event.target as HTMLInputElement).value)
  }

  return (
    <Center mb={8}>
      <form onSubmit={handleSubmit}>
        <InputGroup minW={{ sm: 'sm', md: 'md', lg: 'lg' }}>
          <InputLeftElement children={<BsSearch />} />
          <Input
            placeholder='Search files'
            variant='filled'
            value={query}
            onChange={handleChange}
          />
        </InputGroup>
      </form>
    </Center>
  )
}

export default Search
