

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
        // infoTeamDom.innerHTML += teamMember[key];
        // infoTeamDom.innerHTML += " ";

    }  
            
    const photoMemberTeam = `<img src="img/${ourTeam[i].photo}">`;
    // photosTeamDom.innerHTML += photoMemberTeam;
    console.log(photoMemberTeam);
    console.log(" ");
    // infoTeamDom.innerHTML += `<br>`; 


    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    containerDom.append(cardElement);

    const cardDom = document.getElementsByClassName("card");
    const imgCardElement = document.createElement("div");
    imgCardElement.classList.add("img-card");
    cardDom.innerHTML += imgCardElement;

    
    

}




// function generatePhoto () {
//     for (let i = 0; i < ourTeam.length; i++) {

//         const photosTeamDom = document.getElementById("photos-team");
            
//         const photoMemberTeam = `<img src="img/${ourTeam[i].photo}">`;
//         console.log(photoMemberTeam);
//         photosTeamDom.innerHTML += photoMemberTeam;
        
//     }
// }
