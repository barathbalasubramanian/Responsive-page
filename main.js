
const options = document.querySelector('.options')
const profile = document.querySelector('.profile')
const DashBoard = document.querySelector('.dashboard')

let opt = ['DashBoard','Widgets','Elements','Relations','Tables','Apps','Pricing Tables','Contact','Additional Tables','Map']

for ( let i=0 ; i<opt.length ; i++ ) {

    let option = document.createElement('div')
    option.innerHTML = opt[i]
    option.classList.add('option')
    options.appendChild(option)
}

const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    console.log('hi')
    profile.classList.toggle('active')
    DashBoard.classList.toggle('active')
})

