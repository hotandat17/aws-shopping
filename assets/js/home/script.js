import { todayDeal } from "../../../data/home/deal.js"

let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 2000);

//  sidebar navigation 
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})




//today deals 
let todayDealProductListEl = document.querySelector(".today_deals_product_list")

let todayDealProductHTML = ""

let todayDeallength = todayDeal.length

for (let i = 0; i < todayDeallength; i++) {
    todayDealProductHTML += `
        <div class="today_deals_product_item">
                <div class="todayDeals_product_image">
                    <img src=${todayDeal[i].img} />
                </div>
            


            <div class="discount_Contaienr">
                <a href="#">Up to ${todayDeal[i].discount}% off</a>
                <a href="#">${todayDeal[i].DealOfDay}</a>
            </div>
            <p>${todayDeal[i].desc}</p>
        </div>
    `
}
todayDealProductListEl.innerHTML = todayDealProductHTML


// silde show prev and next button

let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev");
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next");
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item");
let startProduct = 0;
const maxTranslate = -520;
const step = 500;
const intervalTime = 8000;
function moveToPrev() {
    if (startProduct < 0) {
        startProduct += step;
    } else {
        startProduct = maxTranslate;
    }
    updateTransform();
}

function moveToNext() {
    if (startProduct > maxTranslate) {
        startProduct -= step;
    } else {
        startProduct = 0;
    }
    updateTransform();
}

function updateTransform() {
    today_deals_product_itemEl.forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`;
    });
}

today_deal_btn_prevEl.addEventListener("click", moveToPrev);
today_deal_btn_nextEl.addEventListener("click", moveToNext);

setInterval(moveToNext, intervalTime);
