const filterModel = document.querySelector('.filter_model')
const filterMark = document.querySelector('.filter_mark')
const  filterYear = document.getElementById('.year')
const cardsContainer = document.querySelector('.cards')

function addCards(el) {
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
//
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
// фильтрация по моделям
const modelBtns = document.querySelectorAll('.model')
modelBtns.forEach(el => {
  el.addEventListener('click', function () {
    document.querySelector('.model.active').classList.remove('active')
    this.classList.add('active')
    const arrFromModel = []
    cardsContainer.innerHTML = ''
    cards.map(el => {
      if (this.innerText === el.mark.toUpperCase().trimEnd().trimStart()) {
        arrFromModel.push(el.model.toUpperCase().trimEnd().trimStart())
        addCards(el)
      } else if (this.innerText === "ВСЕ") {
        addCards(el)
      }
    })
    filterMark.innerHTML = `<button class="btn mark">ВСЕ</button>`
    const newArrFromModel = Array.from(new Set(arrFromModel))
    newArrFromModel.map(el => {
      let btn = `
      <button class="btn mark">${el}</button>
      `
      filterMark.insertAdjacentHTML('beforeend', btn)
    })

    if (this.innerText != "ВСЕ") {
      document.querySelector('.filter_mark-wrap').style.display = "block"
    } else {
      document.querySelector('.filter_mark-wrap').style.display = "none"
    }
//год


    const markBtns = document.querySelectorAll('.mark')
    markBtns.forEach(el => {
      el.addEventListener('click', function () {
        cardsContainer.innerHTML = ''
        cards.map(el => {
          if (this.innerText === el.model.toUpperCase().trimEnd().trimStart()) {
            addCards(el)
          } else if (this.innerText === "ВСЕ") {
            addCards(el)
          }
        })
      })
    })
  })
})


// const btnFilter = document.querySelector('.filter_btn')
// btnFilter.addEventListener('click', function(){
//   cardsContainer.innerHTML = ''
//   const activeBtnMark = document.querySelector('.model.active')
//   if(activeBtnMark.innerText === "ВСЕ"){
//      cards.map(el => {
//       addCards(el)
//     })
//   }else{
//     cards.map(el => {
//       if(activeBtnMark.innerText === el.mark.toUpperCase().trimEnd().trimStart()){
//         addCards(el)
//       }
//     })
//   }
// })

cards.map(el => {
  addCards(el)
})