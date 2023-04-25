import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  icons = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/diego-lautaro-abelleyra-892735244/' },
    { name: 'github', url: 'https://github.com/2Diego2' },
    { name: 'codepen', url: 'https://codepen.io/2Diego2' }
  ];

  editIcon(iconName: string) {
    const newUrl = prompt(`Ingrese la nueva dirección https para ${iconName}`);
    if (newUrl) {
      const iconIndex = this.icons.findIndex(icon => icon.name === iconName);
      if (iconIndex !== -1) {
        this.icons[iconIndex].url = newUrl;
      } else {
        console.log('Icono inválido');
      }
    }
  }

  deleteIcon(iconName: string) {
    this.icons = this.icons.filter(icon => icon.name !== iconName);
  }

  addIcon() {
    const newIcon = prompt('Ingrese el nombre del nuevo icono (debe ser un nombre válido de FontAwesome)');
    const newUrl = prompt('Ingrese la dirección https para el nuevo icono');
    if (newIcon && newUrl) {
      this.icons.push({ name: newIcon, url: newUrl });
    } else {
      console.log('Icono inválido');
    }
  }
}

