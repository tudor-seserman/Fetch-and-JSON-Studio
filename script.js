// TODO: add code here
window.addEventListener('load', ()=>{
    // console.log('stuff3')
    
    async function fetchData() {
        // console.log('stuff2')
        const data = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        const json = await data.json()
        json.sort((a,b)=> b.hoursInSpace - a.hoursInSpace)
 

        let astronauts='';
        for(astronaut of json){
            // console.log(astronaut.firstName)
            let skills = '';
            for(let skill of astronaut.skills){
                skills += " "+skill+','
            }

            let aActive = (astronaut.active)? 'style="color:green;"': 'style="color:red;"'

            astronauts +=
            `<div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.firstName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li ${aActive}>Active: ${astronaut.active}</li>
                  <li>Skills: ${skills.slice(0,-1)}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>`
        }
        document.getElementById('container').innerHTML = astronauts+`
        Astronaut Count: ${json.length}`

    }
    fetchData()
})