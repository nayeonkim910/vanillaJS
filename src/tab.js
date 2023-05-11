/**
 * tab.js : 각각의 tab에 따라 내용 선택적 보여주기 
 * tab1,tab2 = main화면 [Close Me,CenterPanel]
 * tab3,tab4 = east화면 [A Tab, Property Grid]
 * tab1의 x버튼 클릭시 창 끄기. 
 * tab4의 x버튼 클릭시 창 끄기. 
 * */

const tab1CloseBtn = document.querySelector('.tab1__btn__close');
const tab4CloseBtn = document.querySelector('.tab4__btn__close');

const contentA = document.querySelector('.main__content__a');
const contentB = document.querySelector('.main__content__b');
const eastTab = document.querySelector('.east__tab');
const eastTable = document.querySelector('.east__table');
const tabList = document.querySelectorAll('.tab'); //tab1,tab2,tab3,tab4의 Array

// 4가지탭 조절 기능
function changeTab({target:{innerHTML}}){
    const tab = innerHTML;
    if(tab.includes('Close')){
         contentB.classList.contains('hidden') || contentB.classList.add('hidden');
         contentA.classList.contains('hidden') && contentA.classList.remove('hidden');
    }else if(tab.includes('Center Panel')){
       contentA.classList.contains('hidden') ||contentA.classList.add('hidden');
       contentB.classList.contains('hidden') && contentB.classList.remove('hidden');
    }
    else if(tab.includes('A')){  
        eastTable.classList.contains('hidden') || eastTable.classList.add('hidden');
        eastTab.classList.contains('hidden') && eastTab.classList.remove('hidden');
    }else if(tab.includes('Grid')){
        eastTab.classList.contains('hidden') || eastTab.classList.add('hidden');
        eastTable.classList.contains('hidden') && eastTable.classList.remove('hidden');
    }
}
// Tab 배열 순회하면서 이벤트 리스너 연결
tabList.forEach(tab=>tab.addEventListener('click',changeTab));

// X버튼 클릭시, 창 끄기 기능 1)
tab1CloseBtn.addEventListener('click',()=>{
    const tab1 = document.querySelector('.tab1');
    tab1.classList.add('hidden');
    contentA.classList.add('hidden');
    contentB.classList.contains('hidden') && contentB.classList.remove('hidden');
});

//  X버튼 클릭시, 창 끄기 기능 2)
tab4CloseBtn.addEventListener('click',()=>{
    const tab4 = document.querySelector('.tab4');
    tab4.classList.add('hidden');
     eastTable.classList.add('hidden');
     eastTab.classList.contains('hidden') && eastTab.classList.remove('hidden');
})





