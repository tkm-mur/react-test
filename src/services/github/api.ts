import axios from 'axios'
import {User} from './model'

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
}

export const getMemberFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  }

  const instance = axios.create(config)

  return async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}`)
      const members: User[] = response.data
      return members
    } catch (e) {
      throw e
    }
  }
}
