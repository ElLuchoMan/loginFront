export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    roles: string[];
    password: string;

    constructor(nombre: string, nombreUsuario: string, email: string, password: string) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.roles = ['user'];
    }
}
