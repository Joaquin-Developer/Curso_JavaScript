
// JSON Object
const persons = [
    {
        name: "Joaquin",
        lastName: "parrilla",
        age: 19
    },
    {
        name: "Pedro",
        lastName: "Pérez",
        age: 28
    },
    {
        name: "Juan",
        lastName: "Pereira",
        age: 45
    }
];

const myTable = document.getElementById("table");
const tbody = document.getElementById("tbody");

window.onload = () => {
    persons.forEach(elem => {

        console.log(elem.name + " " + elem.lastName + ", edad:" + elem.age);

        const tr = document.createElement("TR");
        const name = document.createElement("TD");
        const lastName = document.createElement("TD");
        const age = document.createElement("TD");

        name.appendChild(document.createTextNode(elem.name));
        lastName.appendChild(document.createTextNode(elem.lastName));
        age.appendChild(document.createTextNode(elem.age));
        
        tr.appendChild(name);
        tr.appendChild(lastName);
        tr.appendChild(age);

        tbody.appendChild(tr);
        
    }); 
};
