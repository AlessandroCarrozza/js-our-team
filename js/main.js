
// array di oggetti (ogni oggetto è un membro del team)
const ourTeam = [
    {
        name : "Wayne Barnett",
        rule : "Founder & CEO",
        photo : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        rule : "Chief Editor",
        photo : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        rule : "Office Manager",
        photo : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        rule : "Social Media Manager",
        photo : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        rule : "Developer",
        photo : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        rule : "Graphic Designer",
        photo : "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(ourTeam);

for (let key in ourTeam) {
    
    console.log(ourTeam[key]);
}