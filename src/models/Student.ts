export class Student {
  id: number;
  dni: string;
  nombre: string;
  direccion: string;
  edad: number;
  email: string;
  asignatura: string;

  constructor(
    id: number,
    dni: string,
    nombre: string,
    direccion: string,
    edad: number,
    email: string,
    asignatura: string
  ) {
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.direccion = direccion;
    this.edad = edad;
    this.email = email;
    this.asignatura = asignatura;
  }
}
