import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class MyComponentComponent implements OnInit {
  myChart: Chart<"doughnut", any, any> | null = null;
  myChart2:Chart<"doughnut", any, any> | null = null;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: ['Html', 'Css', 'Angular'],
        datasets: [{
          label: '% habilidad',
          data: [40, 40, 20],
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

    this.myChart2 = new Chart('myChart2', {
      type: 'doughnut',
      data: {
        labels: ['Comunicación efectiva', 'Liderazgo', 'Trabajo en equipo'],
        datasets: [{
          label: '% habilidad',
          data: [60, 20 , 20],
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
    this.myChart?.destroy();
    this.myChart = null;
  }

  deleteSoftSkills() {
    this.myChart2?.destroy();
    this.myChart2 = null;
  }
}
