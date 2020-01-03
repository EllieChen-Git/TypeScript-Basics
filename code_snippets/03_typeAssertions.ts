let message;
message = "abc";

let endWithC = (<string>message).endsWith("c"); //Method 1: more common
let alternativeWay = (message as string).endsWith("c"); //Method 2
