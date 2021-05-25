export interface JwtModel {
    token: string;
    type: string;
    nombreUsuario: string;
    authorities: string[];
}
