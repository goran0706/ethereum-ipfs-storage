import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components'
import {
  AudiosPage,
  DocumentsPage,
  ErrorPage,
  HomePage,
  NFTsPage,
  PhotosPage,
  UploadPage,
  VideosPage
} from './pages'
import FileDetailsPage from './pages/FileDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'nfts', element: <NFTsPage /> },
      { path: 'photos', element: <PhotosPage /> },
      { path: 'videos', element: <VideosPage /> },
      { path: 'audios', element: <AudiosPage /> },
      { path: 'documents', element: <DocumentsPage /> },
      { path: 'upload', element: <UploadPage /> },
      { path: '*', element: <FileDetailsPage /> }
    ]
  }
])

export default router
