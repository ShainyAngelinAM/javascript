async function myfun(){
    let myPro = new Promise(function(myResolve, myReject) {
        let a=10; 
        let b=6;
        if (a<b) {
          myResolve("Operation was successful!"); 
        } else {
          myReject("There was an error."); 
        }
      });
    
    try {
        var result = await myPro;
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    return "hello";

}
myfun();


