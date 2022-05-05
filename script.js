const checkbox = document.getElementById('toggle-checkbox')

let priceBasic = document.getElementById('price-basic')
let pricePro = document.getElementById('price-professional')
let priceMaster = document.getElementById('price-master')

const priceAnnualBasic = '$ 199.99'
const priceAnnualPro = '$ 249.99'
const priceAnnualMaster = '$ 399.99'

const priceMonthlyBasic = '$ 19.99'
const priceMonthlyPro = '$ 24.99'
const priceMonthlyMaster = '$ 39.99'


function togglePrice(){
    if(checkbox.checked){
        priceBasic.innerText = priceMonthlyBasic
        pricePro.innerText = priceMonthlyPro
        priceMaster.innerText = priceMonthlyMaster
    }else{
        priceBasic.innerText = priceAnnualBasic
        pricePro.innerText = priceAnnualPro
        priceMaster.innerText = priceAnnualMaster
    }
}