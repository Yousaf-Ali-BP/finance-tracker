export interface TokenService {
    generateToken(userId: string): string
    verify(token: string): {sub:string}
}