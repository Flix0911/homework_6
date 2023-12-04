// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
//Commenting out, Jquery hooked up

//In app.js
$(() => {
	const $container = $("#container")
    //console.log($container) 

    //h1 element with text: Hogwarts
    const $h1 = $("<h1>");
    //console.log($h1)
    $h1.text("Hogwarts");
    $container.append($h1);

    //h2 element with your name
    const $h2 = $("<h2>");
    //console.log($h2)
    $h2.text("Erick Valencia");
    $container.append($h2)

    //h3 element with your house
    const $h3 = $("<h3>");
    //console.log($h3)
    $h3.text("Slytherin")
    $container.append($h3);

    //h4 element with your pet's name
    const $h4a = $("<h4>")
    //console.log($h4)
    //add an attribute of fon-tfamily: fantasy; to all elements that have a class tha matches your pet's class
    $h4a.attr("id", '#puppie')
    $h4a.text("Pippin")
    $container.append($h4a)

    const $h4b = $("<h4>")
    //console.log($h4b)
    $h4b.text("Wand of the Puppie Pal")
    $container.append($h4b)
});

//Query for your div with the id of container and set it to a variable named $container

