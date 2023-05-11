import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Validators } from '@angular/forms';


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
  bannerOriginal = 'assets/img/codigo-binario-flujo-tecnologia-ilustracion-digital-fondo-matriz-blanca-programacion-codificacion-pirateria-encriptacion_658411-77.jpg';
  imagenPerfil: string = '';
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  
  guardarCambios() {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('imagenPerfil', this.selectedFile, this.selectedFile.name);
      this.http.post('/guardarImagenPerfil', uploadData).subscribe({
        next: () => {
          console.log('Imagen de perfil actualizada exitosamente');
          if (this.selectedFile) {
            this.imagenPerfil = URL.createObjectURL(this.selectedFile);
          }
          this.editarImagenPerfilVariable = false;
        },
        error: (error) => {
          console.error('Error al actualizar la imagen de perfil', error);
        }
      });
    }
  
    this.editarImagenBannerVariable = false;
    this.editarImagenPerfilVariable = false;
    this.editMode = false;
  }
  
  

cancelarCambios() {
  this.textoSobreMi = 'Aunque no tengo experiencia laboral previa, estoy comprometido a aprender y crecer profesionalmente en el área de la informática y el desarrollo de software. Soy un trabajador dedicado y motivado, siempre dispuesto a enfrentar nuevos desafíos y adquirir nuevas habilidades.';
  this.editarImagenBannerVariable = false;
  this.editarImagenPerfilVariable = false;
  this.imagenBanner = this.bannerOriginal;
  this.imagenPerfil = 'assets/img/IMG-20220211-WA0081.jpg';
  this.editMode = false;
}

  eliminarSobreMi() {
  this.textoSobreMi = '';
  }

  eliminarImagenBanner() {
   if (confirm('¿Está seguro de que desea eliminar el banner?')) {

    const fileToDelete = this.imagenBanner;
    this.imagenBanner = '';
    this.editarImagenBannerVariable = false;

    this.http.delete('//' + fileToDelete.split('//')[1])
      .subscribe({
        next: () => {
          console.log('Imagen eliminada exitosamente');
        },
        error: (error) => {
          console.error('Error al eliminar la imagen', error);
          this.imagenBanner = fileToDelete;
        }
      });
  }
}
eliminarImagenPerfil() {
  if (confirm('¿Está seguro de que desea eliminar la imagen de perfil?')) {
    this.http.delete('/eliminarImagenPerfil').subscribe({
      next: () => {
        console.log('Imagen de perfil eliminada exitosamente');
        this.imagenPerfil = ''; 
      },
      error: (error) => {
        console.error('Error al eliminar la imagen de perfil', error);
      }
    });
  }
}


onImagenPerfilSeleccionada(event: any) {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageData = e.target.result;
      // Hacer una solicitud HTTP POST para enviar imageData al servidor y actualizar la imagen de perfil
      this.http.post('/actualizarImagenPerfil', { imageData }).subscribe({
        next: () => {
          console.log('Imagen de perfil actualizada exitosamente');
          this.imagenPerfil = imageData;
        },
        error: (error) => {
          console.error('Error al actualizar la imagen de perfil', error);
        }
      });
    };
    reader.readAsDataURL(file);
  }
}


  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagenBanner = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.editarImagenBannerVariable = true;
  }

  onFileSelect(event: any) {
  this.selectedFile = event.target.files?.length ? event.target.files[0] : null;
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenBanner = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.editarImagenBannerVariable = true;
  }
}

  
  

  editarImagenBanner() {
    this.editarImagenBannerVariable = true;
  }
  
 
editarImagenPerfil(event: any) {
  const url = event.target.value;
  const urlValida = Validators.pattern('^(ftp|http|https):\/\/[^ "]+$')(url);

  if (!urlValida) {
    console.error('La URL ingresada no es válida');
    event.target.value = null;
    return;
  }

  this.imagenPerfil = url;
}
}