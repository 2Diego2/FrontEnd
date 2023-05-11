import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


interface Educacion {
  id: number;
  nombre: string;
  institucion: string;
  fecha: string;
  logo: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educaciones: Educacion[] = [
    { id: 1, nombre: 'Técnico en informática profesional y personal', institucion: 'E.E.T.P. N°480 "Manuel Belgrano"', fecha: '2021', logo: "assets/img/manuelbelgrano480.jpg.png" },
    { id: 2, nombre: 'Técnico Superior en Desarrollo de Software', institucion: 'Escuela Normal Superior y Superior de Comercio Nro 46 Domingo Guzmán Silva', fecha: '2023', logo: "assets/img/domingosilva.jpg" },
  ];

  editando = false;
  nombreEducacion = '';
  institucionEducacion = '';
  fechaEducacion = '';
  idEducacion = 0;

  constructor(private modalService: NgbModal) {}

  editarEducacion(educacion: Educacion) {
    // abrir el formulario para editar la entrada de educación
    this.editando = true;
    this.nombreEducacion = educacion.nombre;
    this.institucionEducacion = educacion.institucion;
    this.fechaEducacion = educacion.fecha;
    this.idEducacion = educacion.id;
  }

  eliminarEducacion(id: number) {
    // eliminar la entrada de educación con el id proporcionado
    this.educaciones = this.educaciones.filter(educacion => educacion.id !== id);
  }

  cancelarEdicion() {
    // cancelar la edición y restablecer los valores por defecto
    this.editando = false;
    this.nombreEducacion = '';
    this.institucionEducacion = '';
    this.fechaEducacion = '';
    this.idEducacion = 0;
  }

  guardarEducacion() {
    // guardar los cambios en la entrada de educación
    const index = this.educaciones.findIndex(educacion => educacion.id === this.idEducacion);
    if (index >= 0) {
      this.educaciones[index].nombre = this.nombreEducacion;
      this.educaciones[index].institucion = this.institucionEducacion;
      this.educaciones[index].fecha = this.fechaEducacion;
    } else {
      // si no se encuentra la entrada, se crea una nueva con un nuevo id
      const newId = this.educaciones.length + 1;
      const newEducacion: Educacion = {
        id: newId,
        nombre: this.nombreEducacion,
        institucion: this.institucionEducacion,
        fecha: this.fechaEducacion,
        logo: "assets/img/domingosilva.jpg"
      };
      this.educaciones.push(newEducacion);
    }
    // restablecer los valores por defecto y cerrar el formulario de edición
    this.editando = false;
    this.nombreEducacion = '';
    this.institucionEducacion = '';
    this.fechaEducacion = '';
    this.idEducacion = 0;
  }
}





