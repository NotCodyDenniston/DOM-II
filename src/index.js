import './less/index.less'

// Your code goes here!
const heading = document.querySelector('h1')
window.onload = function (evt) {
    heading.textContent = 'RGB BUS'
    document.body.classList.remove('fontChange')
}

document.body.addEventListener('keydown', evt =>{
    document.body.classList.toggle('B')
})
document.body.addEventListener('click', evt =>{
    document.body.classList.toggle('G')
})
window.addEventListener('resize', () => {
    document.body.classList.toggle('R')
})

Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(evt) {
      evt.preventDefault();
      heading.textContent = 'sad bus :<'
      
    })
  })

  document.body.addEventListener('dblclick',() => {
    heading.textContent = 'RGB BUS'
    document.body.classList.remove('fontChange')
  })

  
  document.body,addEventListener('scroll', () => {
    document.body.classList.add('fontChange')
  })

  const destinations = document.querySelectorAll('.destination')
  for( let destination of destinations) {
    destination.addEventListener('mouseenter', ()=> {
      destination.style.fontWeight = 'bold'

    })
    destination.addEventListener('mouseleave', () => {
      destination.style.fontWeight = 'initial'
    })
  }