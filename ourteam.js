console.log('JS OK')

//creo delle immagini e le definisco con una variabile
let Container = document.getElementById('card');
let img = document.createElement("img");
img.src = "wayne-barnett-founder-ceo.jpg";
Container.appendChild(img);



//creo un array con le informazioni richieste

let teamList = {
    names: ['wayne barnett','Walter Gordon','Scott Estrada','Barbara Ramos','Angela Lopez','Barbara Ramos'],
    roles: ['Founder and CEO','Chief Editor','Office Manager','Social Media Manager','Developer','Graphic Designer']
    
    
}
console.log(teamList['names'][0])

//creo un ciclo for nel quale vado ad inserire ogni singolo elemento e stamparlo in pagina

for(i=0; i < teamList['names'].length; i++ ){
    let textName = document.createElement('p')
    const names = teamList['names'][i];
    textName.appendChild('names');
    
}