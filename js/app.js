$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration:"0.6s",
  });

  let filter_btns =document.querySelectorAll(".filter-btn");
  filter_btns.forEach( btn =>btn.addEventListener("click",() =>{
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active")

    let filterValue = btn.dataset.filter
    $(".grid").isotope({filter:filterValue})
    

  }))

  let skills_wrap = document.querySelector(".skills")
  let skills_bar = document.querySelectorAll(".skill-progress")

  window.addEventListener("scroll",() =>{
    skillesEffect();

  });

  function checkScroll(el){
    let rect=el.getBoundingClientRect();
    if(window.innerHeight >=rect.top + el.offsetHeight) return true;
    return false;

  }

  function skillesEffect(){
    if(!checkScroll(skills_wrap)) return;
    skills_bar.forEach(skill => skill.style.width =skill.dataset.progress)

  }

