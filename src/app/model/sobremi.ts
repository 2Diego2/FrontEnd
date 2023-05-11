export class Sobremi {
    idSobremi: number;
    banner: string;
    imagenPerfil: string;
    nombre: string;
    apellido: string;
    informacion: string;
    editar: number;
    borrar: number;
  
    constructor(
      idSobremi: number,
      banner: string,
      imagenPerfil: string,
      nombre: string,
      apellido: string,
      informacion: string,
      editar: number,
      borrar: number
    ) {
      this.idSobremi = idSobremi;
      this.banner = banner;
      this.imagenPerfil = imagenPerfil;
      this.nombre = nombre;
      this.apellido = apellido;
      this.informacion = informacion;
      this.editar = editar;
      this.borrar = borrar;
    }
  }
  