console.log('JS OK')

//prendo gli elementi dal DOM
let header = document.getElementById('header');
let main = document.getElementById('main');
let Container = document.createElement('div')
 main.append(Container)
//strutturo l'header
const title = document.createElement('h4')
header.append(title)
title.innerText = 'OUR TEAM'
const description = document.createElement('p')
header.append(description)
description.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perspiciatis animi, quibusdam id nam harum dignissimos. Quibusdam maiores esse animi fugiat culpa, voluptatibus in earum officia, suscipit explicabo sequi laudantium!'
description.classList.add("text-center");

//creo degli oggetti con le informazioni richieste
const teamList = [
{name: 'wayne barnett', role: 'CEO', img: 'wayne-barnett-founder-ceo.jpg'},
{name: 'Angela Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg'},
{name: 'Walter Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg'},
{name: 'Angela Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg'},
{name: 'Scott Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg'},
{name: 'Barbara Ramos', role: 'Graphic designer', img: 'barbara-ramos-graphic-designer.jpg'}

]
console.log(teamList[1].name,teamList[2].name)

//creo un ciclo for nel quale vado ad inserire ogni singolo elemento e stamparlo in pagina

for(i=0; i < teamList.length; i++ ){
    let card = teamList[i];
    console.log(card.name);
    Container.append(card.name);
    Container.append(card.role);
    Container.append(card.img);
   
}
