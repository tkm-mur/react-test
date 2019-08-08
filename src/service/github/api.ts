import axios from 'axios';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);

  return async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}/members`);

      const members: any = response.data;

      return members;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
};
