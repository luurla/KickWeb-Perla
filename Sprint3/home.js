
const colors = ['', 'white2', 'white'];
const sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', function () {

    const scrollFromTop = window.pageYOffset;
  
    
    for (let i = 0; sections.length + 3 > i; i++) {
  
      if (scrollFromTop <= sections[i].offsetTop) {
        document.body.className = colors[i] 
        break
      } 
      console.log(document.body.className)
    }

  })