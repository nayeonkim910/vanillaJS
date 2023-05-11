/**
*
    west  
        1)아코디언 
        2)슬라이드, 
        3)리사이징  
    main  
        1)tab기능
    east  
        1)정렬기능 
        2)tab기능 
        3)슬라이드
        4)리사이징
    south 
        1)슬라이드
        
 */


// west아코디언기능에 필요한 요소
const panelHeadList = document.querySelectorAll('.panel__title');  //NAV,SETTING,INFO 3개 타이틀 
const [pn1, pn2, pn3] = document.querySelectorAll('.panel__body'); //그에 해당하는 각 BODY영역

// 모든 요소들 active 제거 기능
function allPanelRemove(){
        [pn1,pn2,pn3].forEach(item=>item.classList.remove('active'));
}

function changeBtn(){
    if(pn1.classList.contains('active')) {
            NavIList[0].classList.add('hidden');
            NavIList[1].classList.remove('hidden');
            SetIList[0].classList.remove('hidden');
            SetIList[1].classList.add('hidden');
            InfoIList[0].classList.add('hidden');
            InfoIList[1].classList.remove('hidden');
       } else if(pn2.classList.contains('active')){
            SetIList[0].classList.add('hidden');
            SetIList[1].classList.remove('hidden');
            NavIList[0].classList.remove('hidden');
            NavIList[1].classList.add('hidden');
            InfoIList[0].classList.add('hidden');
            InfoIList[1].classList.remove('hidden');
       }else if(pn3.classList.contains('active')){
            SetIList[0].classList.remove('hidden');
            SetIList[1].classList.add('hidden');
            NavIList[0].classList.remove('hidden');
            NavIList[1].classList.add('hidden');
            InfoIList[0].classList.remove('hidden');
            InfoIList[1].classList.add('hidden');
       }
}
//아코디언 기능 -> 한번에 하나만 열려, toggle가능하게
function accordionFn(e){
   const ISNaviActive = pn1.classList.contains('active');
   const ISSetActive = pn2.classList.contains('active');
   const ISInfoActive = pn3.classList.contains('active');
    if(e.target.classList.contains('navi')){
        if(ISNaviActive) {
            pn1.classList.remove('active');
            pn2.classList.add('active');
        }
        else{
            allPanelRemove();
            pn1.classList.add('active');
            }    
    }
    if(e.target.classList.contains('set')){
        if(ISSetActive) {
            pn2.classList.remove('active');
            pn3.classList.add('active');
        }
        else{
            allPanelRemove();
            pn2.classList.add('active');
        }    
    }
    if(e.target.classList.contains('info')){
        if(ISInfoActive) {
            pn3.classList.remove('active');
            pn2.classList.add('active');
        }
        else{
            allPanelRemove();
            pn3.classList.add('active');
        }    
    }
     changeBtn();
}

//메뉴3개 순회 하면서, 해당 div열어주기
panelHeadList.forEach(head=> head.addEventListener('click',accordionFn));

// southIlist.forEach(i=>i.classList.toggle('hidden'));
//west영역의 <i> 리스트
const NavIList =document.querySelectorAll('.icon-a');
const SetIList =document.querySelectorAll('.icon-b');
const InfoIList =document.querySelectorAll('.icon-c');