console.log('JS OK')

//creo delle immagini e le definisco con una variabile
let container = document.createElement('div');
console.log(container)
let img = document.createElement("img");
img.src = "wayne-barnett-founder-ceo.jpg";
container.appendChild(img);


//creo un array con le informazioni richieste
const teamList = {
    names: ['wayne barnett','Walter Gordon','Scott Estrada','Barbara Ramos','Angela Lopez','Barbara Ramos'],
    roles: ['Founder and CEO','Chief Editor','Office Manager','Social Media Manager','Developer','Graphic Designer']
    
    
}


//creo un ciclo for nel quale vado ad inserire ogni singolo elemento e stamparlo in pagina
let textName = document.createElement("div");
for(i=0; i < teamList['names'].length; i++ ){
    let totalNames = teamList['names'][i];
    textName.innerText = totalNames;
    console.log(totalNames);
}
