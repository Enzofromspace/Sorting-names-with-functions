// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sorting Names with JS</h1>`;

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

 function strip(bandName){
   return bandName.replace(/^(a |the |an )/i, '').trim();
 }

const sortedBands = bands.sort(function(a,b){
  if(a>b){
    return 1;
  } else {
    return -1;
  }
});

console.log(strip('an old dog'));