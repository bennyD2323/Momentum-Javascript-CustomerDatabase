function renderPageContent () {

    let targetElement = document.querySelector("#mainOne")
  
    for (let person of customers) {
      let listItemElement = document.createElement("section")
      listItemElement.innerHTML = createImgElement (person.picture.large)
      listItemElement.appendChild(createNameElement(person.name.first + " " + person.name.last))
      listItemElement.appendChild(createEmailElement(person.email))
      listItemElement.appendChild(createAddressElement(person.location.street))
      listItemElement.appendChild(createAddressElement2(person.location.city + ", " + person.location.state + " " + person.location.postcode))

      listItemElement.appendChild(createDobEl(person.dob))
      listItemElement.appendChild(createJoinDate(person.registered))
      


      targetElement.appendChild(listItemElement)
    }
  }

  function createImgElement (picture) {
      return `<img src=${picture}>`
  }
  function createNameElement (name) {
    let  nameEl = document.createElement("h3")
    nameEl.innerText = capitalize(name)
    return nameEl
  }
  
function createEmailElement (email) {
  let emailNumEl = document.createElement("p")
  emailNumEl.innerText = `${email}`
  return emailNumEl
}
function createAddressElement (address) {
    let addressEl = document.createElement ("main")
    addressEl.innerText = address
    return addressEl
}
function createAddressElement2 (address) {
    let addressEl2 = document.createElement ("div")
    addressEl2.innerText = address
    return addressEl2
}
function createDobEl (dob) {
    let dobEl = document.createElement ("div")
    dobEl.innerText = ("DOB: " + moment(dob).format("MMM Do, YYYY"))
    return dobEl
}


function createJoinDate (jdate) {
    let joinEl = document.createElement ("div")
    joinEl.innerText = ("Customer since: " + moment(jdate).format("MMM Do, YYYY"))
    return joinEl
}
function capitalize(word) {
    return (
      word.charAt(0).toUpperCase()
      + word.slice(1).toLowerCase() 
    );}
  renderPageContent()