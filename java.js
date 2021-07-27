const container = document.querySelector(".container");
const request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/name/bangladesh');
request.send();

request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    const htmlData = `<div class="card">
    <div class="image">
        <img src="${data.flag}" alt="flag image" class="img">
    </div>
    <div class="name">
        <h3 class="tertiary-header">
        ${data.name}
        </h3>
        <p class="paragraph">Capital: <span class="paragraph">${data.capital}</span></p>
    </div>
    <div class="bottom">
        <div class="lang">
            <h3 class="tertiary-header">${data.nativeName}</h3>
            <p class="paragraph">native language</p>

        </div>
        <div class="population">
           <h3 class="tertiary-header">${data.population}</h3>
           <p class="paragraph">population</p>
        </div>
        <div class="currency">
            <h3 class="tertiary-header">${data.demonym}</h3>
            <p class="paragraph">demonym</p>
         </div>
    </div>
</div>`;
    container.insertAdjacentHTML('afterbegin',htmlData)
})