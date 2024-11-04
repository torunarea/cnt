
        const timerDiv = document.getElementById('timer');

        const countdown = setInterval(() => {
            // Calculate minutes and seconds
            
           let d=new Date('Dec 19 2024');
        let sec=(d-new Date())/1000;
        let days= sec/(24*3600);
        let rsec= (sec%(24*3600));
        let hour= rsec/3600;
            rsec= rsec%3600;
        let min = rsec/60;
            rsec= rsec%60;
            // Display the remaining time
            timerDiv.innerHTML = 'In<br>'+Math.trunc(days)+' DAYS <br>';
            timerDiv.innerHTML += Math.trunc(hour)+' HOURS <br>'+Math.trunc(min)+' MINUTES '+Math.trunc(rsec)+' SECONDS';

            // Decrement the countdown time
            
        }, 1000);
