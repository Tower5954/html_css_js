const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name_ = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt=""/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name_.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}