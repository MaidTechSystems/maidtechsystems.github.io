// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//Charts
  const ctx = document.getElementById('myChart');
  //Chart.defaults.font.size = 14;
  //ctx.height = 300;

  var data = {
    labels: ["State Projects", "Partner Projects"],
    datasets: [
        {
            label: "Total",
            backgroundColor:"#0095ffd5",
            data: [50,100]
        },
        {
            label: "Ongoing",
            backgroundColor:"orange",
            data: [35,85]
        },
        {
            label: "Completed",
            backgroundColor:"#02d34b",
            data: [25,65]
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        legend: {
            display: false
        },
    },
      //indexAxis: 'y',
        barValueSpacing: 20,
        scales: {
          x: {
            ticks:{
              color: 'black'
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks:{
              color: 'black'
            },
            grid: {
              display: false
            }
          }
        }
    }
});


  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Total', 'State', 'Partners'],
      datasets: [{
        label: 'Component Two',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Finance', 'MRRR', 'Works', 'Health', 'Education', 'Science & Tech', 'Agriculture'],
      datasets: [{
        label: 'Budget',
        data: [50,100,30,85,25,70,15],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx4 = document.getElementById('myChart4');
  //Chart.defaults.font.size = 14;
  //ctx.height = 300;

  var data = {
    labels: ["Finance", "RRR", "Works", "Health", "Education", "Science & Tech", "Agriculture"],
    datasets: [
        {
            label: "Budgeted",
            
            data: [50,100,30,85,25,70,15]
        },
        {
            label: "Utilized",
            
            data: [35,85,20,50,10,60,5]
        }
    ]
};

var myBarChart = new Chart(ctx4, {
    type: 'bar',
    data: data,
    options: {
      //indexAxis: 'y',
        barValueSpacing: 20,
        scales: {
          x: {
            ticks:{
              color: 'black'
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks:{
              color: 'black'
            },
            grid: {
              display: false
            }
          }
        }
    }
});


const ctx5 = document.getElementById('myChart5');
  new Chart(ctx5, {
    type: 'doughnut',
    data: {
      labels: ['Finance', 'MRRR', 'Works', 'Health', 'Education', 'Science & Tech', 'Agriculture'],
      datasets: [{
        label: 'Budget',
        data: [50,100,30,85,25,70,15],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  //Circular Progress Bars
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 35;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #00ff59 ${progressValue * 3.6}deg,
      #596d6060 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressBar1 = document.querySelector(".circular-progress1");
let valueContainer1 = document.querySelector(".value-container1");

let progressValue1 = 0;
let progressEndValue1 = 35;
let speed1 = 50;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      #00ff59 ${progressValue1 * 3.6}deg,
      #596d6060 ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 35;
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #00ff59 ${progressValue2 * 3.6}deg,
      #596d6060 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

let progressBar3 = document.querySelector(".circular-progress3");
let valueContainer3 = document.querySelector(".value-container3");

let progressValue3 = 0;
let progressEndValue3 = 35;
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
      #00ff59 ${progressValue3 * 3.6}deg,
      #596d6060 ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);

let progressBar4 = document.querySelector(".circular-progress4");
let valueContainer4 = document.querySelector(".value-container4");

let progressValue4 = 0;
let progressEndValue4 = 100;
let speed4 = 50;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
      #00ff59 ${progressValue4 * 3.6}deg,
      #596d6060 ${progressValue4 * 3.6}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);

//Responsive Fonts
function responsiveFonts(){
  if (window.outerWidth > 1700){
    Chart.defaults.font.size = 25;
  }
};


//Google Charts
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }