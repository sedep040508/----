const filterModel = document.querySelector('.filter_model')
const cardsContainer = document.querySelector('.cards')

const arrFromMark = []
cards.map(el => {
  arrFromMark.push(el.mark.toUpperCase().trimEnd().trimStart())
})
const newArrFromMark = Array.from(new Set(arrFromMark))
newArrFromMark.map(el => {
  let btn = `
  <button class="btn model">${el}</button>
  `
  filterModel.insertAdjacentHTML('beforeend', btn)
})
const modelBtns = document.querySelectorAll('.model')
modelBtns.forEach(el => {
  el.addEventListener('click', function(){
    document.querySelector('.model.active').classList.remove('active')
    this.classList.add('active')
    const arrFromMark = []
cards.map(el => {
  arrFromMark.push(el.mark.toUpperCase().trimEnd().trimStart())
})
const newArrFromMark = Array.from(new Set(arrFromMark))
newArrFromMark.map(el => {
  let btn = `
  <button class="btn mark">${el}</button>
  `
  filterModel.insertAdjacentHTML('beforeend', btn)
})
  })
})

const btnFilter = document.querySelector('.filter_btn')
btnFilter.addEventListener('click', function(){
  cardsContainer.innerHTML = ''
  const activeBtnMark = document.querySelector('.model.active')
  if(activeBtnMark.innerText === "ВСЕ"){
     cards.map(el => {
        addCard(el)
      cardsContainer.insertAdjacentHTML('beforeend', card)
    })
  }else{
    cards.map(el => {
      if(activeBtnMark.innerText === el.mark.toUpperCase().trimEnd().trimStart()){
        addCard(el)
        cardsContainer.insertAdjacentHTML('beforeend', card)
      }
    })
  }
})


cards.map(el => {
    addCard(el)
})


function addCard(el){
    let card = `
  <div class="card">
    <div class="card_img">
      <img src=${el.img} alt="">
    </div>
    <h3 class="card_tit">
      <span class="card_mark">${el.mark}</span>
      <span class="card_model">${el.model}</span>
    </h3>
    <p class="card_dollar">${el.priceDollar}</p>
    <p class="card_som">${el.priceDollar * 89}</p>
    <p class="card_year">${el.year}</p>
    <p class="card_volume">${el.volume}</p>
    <p class="card_info">${el.info}</p>
  </div>
  `
  cardsContainer.insertAdjacentHTML('beforeend', card)

}

cards.map(el => {
    addCard(el)
})