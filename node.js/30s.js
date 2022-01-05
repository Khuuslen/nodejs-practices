let i = 0;
const interval = setInterval(() => {i++;console.log(i) 
    if(i >= 30){clearInterval(interval)}}, 1000);