const apiKey= "4cd0eee81294c867b4bc4cfc64e998c5";
const apiurl= 'https://api.openweathermap.org/data/2.5/q=${city}&appid=${apiKey}';
const input=document.querySelector("input");
const button=document.querySelector("button");
async function Weather(city){
    const result=await fetch('${apiurl}');
    var data=await result.json();
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=data.main.temp +"°C";
    document.querySelector("#humidity").innerHTML=data.main.humudity +"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+"km/h";
}
button.addEventListener("click",()=>{
    Weather(input.value);
})