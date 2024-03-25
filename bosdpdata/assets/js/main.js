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

  var data = {
    labels: ["Component 1"],
    datasets: [
        {
            label: "Total",
            backgroundColor: "#0095ffd5",
            data: [320],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
        {
            label: "MMC",
            backgroundColor:"#0095ffd5",
            data: [100],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
        {
            label: "Jere",
            backgroundColor:"#0095ffd5",
            data: [24],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
        {
          label: "Konduga",
          backgroundColor:"#0095ffd5",
          data: [5],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
        label: "Mafa",
        backgroundColor:"#0095ffd5",
        data: [3],
        datalabels:{
          anchor:'end',
          align:'top',
          offset:-7
        }
    },
      {
        label: "Bama",
        backgroundColor:"#0095ffd5",
        data: [14],
        datalabels:{
          anchor:'end',
          align:'top',
          offset:-7
        }
    },
    {
      label: "Gwoza",
      backgroundColor:"#0095ffd5",
      data: [10],
      datalabels:{
        anchor:'end',
        align:'top',
        offset:-7
      }
  },
  {
    label: "Biu",
    backgroundColor:"#0095ffd5",
    data: [14],
    datalabels:{
      anchor:'end',
      align:'top',
      offset:-7
    }
},
      ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    plugins: [ChartDataLabels],
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


const ctxline = document.getElementById('myLineChart');

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
      {
          label: "Admissions",
          backgroundColor: "#2195f386",
          fill: true,
          data: [1000,850,900,750,600,1100,800],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          },
          tension: 0.0
      }
    ]
};

var myBarChart = new Chart(ctxline, {
  type: 'line',
  data: data,
  plugins: [ChartDataLabels],
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
          },
          beginAtZero: true
        }
      }
  }
});

const ctx2 = document.getElementById('myChart2');

var data = {
  labels: ["January", "February", "March"],
  datasets: [
      {
          label: "Malaria",
          backgroundColor: "#2196f3",
          data: [100,150,90],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
          label: "Diabetes",
          backgroundColor:"#6CA0DC",
          data: [20,15,8],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
          label: "Typhiod",
          backgroundColor:"#5D8AA8",
          data: [40,55,20],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
          label: "Heart Disease",
          backgroundColor:"#BCD4E6",
          data: [20,15,5],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      }
    ]
};

var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: data,
  plugins: [ChartDataLabels],
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


const ctxdb = document.getElementById('myChart4');

var data = {
  labels: ["January", "February", "March"],
  datasets: [
      {
          label: "Births",
          backgroundColor: "#2196f3",
          data: [50,38,60],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
          label: "Deaths",
          backgroundColor:"#BCD4E6",
          data: [20,15,10],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      }
    ]
};

var myBarChart = new Chart(ctxdb, {
  type: 'bar',
  data: data,
  plugins: [ChartDataLabels],
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


  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['Male', 'Female'],
      datasets: [{
        data: [150, 200],
        borderWidth: 1
      }]
    },
    //plugins: [ChartDataLabels],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  //Circular Progress Bar
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 67;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


  function getIndex(x)
  {
    document.getElementById('index').textContent = x.rowIndex;
  }

  function pDataPage()
  {
    var piddata = document.getElementById('piddata').value;
    sessionStorage.setItem('piddata', piddata); 
    console.log(sessionStorage);
    window.location.href = 'dd2.html';
  }


  function pDataPage2()
  {
    var fname = document.getElementById('fname2').innerHTML;
    sessionStorage.setItem('fname', fname); 
    var lname = document.getElementById('lname2').innerHTML;
    sessionStorage.setItem('lname', lname); 
    var gender = document.getElementById('gender2').innerHTML;
    sessionStorage.setItem('gender', gender); 
    var age = document.getElementById('age2').innerHTML;
    sessionStorage.setItem('age', age); 
    console.log(sessionStorage);
    window.location.href = 'dd22.html';
  }

  function pDataPage3()
  {
    var piddata = document.getElementById('piddata').value;
    sessionStorage.setItem('piddata', piddata); 
    console.log(sessionStorage);
    window.location.href = 'fp6.html';
  }
