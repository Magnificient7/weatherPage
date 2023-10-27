const btn = document.querySelector(".btn")
const cityname = document.getElementById("cityname");
const temperature = document.querySelector(".temperature");
const city = document.querySelector(".city");
const image = document.getElementById("myimg");
// console.log(btn);

// creating day and date
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const tarikh = date.getDate();
// console.log(day);
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const currentday = document.querySelector(".day");
const waqt = document.querySelector(".date");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
waqt.innerHTML = `${tarikh} ${months[month]}`;
currentday.innerHTML = week[day];
// console.log(week[day]);



const getinfo = async(event)=>{
    event.preventDefault();
    let btnvalue = cityname.value;
    if(btnvalue === " "){
        temperature.innerHTML = "type city name";
    }
    else{
        try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${btnvalue}&appid=f7f6677e52f74616624890fef3c51980`;
    let weatherdata = await fetch(url);
    let data = await weatherdata.json();
    let arr = [data];
    let temp = arr[0].main.temp -273.15;
    temperature.innerHTML = `${temp.toFixed(2)} Celsius`;
    city.innerHTML = `${arr[0].name},IN`;
    // console.log(arr);
     let status = arr[0].weather[0].main;
     status = status.toLowerCase();
     console.log(status);
    if(status =="Clear"){
        image.src  = "./images/Sun.png";
    }
    else if(status =="clouds"){
        image.src = "./images/cloud.jpg" 
    }
    else if(status =="rain"){
        image.src = "./images/rainy.png"
    }
    else{
        image.src = "./images/Sun.png"
    }
    
    }

catch(error){
    console.log(error)
    temperature.innerHTML = "type city name correctly";

}
    }
}

btn.addEventListener('click',getinfo);
