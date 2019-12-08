function count() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("Finally:" + i); //var is functional scope (i is accessible throughout the function, so we'll see "Finally: 5" here)

  //However, if we declare our variable with 'let' (block scope: i is only available to the for loop), 'i' is not accessible here
}

count();
