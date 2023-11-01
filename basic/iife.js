//++++ Immediately invoked  function  expression ( IIFE ) ++++++//

(function chai(){
    // named iife
    console.log(`DB Connected`);
}) ();

( (name) => {
    console.log(`DB Connected 2 ${name}`);

}) ("Pintoo")