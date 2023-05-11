import { Sobremi } from './sobremi'; 

export class Educacion {
  idEducacion?: number;
  nombreInstitucion: string;
  logoInstitucion: string;
  nivelEstudios: string;
  sobremi: Sobremi;
  editar: number;
  borrar: number;

  constructor(
    nombreInstitucion: string,
    logoInstitucion: string,
    nivelEstudios: string,
    sobremi: Sobremi,
    editar: number,
    borrar: number
  ) {
    this.nombreInstitucion = nombreInstitucion;
    this.logoInstitucion = logoInstitucion;
    this.nivelEstudios = nivelEstudios;
    this.sobremi = sobremi;
    this.editar = editar;
    this.borrar = borrar;
  }
}
