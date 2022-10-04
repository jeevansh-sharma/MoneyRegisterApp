const billAmount = document.querySelector("#bill-amount");
console.log(billAmount);

const cashGiven = document.querySelector("#cash-given");
console.log(cashGiven);

const nextButton = document.querySelector("#btn-next");
console.log(nextButton);

const checkButton = document.querySelector("#btn-check");
console.log(checkButton);

const errorMessage = document.querySelector("#error-message");
console.log(errorMessage);

const noOfNotes = document.querySelectorAll(".no-of-notes");
console.log(noOfNotes);

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", () => {
    console.log('inside check button');
    hideMessage();

    if(billAmount.value>0){
        
        var cash = Number(cashGiven.value);
        var bill = Number(billAmount.value);
        if(cash >= bill){
            console.log('cashGiven.value'+cashGiven.value);
            console.log('billAmount.value '+billAmount.value);
            var returnedAmount = cash - bill;
            console.log('returnedAmount '+returnedAmount);
            calculateChange(returnedAmount);
        }
        else{
            showMessage("You need to give more Cash as Bill is higher!");
        }

    }else{
        showMessage("Bill Amount should be greater than zero!");
        
    }
});

function calculateChange(returnedAmount)
{
    console.log('returnedAmount '+returnedAmount);
    for(let i=0;i<notesAvailable.length;i++)
    {
        const numberOfNotes = Math.trunc(returnedAmount/notesAvailable[i]);
        console.log(notesAvailable[i],numberOfNotes);
        
        returnedAmount = returnedAmount % notesAvailable[i];
        console.log('returnedAmount',returnedAmount);

        console.log(noOfNotes);
        console.log('noOfNotes[i] '+noOfNotes[i]);
        console.log('noOfNotes[i].innerText '+noOfNotes[i].innerText);
        
        noOfNotes[i].innerText =   numberOfNotes;
        
        console.log(i,noOfNotes[i].innerText);
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}