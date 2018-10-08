import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  city=[{"name":"Tunis", "pop":1000},{"name":"Paris", "pop":1500},{"name":"Berlin", "pop":1700},
        {"name":"NewYork", "pop":2000.500},
        {"name":"Pekin", "pop":2500.300}]
  chart:any=[];
  chart2:any=[];
  chart3:any=[];
  chart4:any=[];
  i:number;
  citys:any=[];
  popul:any=[];
  names:any=[];
  popls:any=[];
  mode=0;

  
 
  

  ngOnInit() {
    
  }
    getCurves(){

    for(this.i=0;this.i<this.city.length; this.i++){
     
      this.citys=this.city[this.i];
      this.names.push(String(this.city[this.i].name))
      console.log(this.city[this.i].name)
      this.popls.push(this.city[this.i].pop) 
     // this.chart=this.chart[this.i]
      }
      
    this.chart=new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: this.names,
  
        datasets: [{
          label: "Population (milles)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: this.popls
        }]
      },
      options: {
        legend:{
          display:true
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
        title: {
          display: true,
          text: 'Abdou_Guesmi Angular 6'
        }
      }
  });

  this.chart2=new Chart(document.getElementById("Pie-chart"), {
    type: 'pie',
    data: {
      labels: this.names,

      datasets: [{
        label: "Population (milles)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: this.popls
      }]
    },
    options: {
      legend:{
        display:true
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
      title: {
        display: true,
        text: 'Abdou_Guesmi Angular 6'
      }
    }
});
   
this.chart3=new Chart(document.getElementById("horizontalBar-chart"), {
  type: 'horizontalBar',
  data: {
    labels: this.names,

    datasets: [{
      label: "Population (milles)",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      data: this.popls
    }]
  },
  options: {
    legend:{
      display:true
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  },
    title: {
      display: true,
      text: 'Abdou_Guesmi Angular 6'
    }
  }
});
this.chart3=new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: this.names,

    datasets: [{
      label: "Population (milles)",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      data: this.popls
    }]
  },
  options: {
    legend:{
      display:true
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  },
    title: {
      display: true,
      text: 'Abdou_Guesmi Angular 6'
    }
  }
});
  }
    


}