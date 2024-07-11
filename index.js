
//slider
const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");

  let slideIndex = 0;

  slides[slideIndex].classList.add("active");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  function prevSlide() {
    slides[slideIndex].classList.remove("active");

    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function nextSlide() {
    slides[slideIndex].classList.remove("active");

    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }



  //toggle navber 
  const navbar=document.querySelector(".navbar");
  navbar.addEventListener("click",()=>{
    const togglenav=document.querySelector(".togglenav");
    togglenav.classList.toggle("activeToggle");
  })

  // chart js
const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
