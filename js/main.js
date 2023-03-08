

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



const infoTeamDom = document.getElementById("info-team");
const photosTeamDom = document.getElementById("photos-team");
const containerDom = document.getElementById("container");
let teamMember = "";

for (let i = 0; i < ourTeam.length; i++) {
    
    teamMember = ourTeam[i];
    
    for (let key in teamMember) {
            
        console.log(key + "-" + teamMember[key]);

    }  
            
    const photoMemberTeam = `<img src="img/${ourTeam[i].photo}">`;
    console.log(photoMemberTeam);
    console.log(" ");


    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    containerDom.append(cardElement);

    const imgElement = document.createElement("div");
    imgElement.classList.add("img-card");
    cardElement.append(imgElement);
    imgElement.innerHTML = photoMemberTeam;

    const infoMember = document.createElement("div");
    infoMember.classList.add("info-member");
    cardElement.append(infoMember);

    const nameMember = document.createElement("h2");
    infoMember.append(nameMember);
    nameMember.innerHTML = teamMember.name;

    const ruleMember = document.createElement("h3");
    infoMember.append(ruleMember);
    ruleMember.innerHTML = teamMember.rule;
  

}


