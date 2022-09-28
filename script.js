/*დავწეროთ ფუნქცია რომელსაც გადაეცემა 2 პარამეტრი. 
რამდენი რენდომ სტრინგი მინდა და რამდენი სიმბოლოსგან შემდგარი. 
თუ სტრინგში ხმოვნების რაოდენობა არის 3ჯერ ან უფრო ემტჯერ ნაკლები მაშინ სტრნგი დაიბეჭდოს წითლად. 
თუ თნაბარია ლურჯად სხვა შემტვევაში მწვანედ*/

     
 var x = document.querySelector(".x");
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function randomWords(word,length) {
      for(var y=0; y<word; y++){
        var words1 = ""; 
        // var temp = "";
        var vowel = 0;
        var consonant = 0;
        var words = document.createElement("p")
       
        for ( var i = 0; i <length; i++ ) {
          var random = parseInt(Math.random() * characters.length)

          var symbol = characters[random];
          words1+= symbol;
          if(symbol == "A" || symbol == "E" || symbol=="I" || symbol=="O" || symbol=="U"){
            vowel++
          }
        }

        consonant = words1.length - vowel;

         if(
          vowel==consonant){
            words.style.color = "yellow"
          }
          else if(vowel*3 >= consonant){
            words.style.color = "green";
          }
        
        else{
          words.style.color = "red";

        }
        words.innerText=words1;
        x.appendChild(words)

       }}

       randomWords(20,20);
    // console.log("word: ",words1)

//        x.push(words1)

//     }
//     for(var n = 0; n<words1.length; n++){
//         if(vowels.includes(n)>0){
//             vowel++;
//             // console.log(n);
//         }
//         else(consonant++)

//        }
//        console.log("Vowel: ",vowel)
//        console.log("Consonant: ",consonant)

//     return x
//     }






// console.log(randomWords(5,7));
// console.log(words1);


// function getCount(arr){
//   var vowelsCount = [0];
//   var consonantsCount = 0;
//   var str = [0];
//   const vowels = ['a','e','i','o','u'];

//   for (var x of arr){
//     if(vowels.includes(x)>=0){
//       vowelsCount++;
//       consonantsCount = arr.length-vowelsCount
//       if(vowelsCount>consonantsCount){
//         str=arr;
//       }
//     }      
//   }
//   return str
// }

// console.log(getCount("georgia","italy","france","spain"))

// object.model.inp = document.getElementById(".inp")
// var button = document.querySelector(".btn");
// button.addEventListener("click", function(){

//     object.push(input.value)


// })
// var object = {
//     model: [],
//     year: [],
//     color: [],
// }
// console.log(object.model)


// var obj = [];

// var button = document.querySelector(".btn");
// var name = document.getElementById("name");
// var color = document.getElementById("color");
// var year = document.getElementById("year");
// var view = document.querySelector(".view")


// button.addEventListener("click", function() {
//   obj.push({
//     model: model.value,
//     color: color.value,
//     year: year.value
//   })
//   console.log(obj)
// })
// var yearCounter = 0;
// var newCar = 0;
// var oldCar = 0;

// view.addEventListener("click", function() {

//     for(var i of Object.keys(obj)){
//         if(i > yearCounter){
//             newCar = i;
//         }
//         else{
//             oldCar = i;
//         }
//     }
// //   return obj
//   console.log("new:",newCar)
//   console.log("old:",oldCar)
// 