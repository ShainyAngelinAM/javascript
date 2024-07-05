async function myfun(){
    return"hello"
}
 function myfuns(){
     return Promise.reject("hiiiii")
}
}
myfun().then(
    function(value) {
      console.log(value); 
    },
    function(error) {
      console.error(error); 
    }
  );

  myfuns().then(
    function(value) {
      console.log(value); 
    },
    function(error) {
      console.error(error); 
    }
  );
