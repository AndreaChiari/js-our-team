console.log('JS OK')

//creo delle immagini e le definisco con una variabile
let container = document.createElement('div');
console.log(container)
let img = document.createElement("img");
img.src = "wayne-barnett-founder-ceo.jpg";
container.appendChild(img);


//creo degli oggetti con le informazioni richieste
const teamList = [
{name: 'wayne barnett', role: 'CEO', img: 'wayne-barnett-founder-ceo.jpg'},
{name: 'Angela Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg'},
{name: 'Walter Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg'},
{name: 'Angela Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg'},
{name: 'Scott Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg'},
{name: 'Barbara Ramos', role: 'Graphic designer', img: 'barbara-ramos-graphic-designer.jpg'}
    
]
console.log(teamList)

//creo un ciclo for nel quale vado ad inserire ogni singolo elemento e stamparlo in pagina
let textName = document.createElement("div");
for(i=0; i < teamList['names'].length; i++ ){
    let totalNames = teamList['names'][i];
    textName.innerText = totalNames;
    console.log(totalNames);
}
