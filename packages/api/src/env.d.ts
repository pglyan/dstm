declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      PORT: number
      DB_PATH: string
    }
  }
}

export {}
