const container = document.getElementById("faq-container");

function buttontoggle(){
    const buttons = document.querySelectorAll('.faq-toggle')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.parentNode.classList.contains('active')){
                btn.parentNode.remove();
            }
            btn.parentNode.classList.toggle('active');

        })
    })
    const addiv = document.getElementById("input");
    const addbtn = document.getElementById("addBtn");
    addbtn.addEventListener('click',()=>{
        addbtn.disabled = true;
        if(document.getElementById("inputdiv")){
            
        }
        else {
            const creatediv = document.createElement("div");
            creatediv.setAttribute("class","inputdiv");
            creatediv.setAttribute("id","inputdiv");
            const ques= document.createElement("input");
            ques.setAttribute("class","question");
            ques.setAttribute("placeholder","Enter Question");
            const ans = document.createElement("input");
            ans.setAttribute("class","answer");
            ans.setAttribute("placeholder","Enter Answer");
            const addf = document.createElement("button");
            addf.textContent = "ADD to FAQ"
            addf.addEventListener('click',()=>{
                addbtn.disabled = false;
                addCard(ques,ans);
                ques.value="";
                ans.value="";
                addiv.removeChild(creatediv)
            })
            creatediv.appendChild(ques);
            creatediv.appendChild(ans);
            creatediv.appendChild(addf);
            addiv.appendChild(creatediv);
        }
        
    })
}

function addCard (ques,ans){
    const qinp = ques.value;
    const ainp = ans.value;
    const extcard = document.createElement("div");
    extcard.setAttribute("class","faq");
    extcard.innerHTML = `<h3 class="faq-title">
      ${qinp}
    </h3>

    <p class="faq-text">
      ${ainp}
    </p>

    <button class="faq-toggle">
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </button>`
    container.appendChild(extcard);
    buttontoggle()
}

buttontoggle();