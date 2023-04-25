import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-my-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class MyComponentComponent implements OnInit {
  myChart: Chart<"doughnut", any, any> | null = null;
  myChart2:Chart<"doughnut", any, any> | null = null;
  constructor() { }

  ngOnInit2(): void{
    
  }

  ngOnInit(): void {
    // Creamos el gráfico
    this.myChart = new Chart('myChart', {
      type: 'doughnut', // Tipo de gráfico redondo
      data: {
        labels: ['Html', 'Css', 'Angular'], // Nombres de las habilidades duras
        datasets: [{
          label: '% habilidad', // Etiqueta del porcentaje
          data: [80, 50, 30], // Porcentaje para cada habilidad
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ],
          hoverOffset: 4 // Distancia del borde al hacer hover
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' // Posición de la leyenda
          },
          tooltip: {
            callbacks: {
              label: function(context:any) { // Función para mostrar el porcentaje en el tooltip
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += Math.round(context.parsed) + '%';
                }
                return label;
              }
            }
          }
        }
      }
    });

    this.myChart2 = new Chart('myChart2', {
      type: 'doughnut',
      data: {
        labels: ['Comunicación efectiva', 'Liderazgo', 'Trabajo en equipo'],
        datasets: [{
          label: '% habilidad',
          data: [90, 60, 80],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context:any) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += Math.round(context.parsed) + '%';
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  deleteHardSkills() {
    // Eliminamos el gráfico
    this.myChart?.destroy();
    this.myChart = null;
  }

  deleteSoftSkills() {
    // Eliminamos el gráfico
    this.myChart2?.destroy();
    this.myChart2 = null;
  }
}


