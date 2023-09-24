declare global {
    namespace Express {
        export interface Request {
            fingerprint?: string
        }
    }
}

export {}