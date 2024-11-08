
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
            timerDiv.innerHTML += Math.trunc(hour)+' HOURS '+Math.trunc(min)+' MINUTES <br>'+Math.trunc(rsec)+' SECONDS';

            // Decrement the countdown time
            
        }, 1000);

            const image1 = document.getElementById('image1');
            const image2 = document.getElementById('image2');
            const image3 = document.getElementById('image3');
            const image4 = document.getElementById('image4');
   
                function mov(img,position){
                setInterval(()=>
                    {


                         img.style.bottom = position + 'px';

                         position+=0.5;
                         if(position>850)
                         {
                            position=Math.round(Math.random()*100);
                         }

                },1);

            }
            const ply= document.getElementById('ad');
            //ply.play();

            mov(image1,Math.round(Math.random()*100));
            mov(image2,Math.round(Math.random()*100));
            mov(image3,Math.round(Math.random()*100));
            mov(image4,Math.round(Math.random()*100));
           

            function hold(id)
            {
                let love=document.getElementById(id);
                love.height+=10;
                love.width+=10;
                     if(love.height>100)
                {
                    love.src='dove.png';
                }
            }

