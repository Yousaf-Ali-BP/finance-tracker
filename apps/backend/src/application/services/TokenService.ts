export interface TokenService {
    generateToken(userId: string): string
}