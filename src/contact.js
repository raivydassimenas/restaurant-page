import "./styles.css";

const loadContactTab = function () {
    const contactDiv = document.createElement('div');

    const tobeRyota = document.createElement('div');

    const tobeRyotaHeader = document.createElement('h2');
    tobeRyotaHeader.innerText = "Tobe Ryota";
    tobeRyota.appendChild(tobeRyotaHeader);

    const tobeRyotaContact = document.createElement('ul');
    const tobeRyotaPosition = document.createElement('li');
    tobeRyotaPosition.innerText = "Position: chef";
    tobeRyotaContact.append(tobeRyotaPosition);
    const tobeRyotaPhone = document.createElement('li');
    tobeRyotaPhone.innerText = "Phone: (+370) 612 34 5670";
    tobeRyotaContact.appendChild(tobeRyotaPhone);
    const tobeRyotaEmail = document.createElement('li');
    tobeRyotaEmail.innerText = "Email: tobe.ryota@cuterestaurant.com";
    tobeRyotaContact.appendChild(tobeRyotaEmail);
    tobeRyota.appendChild(tobeRyotaContact);

    tobeRyota.classList.add("contact");

    contactDiv.appendChild(tobeRyota);

    const hataYasu = document.createElement('div');

    const hataYasuHeader = document.createElement('h2');
    hataYasuHeader.innerText = "Hata Yasu";
    hataYasu.appendChild(hataYasuHeader);

    const hataYasuContact = document.createElement('ul');
    const hataYasuPosition = document.createElement('li');
    hataYasuPosition.innerText = "Position: manager";
    hataYasuContact.appendChild(hataYasuPosition);
    const hataYasuPhone = document.createElement('li');
    hataYasuPhone.innerText = "Phone: (+370) 621 43 6587";
    hataYasuContact.appendChild(hataYasuPhone);
    const hataYasuEmail = document.createElement('li');
    hataYasuEmail.innerText = "Email: hata.yasu@cuterestaurant.com";
    hataYasuContact.appendChild(hataYasuEmail);
    hataYasu.appendChild(hataYasuContact);

    hataYasu.classList.add("contact");

    contactDiv.appendChild(hataYasu);

    contactDiv.classList.add("tab");

    return contactDiv;
}

export default loadContactTab;