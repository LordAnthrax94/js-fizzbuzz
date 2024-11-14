// L'utilizzo del 15 è voluto perchè esso è un numero multiplo di 3 e 5
for(let i = 1; i <= 100; i++){
  if(i % 15 == 0){   
   console.log('FizzBuzz');    
  }else if (i % 3 == 0){
    console.log('Fizz');
    
  }else if(i % 5 == 0){
   console.log('Buzz');
   
  }else{
   console.log(i);
   
  }
}