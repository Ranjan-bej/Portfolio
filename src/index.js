import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./components/App"
const root = ReactDOM.createRoot(document.getElementById('root'));
window.onscroll = function () {
  let top= document.getElementById("about").offsetTop;
  let offset = window.scrollY;
  let height = document.getElementById("about").offsetHeight;
  if((top<=offset)&&(offset<top+height)){
    let skill = document.querySelectorAll(".skillbar");
    skill.forEach(skills=>{
      skills.classList.add("animate");
    })
  }
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
