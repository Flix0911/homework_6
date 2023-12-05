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
    $container.append($storageTrunkUl);

    //list of items

    //butter beer
    const $butterBeerLi = $("<li>").text("Butter Beer");
    //console.log($butterBeerLi)
    $storageTrunkUl.append($butterBeerLi);

    //invisibility cloak (add a class of secret)
    const $invisibilityCloakLi = $("<li>").text("Invisibility Cloak");
    //console.log($invisibilityCloakLi)
    $invisibilityCloakLi.attr("class", "secret");
    $storageTrunkUl.append($invisibilityCloakLi);

    //magic map (add a class of secret)
    const $magicMapLi = $("<li>").text("Magic Map");
    //console.log($magicMapLi)
    $magicMapLi.attr("class", "secret");
    $storageTrunkUl.append($magicMapLi);

    //time turner (add a class of secret)
    const $timeTurnerLi = $("<li>").text("Time Turner");
    //console.log($timeTurnerLi)
    $timeTurnerLi.attr("class", "secret");
    $storageTrunkUl.append($timeTurnerLi);

    //Leash (ensure you give the element the same class as your pet)
    const $leashLi = $("<li>").text("Leash");
    //console.log($leashLi)
    $leashLi.attr("id", "#puppie");
    $storageTrunkUl.append($leashLi);

    //Bertie Bott' Every Flavor [Jelly] Beans
    const $beansLi = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans.");
    //console.log($beansLi)
    $storageTrunkUl.append($beansLi);

    //right above your table, add an h5 element that says 'Spring 2017'
    const $h5 = $("<h5>");
    //console.log($h5)
    $h5.text("Spring 2017");
    $container.append($h5);

    //Make a table
    const $table = $("<table>");
    //console.log($table);
    $container.append($table);

    const $thread = $("<thread>");
    //console.log($thread);
    $table.append($thread);

    //inside the thread element add two th elements
        //in the first th add the text day
    const $th1 = $("<th>").text("Day");
    //console.log($th1);
    $thread.append($th1);

        //in the second th add the text Classes
    const $th2 = $("<th>").text("Classes");
    //console.log($th2);
    $thread.append($th2);

    //create a tr element and add two td elements inside
    const $tr1 = $("<tr>");
    $table.append($tr1);
    //console.log($tr1);
    //1st td add the day Monday
    const $td1 = $("<td>").text("Monday");
    //console.log($td1)
    const $td2 = $("<td>").text("Herbology");
    //console.log($td2)
    $tr1.append($td1)
    $tr1.append($td2)

    //Create more tr elements with tds inside so that you have Mon-Fri and classes each of those days

    //for tuesday
    const $tr2 = $("<tr>");
    $table.append($tr2)
    const $td3 = $("<td>").text("Tuesday");
    $tr2.append($td3)
    const $td4 = $("<td>").text("Divination");
    $tr2.append($td4);

    //for wednesday
    const $tr3 = $("<tr>");
    $table.append($tr3);
    const $td5 = $("<td>").text("Wednesday");
    $tr3.append($td5);
    const $td6 = $("<td>").text("History of Magic");
    $tr3.append($td6)

    //for Thursday
    const $tr4 = $("<tr>");
    $table.append($tr4);
    const $td7 = $("<td>").text("Thursday");
    $tr4.append($td7);
    const $td8 = $("<td>").text("Charms");
    $tr4.append($td8);

    //for Friday
    const $tr5 = $("<tr>");
    $table.append($tr5);
    const $td9 = $("<td>").text("Friday");
    $tr5.append($td9);
    const $td10 = $("<td>").text("Quidditch Practice");
    $tr5.append($td10);

    //console.log($table)

    //Year 5

    //Break your wand
    $h4b.remove();

    //remove your butter beer
    $butterBeerLi.remove()

    //add a new wand. Be sure to add to the same spot after your pet
    $h4b.text("The remade wand of the psycho puppie").css("color", "purple");
    //style your wand
    $h4b.insertAfter($h4a);

    //send pet on a spy mission
    $h4a.remove();
    $td10.append($h4a);

    //have your pet come back
    $h4a.remove();
    $h4a.insertAfter($h3);

    //Year 6

    //Hide all belongs, give an argument of slow - to see this function in action
    //argument of 2000
    //show
    $(".secret").hide().delay(2000).show(0);

    //change leash to half cabbage
    $leashLi.text("half cabbage");
    $leashLi.addClass("cabbage");

    //remove the cabbage class
    $leashLi.removeClass("cabbage");

});

//Query for your div with the id of container and set it to a variable named $container

