import axios from 'axios'

import { PINATA_API_URL } from '../constants'

export default axios.create({ baseURL: PINATA_API_URL })
