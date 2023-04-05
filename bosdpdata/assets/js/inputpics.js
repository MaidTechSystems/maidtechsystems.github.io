const firebaseConfig = {
    apiKey: "AIzaSyBJSq3iOMZS56S7BsOjilH6Xg3h_QufFAs",
    authDomain: "bosdp-5dc41.firebaseapp.com",
    databaseURL: "https://bosdp-5dc41-default-rtdb.firebaseio.com",
    projectId: "bosdp-5dc41",
    storageBucket: "bosdp-5dc41.appspot.com",
    messagingSenderId: "161096069455",
    appId: "1:161096069455:web:d4c2453d9820bd8971553a",
    measurementId: "G-Q58MQQ9QY2"
  };

  firebase.initializeApp(firebaseConfig);


var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;

function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}

function uploadImage(){

    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Matth.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width = percentVal+"%";
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);
        })
    })

}