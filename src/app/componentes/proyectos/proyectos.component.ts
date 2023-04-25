import { Component } from '@angular/core';

interface Proyecto {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyecto[] = [
    { id: 1, imagen: 'assets/img/banner-ok-argentina-programa.jpg', titulo: 'Proyecto Integrador Portfolio Web Full Stack', descripcion: 'Objetivo: Desarrollar una aplicación web full stack, que mostrará: tus datos personales, estudios cursados, experiencia laboral, conocimiento de la tecnologías' },
    { id: 2, imagen: 'assets/img/cargando.jpg', titulo: 'Proyecto para mi emprendimiento personal', descripcion: '¡En progreso! Pagina web profesional para mi emprendimiento "chipados.sf" (instagram).' },
    { id: 3, imagen: 'assets/img/cargando.jpg', titulo: 'Pagina para mi escuela.', descripcion: '¡En progreso! Pagina web profesional para mi colegio "Escuela Normal Superior y Superior de Comercio Nro 46 Domingo Guzmán Silva".' }
  ];

  editingProyecto: Proyecto | null = null;
  newProyecto: Proyecto = { id: 0, imagen: '', titulo: '', descripcion: '' };

  seleccionarArchivo(evento: any) {
    const archivo = evento.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        // Aquí puedes utilizar la información del archivo cargado
        console.log(reader.result);
      };
    }
  }
  
  nuevoProyecto() {
    this.newProyecto = { id: 0, imagen: '', titulo: '', descripcion: '' };
    this.editingProyecto = this.newProyecto;
  }
  


  getNextId(): number {
    return this.proyectos.length > 0 ? Math.max(...this.proyectos.map(p => p.id)) + 1 : 1;
  }

  editarProyecto(proyecto: Proyecto) {
    this.editingProyecto = proyecto;
  }

  guardarProyecto() {
    if (this.editingProyecto) {
      // Actualizar el proyecto existente
      this.proyectos = this.proyectos.map(p => p.id === this.editingProyecto!.id ? this.editingProyecto! : p);
    } else {
      // Agregar un nuevo proyecto
      this.proyectos.push({ id: this.getNextId(), imagen: this.newProyecto.imagen, titulo: this.newProyecto.titulo, descripcion: this.newProyecto.descripcion });
    }
    this.editingProyecto = null;
    this.newProyecto = { id: 0, imagen: '', titulo: '', descripcion: '' };
  }

  cancelarEdicion() {
    this.editingProyecto = null;
    this.newProyecto = { id: 0, imagen: '', titulo: '', descripcion: '' };
  }

  eliminarProyecto(proyecto: Proyecto) {
    if (proyecto != null) {
      this.proyectos = this.proyectos.filter(p => p.id !== proyecto?.id);
      this.editingProyecto = null;
    }
  }

  cambiarImagen(event: any, proyecto: Proyecto) {
    if (event != null && proyecto != null) {
      const input = event.target as HTMLInputElement;
      if (input.files != null && input.files[0] != null) {
        const reader = new FileReader();
        reader.onload = (e) => {
          proyecto.imagen = e.target?.result as string;
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  }

}
