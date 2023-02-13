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
            
            data: [50,100]
        },
        {
            label: "Ongoing",
            
            data: [35,85]
        },
        {
            label: "Completed",
            
            data: [25,65]
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      //indexAxis: 'y',
        barValueSpacing: 20,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
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
      labels: ['Component 1', 'Component 2', 'Component 3'],
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

  const ctx4 = document.getElementById('myChart4');
  //Chart.defaults.font.size = 14;
  //ctx.height = 300;

  var data = {
    labels: ["Finance", "RRR", "Works", "Health", "Education", "Science & Tech", "Justice"],
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
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
    }
});

  //Circular Progress Bar
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

//Responsive Fonts
function responsiveFonts(){
  if (window.outerWidth > 1700){
    Chart.defaults.font.size = 25;
  }
};
