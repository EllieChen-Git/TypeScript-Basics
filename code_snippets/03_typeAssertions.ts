let messageTwo; //data type: any
messageTwo = "abc";

//Type assertion as string
let endWithC = (<string>messageTwo).endsWith("c"); //Method 1: more common
let alternativeWay = (messageTwo as string).endsWith("c"); //Method 2
