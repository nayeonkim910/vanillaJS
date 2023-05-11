
// 👇 colNum받아와서 정렬하기 
function sort(colNumber) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("east__Table"); //테이블 가져오기
    switching = true;   
    dir = "asc";

    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR"); //rows갯수  총 9개
  

      for (i = 1; i < (rows.length - 1); i++) { //th는 비교할 필요 없음 (-1)
        shouldSwitch = false;
        
        //받아온 colNum에 따라서 행과 다음행 비교해 
        x = rows[i].getElementsByTagName("TD")[colNumber];   
        y = rows[i + 1].getElementsByTagName("TD")[colNumber];

        if (dir == "asc") {  //오름차순 비교시 조건
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {  // 다 소문자로 바꿔서 비교 
            shouldSwitch = true;
            break;
          }      
        } else if (dir == "desc") {//내림차순 비교시 조건
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
        // shouldSwitch true되면 아래 조건문 돌아 
        // 여기서, rows[i].parentNode는 tbody자체. 
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }



//   👇 솔팅할때, 컬럼 화살표 바꿔주기  
const [nameBtn,valueBtn] = document.querySelectorAll('.tb_btn');
const nameArrowList =nameBtn.querySelectorAll('IMG');
const valueArrowList =valueBtn.querySelectorAll('IMG');


nameBtn.addEventListener('click',()=>{
        //일단 value버튼 화살표 지우기
    valueArrowList.forEach(a=>a.classList.add('hidden'));
    const [asc,desc]= nameArrowList;
    if(asc.classList.contains('hidden')&&desc.classList.contains('hidden')){ 
        asc.classList.toggle('hidden'); //생성
    }else{
        asc.classList.toggle('hidden'); //삭제
        desc.classList.toggle('hidden'); //생성 
    }
});


valueBtn.addEventListener('click',()=>{
    nameArrowList.forEach(a=>a.classList.add('hidden'));
    const [asc,desc]= valueArrowList;

    //맨처음 value버튼 안눌린 상태.
    if(asc.classList.contains('hidden')&&desc.classList.contains('hidden')){ 
        asc.classList.toggle('hidden'); //생성
    }else{
        asc.classList.toggle('hidden'); //삭제
        desc.classList.toggle('hidden'); //생성 
    }

});

