fetch('./actors.json').then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    gotData(data);

  }).catch(err => {
    console.log("Error when fetching data")
  })



  function gotData(data) {
      data.forEach(showListElement)
  }

  function showListElement(element) {
      console.log(element.fullname)

    //grab clone change grab append
    const template = document.querySelector("template").content
    const copy = template.cloneNode(true)
    
    copy.querySelector(".movie").textContent = element.movie
    copy.querySelector(".name").textContent = element.fullname
    
    // copy.querySelector(".button1").addEventListener("click", displayMovie)

    const topParent = document.querySelector("#actorsListSection")
    topParent.appendChild(copy)
    
  }