interface IDatabaseConfig {
  MONGO_URL: string,
  MONGO_USER?: string | undefined,
  MONGO_PASSWORD?: string | undefined,
  MONGO_HOST: string,
  MONGO_PORT: number,
  MONGO_NAME?: string | undefined,
  MONGO_CONNECTOR: string,
  MONGO_DATABASE: string
}

export const databaseConfig = (env: IDatabaseConfig) => {
  return {
    MONGO_URL: env.MONGO_URL,
    MONGO_NAME: env.MONGO_NAME,
    MONGO_CONNECTOR: env.MONGO_CONNECTOR,
    MONGO_HOST: env.MONGO_HOST,
    MONGO_PORT: env.MONGO_PORT,
    MONGO_USER: env.MONGO_USER ?? '',
    MONGO_PASSWORD: env.MONGO_PASSWORD ?? '',
    MONGO_DATABASE: env.MONGO_DATABASE,
    useNewUrlParser: true
  }
}
