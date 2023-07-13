

// array di oggetti (ogni oggetto è un membro del team)
const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(ourTeam);


for (let i = 0; i < ourTeam.length; i++) {

    const containerDom = document.getElementById("container");

    let teamMember = ourTeam[i];

    for (let key in teamMember) {

        console.log(key + "-" + teamMember[key]);

    }

    const photoMemberTeam = `<img src="img/${teamMember.photo}">`;

    containerDom.innerHTML += `<div class="card"><div class="img-card">${photoMemberTeam}</div><div class="info-member"><h2>${teamMember.name}</h2><h3>${teamMember.role}</h3></div></div>`;


    // const cardElement = document.createElement("div");
    // cardElement.classList.add("card");
    // containerDom.append(cardElement);

    // const imgElement = document.createElement("div");
    // imgElement.classList.add("img-card");
    // cardElement.append(imgElement);
    // imgElement.innerHTML = photoMemberTeam;

    // const infoMember = document.createElement("div");
    // infoMember.classList.add("info-member");
    // cardElement.append(infoMember);

    // const nameMember = document.createElement("h2");
    // infoMember.append(nameMember);
    // nameMember.innerHTML = teamMember.name;

    // const ruleMember = document.createElement("h3");
    // infoMember.append(ruleMember);
    // ruleMember.innerHTML = teamMember.role;

}


