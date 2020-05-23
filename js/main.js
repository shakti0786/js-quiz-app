let qlen = allQuestions.length;
let pos = 0;


console.log(allQuestions[0])

function RenderQuestion(){
    document.querySelector("#qno").innerHTML=`Question ${pos+1} out of ${qlen}`;
    let q = allQuestions[pos].choices;
    let temp = ``;
    q.forEach((ans)=>{
        temp+= `<input type="radio" name="q${pos}" id="q${pos}" value="0">
        <label for="option1">${ans}</label><br>`;
    })
    let ques = `<div class="card-header">
    Q.${pos+1}: ${allQuestions[pos].question}
</div>
<div class="card-body">
    <div class="form-group">
        ${temp}
    </div>
</div>`;
document.querySelector(".card").innerHTML= ques;
}


function NextQuestion(){
    if(pos<qlen-1){
        pos++;
        document.querySelector("#prev").disabled=false;
    }
    else{
        pos;
    }
    RenderQuestion();  
}

function PrevQuestion(){
    if(pos>0){
        pos--;
        console.log(pos)
    }else{
        document.querySelector("#prev").disabled=true;
    }
    RenderQuestion()
}

function TimeOut(){
    let d = new Date();
    let date = d.getDate();
    let day = d.getDay();
    let month = d.getMonth();
    let y = d.getFullYear();
    let h = d.getHours();
    let m = d.getMinutes();
    let sec = d.getSeconds();
    switch(day){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thrusday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        dafault:
            day = "Unknown";
            break;
    }
    console.log(`Day ${day}, Date ${date}, Month ${month}, Year ${y}`);
    console.log(`Hour ${h}, Minute ${m}, Seconds ${sec}`)
    let s = 1;
    let id = setInterval(() => { 
        document.querySelector("#time").innerHTML = s; 
        s++; 
        if(s == 10){
            clearInterval(id);
            NextQuestion();
        }
    }, 1000);

    // document.querySelector("#time").innerHTML = counter;



}

document.querySelector("#next").addEventListener("click", NextQuestion);
document.querySelector("#prev").addEventListener("click", PrevQuestion);
RenderQuestion();
PrevQuestion();
TimeOut()

