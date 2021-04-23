let bar = document.querySelector(".bar");
let percent = document.querySelector(".percent");

i=0;
function progress(){
    percent.textContent = i+"%";
    bar.style.width = i/2+"vw";
    i++;
    i>100 ? i=100 : i=i;
    setTimeout(progress,100);
}
progress();