// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }
    //grabbing an event listener window model
    window.addEventListener("load",Start);
})();