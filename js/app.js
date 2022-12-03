const contents = document.querySelectorAll(".content");

const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show" , entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    
},

{
  

  threshold: 0.75,
}
)

contents.forEach(content => {
        observer.observe(content);
})

