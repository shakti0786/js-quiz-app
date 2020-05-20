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
    if(pos<=qlen-1){
        pos++;
    }
    else{
        pos;
    }
    RenderQuestion()
    
}
document.querySelector("#next").addEventListener("click", NextQuestion);
RenderQuestion();

