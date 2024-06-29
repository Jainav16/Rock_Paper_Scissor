const disp_rules = document.querySelector('.rule_box');
const hide_rules = document.querySelector('.hideous');
const circle_select = document.querySelectorAll('.circle');
const triangle = document.querySelectorAll('.line');
const logo_select = document.querySelectorAll('.option');
const comp = document.querySelectorAll('.common');
const you_pick_msg = document.querySelector('.you_picked');
const pc_pick_msg = document.querySelector('.pc_picked');
const check = document.querySelectorAll('.check');
const who_won = document.querySelector('.winner');
const display_winn = document.querySelector('.win_text');
const against_statement = document.querySelector('.winner_a');
const gren = document.querySelector('.conc_crc');
const inn = document.querySelector('.inner');
const playy = document.querySelector('.play');
const rules = document.querySelector('.rules');
const nxtt = document.querySelector('.nxt');
let cmp_scr = document.querySelector('.computer_score');
let usr_scr = document.querySelector('.user_score');
const content = document.querySelector('.user_picked');
const hooray = document.querySelector('.trophy_wrap');
const play2 = document.querySelector('.yooo');
const hdr = document.querySelector('.header');
let random = Math.floor(Math.random()*3);
let next_flag = 0;
usr_scr.innerText = localStorage.getItem("usr_won");
cmp_scr.innerText = localStorage.getItem("cmp_won");
// console.log(usr_scr.innerText);
// console.log(cmp_scr.innerText);

function display_rules(){
    disp_rules.style.opacity = 1; 
}

function hiding_rules(hide_rules){
    disp_rules.style.opacity = 0;
}  
let flag =1;
check.forEach((element,index) => {
    element.addEventListener("click",()=>{
        if(flag==1){
        let win_chck= logic(index,random);
        let x= winner_modifier(win_chck); //checking the op who won
        
        if(x==1)
            {   
                usr_scr.innerText++;
                const x = usr_scr.innerText;
                console.log(usr_scr.innerText);
                localStorage.setItem("usr_won",x);
            }
        else if(x==0)
            {
                cmp_scr.innerText++;
                const y = cmp_scr.innerText;
                localStorage.setItem("cmp_won",y);
            }
        check.forEach(item =>{
            item.style.display = 'none';

            triangle.forEach(item=>{
                item.style.display='none';
            })

        you_pick_msg.style.opacity = '1';
        element.style.display = 'block';
        element.classList.add('showwwATleft');

        })
        setTimeout(()=>{
            pc_pick_msg.style.opacity = '1';
            comp[random].style.display = 'block';
            comp[random].classList.add('showwwATRight')
        },500)

        setTimeout(()=>{
            display_winn.style.display = 'block';
            gren.style.opacity = '1';
        },1000)

        flag = 0;
        }

        if(flag = 0){
            check.removeEventListener("click");
        }
    })
});


function winner_modifier(x){
    if(x==1){
        display_winn.classList.add("leftttt");
        gren.classList.add("circle_left");
        return 1; //win
    }
    if(x==0){
        inn.classList.add("rightttt");
        who_won.innerText = "You Lose";
        gren.classList.add("circle_right");
        return 0;
    }
    if(x==-1){
        gren.style.display = 'none';
        who_won.innerText = "TIE UP";
        who_won.classList.add('algn');
        against_statement.style.display = 'none';
        return -1;
    }
}

function logic(user,pc){
    if(user==0 && pc==2 || user==1 && pc==0 || user==2 && pc==1){
        return 1; //user win
    }
    else if(pc==0 && user==2 || pc==1 && user==0 || pc==2 && user==1){
        return 0; //pc win
    }
    else{
        return -1; //tie
    }
}

playy
.addEventListener('click',()=>{
    window.location.reload();
})
play2
.addEventListener('click',()=>{
    window.location.reload();
})

if(parseInt(usr_scr.innerText) > parseInt(cmp_scr.innerText)){
    rules.classList.add('rl');
    nxtt.style.display = 'block';
}
else if(parseInt(usr_scr.innerText) < parseInt(cmp_scr.innerText))
{
    rules.classList.remove('rl');
    nxtt.style.display = 'none';
}

nxtt.addEventListener("click",()=>{
    next_flag = 1;
    if(next_flag==1){
        content.style.opacity = '0';
        content.style.zIndex = '-99';
        hooray.style.display = 'block';
        hdr.style.display = 'none';
        rules.classList.remove('rl');
        nxtt.style.display = 'none';
        next_flag = 0;
    }
},)

