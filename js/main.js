 
/*var wordPool = document.getElementById('wordPool')
var wordList = document.getElementById('newWordPool');
wordList.addEventListener('click',function(){
    wordPool.innerHTML = inputField();

} )

function inputField(){
    return `<div> <input type="text" placeholder="Enter word list for test.." id="itemNameInput">
            <button id="addItemButton">
               <svg fill="#25b991" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button></div>`
}*/

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var myList = [];
 var tempList=['店','话','等','现','付','呢','拿','课','报','吃','饭','故','钱','童'];
 for(var i=0; i<tempList.length; i++){
myList.push({content:tempList[i], status:"todo"});
 }
 

var i=0;
myList = shuffle(myList);
console.log(myList);
var testWord = document.getElementById('word');
testWord.innerHTML=displayWord(myList, i);

/*
function myTimer(){
i++;
testWord.innerHTML=displayWord(myList, i, status);
if (i==myList.length) i=0;}
setInterval(function() {myTimer()},30000);*/
    


function displayWord(itemList, i){
   var  x=itemList[i];
    return `<div id="wordDisplay"> ${x.content}</div>
                            <div id="check"> 
                                <button class="button2" id='${i}'  onclick=  changeStatusCorrect(${i})>
                                    <svg fill="#008000" height="45" viewBox="0 0 20 20" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </button>
                                <button class="button2"  id='${i}' onclick = changeStatusWrong(${i})>
                                    <svg fill="#ff0000" height="45" viewBox="0 0 20 20" width="45" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </button>
                            </div>                            
                        </div>` 
}

function changeStatusWrong(itemId){
     console.log(itemId);
    myList[itemId].status="wrong";
    itemId++;
    console.log(myList);
     if(itemId<myList.length)
        { testWord.innerHTML=displayWord(myList, itemId)}
    else {
        showScore();
    return}
 }
      

 
function changeStatusCorrect(itemId){
     console.log(itemId);
    myList[itemId].status="correct";
        itemId++;
    console.log(myList);
     if(itemId<myList.length)
        { testWord.innerHTML=displayWord(myList, itemId)}
    else {
        showScore();
    return}
 }

function showScore(){
   var wrongList = myList.filter(x=>{
       if (x.status=="wrong" )
       return x});
      console.log(wrongList.content);
   var score =((1- wrongList.length/myList.length)*100).toFixed(0).toString();
 
    document.getElementById('scoreArea').innerHTML = score;
     
     document.getElementById('details').innerHTML = wrongListDisplay();
    }

  function wrongListDisplay(){
  var Lis = myList
  .filter(x=>x.status==="wrong")
  .map(x=>{return x.content})
    .join();

    return `<p>${Lis}</p>`}