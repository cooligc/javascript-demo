(function(){
    console.log("Hello Promise")

    let connect = new Promise(function(resolve, reject){
        console.log("Connecting to server : url ");
        let randomNumber = Math.floor(Math.random() * 10)

        let isSuccess = (randomNumber % 2 === 0)

        console.log(randomNumber + "    "+ isSuccess)
        if((isSuccess)){
            console.log("Success")
            resolve("success")
        }else{
            console.log("Failure")
            reject("failure")
        }
    })


    connect.then(function(fromResolve){
        console.log("Operation : "+ fromResolve)
    }).catch(function(fromReject){
        console.log("Opearation : "+ fromReject)
    })

    

})()