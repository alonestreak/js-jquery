//Task One
console.log("TASK-1");
let paraGraph=`Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
let result = paraGraph.split(/[\\.!\?]/);
let newResult=new Array();
result.forEach(sentence => {
    if (sentence.trim().split(" ").length>3){
        newResult.push(sentence);
    }
});
let i=1;
newResult.forEach(sentence=>{
    console.log(i +" "+ sentence);
    i+=1
});

//task2
 i=0;
newResult.forEach(sentence=>{
    newResult[i]=sentence.replace(/\d+/,"'XXXXXXXXXX'");
    i+=1;
});
i=1;
console.log(" \n \nTASK-2")
newResult.forEach(sentence=>{
    console.log(i +" "+ sentence);
    i+=1
});

/*
OUTPUT
TASK-1
1 Thank you so much for contacting us
2  You're speaking with Ronaldo
3  May I have your name, please
4  My name is robin soleimani
5  What is your phone number
6  It is 9876535362 as mentioned in the book Diary
7  Thank you so much for providing the info

TASK-2
1 Thank you so much for contacting us
2  You're speaking with Ronaldo
3  May I have your name, please
4  My name is robin soleimani
5  What is your phone number
6  It is 'XXXXXXXXXX' as mentioned in the book Diary
7  Thank you so much for providing the info
*/