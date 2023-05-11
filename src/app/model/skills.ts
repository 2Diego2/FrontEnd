export class Skills {
    idSkills: number;
    nombre: string;
    habilidadBlandaNombre: string;
    habilidadBlandaPorcentaje: number;
    habilidadDuraNombre: string;
    habilidadDuraPorcentaje: number;
    editar: number;
    borrar: number;
  
    constructor(
      idSkills: number,
      nombre: string,
      habilidadBlandaNombre: string,
      habilidadBlandaPorcentaje: number,
      habilidadDuraNombre: string,
      habilidadDuraPorcentaje: number,
      editar: number,
      borrar: number
    ) {
      this.idSkills = idSkills;
      this.nombre = nombre;
      this.habilidadBlandaNombre = habilidadBlandaNombre;
      this.habilidadBlandaPorcentaje = habilidadBlandaPorcentaje;
      this.habilidadDuraNombre = habilidadDuraNombre;
      this.habilidadDuraPorcentaje = habilidadDuraPorcentaje;
      this.editar = editar;
      this.borrar = borrar;
    }
  }
  