// On cible les input
let lastname = document.getElementById('lastname');
let firstname = document.getElementById('firstname');
let email = document.getElementById('email');
let age = document.getElementById('age');

// On cible les éléments Small du Dom
let lastnameSmall = document.getElementById('lastnameSmall');
let firstnameSmall = document.getElementById('firstnameSmall');
let emailSmall = document.getElementById('emailSmall');
let ageSmall = document.getElementById('ageSmall');

// On cible le bouton cloneur
let cloneIt = document.getElementById('cloneIt');

// création d'un compteur permettant de générer des id différents pour les clones
let counter = 0;

const cloneItFn = () => {
    // On cible le bloc HTML à cloner
    let toClone = document.getElementById('toClone');

    // On crée une copie de l'élément HTML dans la variable clone
    let cloned = toClone.cloneNode(true);

    // On modifie l'id du clone
    counter++;
    cloned.id = cloned.id + counter;

    // On modifie les valeurs indispensables du clone
    let labels = cloned.querySelectorAll('label');
    labels.forEach(label => {
        label.setAttribute('for', label.getAttribute('for') + counter);
    })

    let inputs = cloned.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('id', input.getAttribute('id') + counter);
        input.value = '';
    });


    let smalls = cloned.querySelectorAll('small');
    smalls.forEach(small => {
        small.setAttribute('id', small.getAttribute('id') + counter);
    })

    // On cible l'emplacement ou cloner et on clone
    let clones = document.getElementById('clones');
    clones.append(cloned);

}

const submitForm = (event) => {
    event.preventDefault();
    let lastnames = document.querySelectorAll('.lastname');
    let firstnames = document.querySelectorAll('.firstname');
    let emails = document.querySelectorAll('.email');

    nbItems = lastnames.length;
    for (i = 0; i < nbItems; i++) {

        datas.innerHTML += `<div>${lastnames[i].value}  ${firstnames[i].value} <a href="mailto:${emails[i].value}">${emails[i].value}</a></div>`;
    }

}

// Création d'un écouteur d'évènement sur le bouton clone!
cloneIt.addEventListener('click', cloneItFn);

myForm.addEventListener('submit', submitForm)
