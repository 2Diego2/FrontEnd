import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  editMode = false;
  editarImagenBannerVariable = false;
  editarImagenPerfilVariable = false;
  textoSobreMi = 'Aunque no tengo experiencia laboral previa, estoy comprometido a aprender y crecer profesionalmente en el área de la informática y el desarrollo de software. Soy un trabajador dedicado y motivado, siempre dispuesto a enfrentar nuevos desafíos y adquirir nuevas habilidades.';
  imagenBanner = 'assets/img/codigo-binario-flujo-tecnologia-ilustracion-digital-fondo-matriz-blanca-programacion-codificacion-pirateria-encriptacion_658411-77.jpg';
  imagenPerfil = 'assets/img/IMG-20220211-WA0081.jpg';

  constructor() {}

  ngOnInit(): void {}

  guardarCambios() {
  this.textoSobreMi = '';
  this.editarImagenBannerVariable = false;
  this.editarImagenPerfilVariable = false;
  this.editMode = false;
}

cancelarCambios() {
  this.textoSobreMi = '';
  this.editarImagenBannerVariable = false;
  this.editarImagenPerfilVariable = false;
  this.editMode = false;
}

  eliminarSobreMi() {
  this.textoSobreMi = '';
  }

  eliminarImagenBanner() {
    this.imagenBanner = '';
  }
  eliminarImagenPerfil() {
    this.imagenPerfil = '';
  }
  
  onImagenPerfilSeleccionada(event: any) {
    this.imagenPerfil = event.target.files[0];
  }
  


  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenPerfil = e.target.result;
    };
    reader.readAsDataURL(file);
  }


  onFileSelect(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenBanner = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  

  editarImagenBanner() {
    this.editarImagenBannerVariable = true;
  }

  editarImagenPerfil() {
    let nuevaImagen = prompt('Ingrese la URL de la nueva imagen:');
    if (nuevaImagen != null) {
      this.imagenPerfil = nuevaImagen;
    }
  }
}
