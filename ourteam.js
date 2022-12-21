console.log('JS OK')

//prendo gli elementi dal DOM
let main = document.getElementById('main');

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

for(i=0; i < teamList.length; i++ ){
    let totalNames = teamList[i];
    let container = document.createElement('div');
    main.append(container)
    container.append(totalNames);
    console.log(container);
}
