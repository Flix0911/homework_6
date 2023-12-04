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
    $container.append($h2);

    //h3 element with your house
    const $h3 = $("<h3>");
    //console.log($h3)
    $h3.text("Slytherin");
    $container.append($h3);

    //h4 element with your pet's name
    const $h4a = $("<h4>");
    //console.log($h4)
    //add an attribute of fon-tfamily: fantasy; to all elements that have a class tha matches your pet's class
    $h4a.attr("id", '#puppie');
    $h4a.text("Pippin");
    $container.append($h4a);

    const $h4b = $("<h4>");
    //console.log($h4b)
    $h4b.text("Wand of the Puppie Pal");
    $container.append($h4b);

    //create a ul of the below with the attribute of storage and value of trunk

    const $storageTrunkUl = $("<ul>");
    //console.log($storageTrunkUl)
    $storageTrunkUl.attr("storage", "trunk");
    $container.append($storageTrunkUl)

    //list of items

    //butter beer
    const $butterBeerLi = $("<li>").text("Butter Beer")
    //console.log($butterBeerLi)
    $storageTrunkUl.append($butterBeerLi)

    //invisibility cloak (add a class of secret)
    const $invisibilityCloakLi = $("<li>").text("Invisibility Cloak")
    //console.log($invisibilityCloakLi)
    $invisibilityCloakLi.attr("class", "secret")
    $storageTrunkUl.append($invisibilityCloakLi)

    //magic map (add a class of secret)
    const $magicMapLi = $("<li>").text("Magic Map")
    //console.log($magicMapLi)
    $magicMapLi.attr("class", "secret")
    $storageTrunkUl.append($magicMapLi)

    //time turner (add a class of secret)
    const $timeTurnerLi = $("<li>").text("Time Turner")
    //console.log($timeTurnerLi)
    $timeTurnerLi.attr("class", "secret")
    $storageTrunkUl.append($timeTurnerLi)

    //Leash (ensure you give the element the same class as your pet)
    const $leashLi = $("<li>").text("Leash")
    //console.log($leashLi)
    $leashLi.attr("id", "#puppie")
    $storageTrunkUl.append($leashLi)

    //Bertie Bott' Every Flavor [Jelly] Beans
    const $beansLi = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans.")
    //console.log($beansLi)
    $storageTrunkUl.append($beansLi)
});

//Query for your div with the id of container and set it to a variable named $container

