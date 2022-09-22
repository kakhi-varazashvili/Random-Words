

var start = document.querySelector(".btn");

var words = document.querySelectorAll(".word");

// start.addEventListener("click",function(){


for(var n of words){
    n.innerHTML = "kakhi";
    n.style.color = "red"

    
}

//     function randomWords(word,length) {
//         var x = [];
//         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
//     for(var y=0; y<word; y++){
//         var words1 = '';
    
//         for ( var i = 0; i <length; i++ ) {
//             words1 += characters[Math.floor(Math.random() * characters.length)];      
//        }
//        x.push(words1)
//     }
//     return x
    
//     }

// }) 


// console.log(randomWords(10,10));