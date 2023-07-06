import { Spinner, VStack } from '@chakra-ui/react'

import { FileCard, FileGrid, FileHeading, Search } from '../components'
import requireConnect from '../components/hoc/requireConnection'
import useFileRead from '../hooks/useFileRead'
import useSearchQuery from '../hooks/useSearchQuery'
import { IFileInfo } from '../interfaces'
import { filterData } from '../services'

const NFTsPage = () => {
  const { query } = useSearchQuery()
  const { data, error, isError, isLoading } = useFileRead('getNFTs')
  const filteredData = filterData(data as IFileInfo[], query)

  if (isLoading) return <Spinner />

  if (isError) throw error

  return (
    <VStack padding='1rem 2rem'>
      <FileHeading heading='NFTs' />
      <Search />
      <FileGrid list={filteredData} Component={FileCard} />
    </VStack>
  )
}

const EnhancedComponent = requireConnect(NFTsPage)

export default EnhancedComponent
