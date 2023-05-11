/**
 * 
 * [슬라이드 종류 3가지
 * 1) 스플리터 위의 버튼 
 * 2) 서브바 위 버튼 
 * 3) 서브바 자체 
 */

const toggleInMainPage = document.querySelector('.toggle');// main영역의 content__b에 있는 a태그  
const toggleList = document.querySelectorAll('.pointerImg'); //splitter에 있는 화살표
const [westBar, eastBar,southBar] = document.querySelectorAll('.sideBar'); //서브바

const southPanel2 = document.querySelector('#secreet_south_panel');

// 스플리터
const [wSplit, eSplit] = document.querySelectorAll('.splitter');
const ySplit = document.querySelector('.y_splitter');

//각 사이드,하단 바 위에 있는 방향 아이콘 
const direcArrowList = document.querySelectorAll('.direc-arrow');

// 사이드, 하단 Box (west/ east/ south)
const westBox = document.querySelector('.west');
const eastBox = document.querySelector('.east');
const southBox = document.querySelector('.south');

const southBody = document.querySelector('.south__body');   //남쪽 body

//south영역의 <i> 리스트
const southIlist = southBox.querySelectorAll('i'); 

// 서쪽, 동쪽, 남쪽 사이드바 toggle 기능
const onToggleWest =()=>{
    westBar.classList.toggle('hidden'); //westBar에 width도 줘야함.
    westBar.classList.toggle('west__active'); //westBar에 width도 줘야함.
    westBox.classList.toggle('fadeLeft');
    wSplit.classList.toggle('addMarginLeft');
}
const onToggleEast=()=>{
    eastBar.classList.toggle('hidden');
    eastBar.classList.toggle('east__active');
    eastBox.classList.toggle('fadeRight');
    eSplit.classList.toggle('addMarginright');
}
const onToggleSouth=()=>{
    southBox.classList.toggle('fadeTop');
    southIlist.forEach(i=>i.classList.toggle('hidden'));
}

//스플리터 위의 버튼 클릭하는 경우 -> 사이드바 접고/펼치는 기능 
function toggleSideBar({target:{classList}}){
    const direc = classList[1]; //west__toggle //east__togle// south__toggle
    if(direc == 'west__toggle'){
      onToggleWest();
    }else if(direc=='east__toggle'){
        onToggleEast();
    }
    else if(direc=='south__toggle'){
        onToggleSouth();
    }
}
toggleList.forEach(toggle=>toggle.addEventListener('click',toggleSideBar));


//서브바 위 버튼 클릭하는 경우 -> 사이드바 접고/펼치는 기능 
function onClickArrow({target:{classList}}){
    const direcArrow = classList[4] //east-arrow , west-arrow, south-arrow
    if(direcArrow.includes('west')){
       onToggleWest();
    }else if(direcArrow.includes('east')){
       onToggleEast();
    }
    else if(direcArrow.includes('south')){
        if(southPanel2.classList.contains('slideSouthToTop')) return;
        onToggleSouth();
    }
}
direcArrowList.forEach(arrow=>arrow.addEventListener('click',onClickArrow));



 // 메인 페이지에 a링크 누르면 사이드 바 열림
 toggleInMainPage.addEventListener('click',onToggleWest);
   



//서쪽 동쪽 남쪽 서브바 클릭시, 슬라이드 효과
function onClickSubBar(e){
   const IsWest = e.target.classList.contains('west__bar');
   const IsEast = e.target.classList.contains('east__bar');
   const IsSouth = e.target.classList.contains('south__bar');
      if(IsWest){
            westBox.classList.toggle('fadeLeft');
            westBox.classList.toggle('slideWestToRight');
        }else if(IsEast){
        eastBox.classList.toggle('fadeRight');
        eastBox.classList.toggle('slideEastToLeft');
      }else if(IsSouth){
        if(!southBox.classList.contains('fadeTop')){
            southPanel2.classList.toggle('hiddenSouth');
            southPanel2.classList.toggle('slideSouthToTop');
        }
      }
      //슬라이딩때 화살표 감추기.
      westBar.classList.contains('west__active') && direcArrowList[1].classList.toggle('nonvisible');
      eastBar.classList.contains('east__active') && direcArrowList[2].classList.toggle('nonvisible');
}

[westBar, eastBar,southBar].forEach(bar =>bar.addEventListener('click',onClickSubBar));



//서브바 클릭시 슬라이드 효과  이후, 클릭말고 blur될때도 사라져야함.



// 아래와 같은 상황에서  mouseout  이벤트 
[westBox,eastBox,southBox].forEach(box => box.addEventListener('mouseleave',()=>{
    
    if(westBox.classList.contains('slideWestToRight')){
        westBox.classList.toggle('fadeLeft');
        westBox.classList.toggle('slideWestToRight');
    }else if(southPanel2.classList.contains('slideSouthToTop')){
        if(!southBox.classList.contains('fadeTop')){
            southPanel2.classList.toggle('hiddenSouth');
            southPanel2.classList.toggle('slideSouthToTop');
        }
    }else if(eastBox.classList.contains('slideEastToLeft')){
        eastBox.classList.toggle('fadeRight');
        eastBox.classList.toggle('slideEastToLeft');
    }



}))

    