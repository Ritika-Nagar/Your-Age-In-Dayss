// Challenge 1 : Your age in days 


function ageInDays(){
    var birthYear=prompt("What year you were born??....Good friend!!");
    var birth= (2022-birthYear)*360;
    var H1= document.createElement('h1');
    var textAns=document.createTextNode('You are '+ birth+' days old..BOOOM');
    H1.setAttribute('id','ageInDays');
    H1.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(H1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


