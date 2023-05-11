//splitter Arr // 서, 동
const splitterList = document.querySelectorAll('.spt');
const westDiv = document.querySelector('.west');
const eastDiv = document.querySelector('.east');
const w_Bar = document.querySelector('.west__bar');
const e_Bar = document.querySelector('.east__bar');


// 화면 사이즈 조절 함수 
function resize(splitter){
    if(westDiv.classList.contains('fadeLeft')|| !w_Bar.classList.contains('hidden') ) return;
    if(eastDiv.classList.contains('faderight') || !e_Bar.classList.contains('hidden')) return;
    let targetBox;
    let startX =0;
    let targetWidth;
    let distance =0;
    let isEnable = false;
    function onSplitStart(e){   //지금부터 스플릿 기능 시작 
       
        const IsWestSp = e.target.classList.contains('west__sp');  //서쪽?
        const IsEastSp = e.target.classList.contains('east__sp'); //동쪽?
    
        if(IsWestSp){ //서쪽 타겟박스
            targetBox = westDiv;  
        } else if(IsEastSp) {
            targetBox = eastDiv;     //동쪽 타겟박스
        }
       
            startX = e.clientX; //시작 x값 
            targetWidth = targetBox.getBoundingClientRect().width; //처음 너비 구하기 
            
                function onSplitDone(e){

                
                        if(IsWestSp){   //서쪽이면, 
                            distance = e.clientX - startX;  
                            targetBox.style.width = `${startX + distance}px`;
                        }else if(IsEastSp) {    //동쪽이면
                            distance = e.clientX - startX;
                            targetBox.style.width = `${startX - distance}px`;  //음수나오니까 빼줘 
                                const splitFinish = (e)=>{ 
                                    document.removeEventListener('mousemove', onSplitDone, true);
                                    document.removeEventListener('mousedown', onSplitStart, true);
                                }
                            document.addEventListener('mouseup',splitFinish);
                        }
                    }    
                document.addEventListener('mousemove',onSplitDone); //이동 후 좌표 e.clientX -> 좌표끼리 뺀 거리 만큼 width에 더해줘 
                }
    
        window.addEventListener('mousedown',onSplitStart); //스플리터 누르면서 마우스 down인식 시작 -> 처음 좌표 e.clientX 
        // splitter.addEventListener('mousedown',onSplitStart); //스플리터 누르면서 마우스 down인식 시작 -> 처음 좌표 e.clientX 
    }
    
    splitterList.forEach(resize);
    

// 　　fadeLeft　✔　fadeRight　없을때만　가능