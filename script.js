document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import {getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZbaiuGkpevNMtIguaikGh06q-1EEcJg",
  authDomain: "mcst-bus-parking.firebaseapp.com",
  projectId: "mcst-bus-parking",
  storageBucket: "mcst-bus-parking.appspot.com",
  messagingSenderId: "479980154835",
  appId: "1:479980154835:web:5974d86d53cde1ef2c4926",
  measurementId: "G-5B9TNEMXNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(getDatabase());


document.getElementById('submitButton').addEventListener('click',(e) => {
  // console.log("hurray");
  var e = document.getElementById("dropDown");
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  get(child(dbRef, text)).then((snapshot) => {
    if (snapshot.exists()) {
      document.getElementById("busPosition").innerHTML = text + " Bus Position: " + snapshot.val().position;
      console.log(snapshot.val());
    } else {
      console.log("No data available");
       document.getElementById("busPosition").innerHTML = text + " has not arrived yet!";
    }
  }).catch((error) => {
    console.error(error);
  });
});
