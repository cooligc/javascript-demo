(function(){

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }

     sayHello =  async function(name, callback){
        if(typeof callback === 'function'){
            console.log(new Date() + "  Pre Callback")
            await sleep(3000);
            callback(name)
            console.log(new Date() + "   Post callback")
        }
    }

    console.log(new Date() + "   Before execution")
    sayHello("sitakant", function(name){
        console.log(new Date() + "   Hello "+name)
    })

    console.log(new Date() + "   After execution")




})()