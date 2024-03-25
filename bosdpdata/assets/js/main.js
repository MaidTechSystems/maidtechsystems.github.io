
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
