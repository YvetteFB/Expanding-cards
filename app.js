const panels = document.querySelectorAll('.panel'); //puts all the panels in a NodeList

panels.forEach((panel) => {//loop through NodeList
  panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active');
  })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}