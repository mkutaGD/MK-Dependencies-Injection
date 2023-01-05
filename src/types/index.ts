export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  common: {
    api: {
      path: string;
      resources: { [key: string]: string };
    }
  }
  server: {
    port: number
  }
}
