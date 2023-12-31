import { VStack } from '@chakra-ui/react'

import { FileCard, FileGrid, FileHeading, Search, Spinner } from '../components'
import requireConnect from '../components/hoc/requireConnection'
import useFileReads from '../hooks/useFileReads'
import useSearchQuery from '../hooks/useSearchQuery'
import { filterData } from '../services'

const HomePage = () => {
  const { query } = useSearchQuery()
  const { data, error, isError, isLoading } = useFileReads()
  const filteredData = filterData(data, query)

  if (isLoading) return <Spinner />

  if (isError) throw error

  return (
    <VStack padding='1rem 2rem'>
      <FileHeading heading='All Files' />
      <Search />
      <FileGrid list={filteredData} Component={FileCard} />
    </VStack>
  )
}

const EnhancedComponent = requireConnect(HomePage)

export default EnhancedComponent
