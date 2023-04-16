(async function () {
    const response = await fetch("./data.json");
    const records = await response.json();
    // console.log(records[0].vote_average);
    let genlist = ["All"];
    let yearlist = ["All"];
    let langlist = ["All"];
    let ratelist = ["All"];

    records.forEach(data => {
        // console.log(data.genres)
        genlist.push(data.genres);
        genlist = genlist.flat();
        genlist = [...new Set(genlist)];    //genre list ready

        // date list
        let date = data.release_date;
        date = date.slice(0, 4).split();
        date = Number(date)
        yearlist.push(date)
        yearlist = [...new Set(yearlist)]
        yearlist.sort((a, b) => b - a);

        // lang list

        // console.log(data.original_language)
        langlist.push(data.original_language);
        langlist = langlist.flat();
        langlist = [...new Set(langlist)];    //list ready

        // rate list
        let rate = data.vote_average;
        ratelist.push(rate)
        ratelist = [...new Set(yearlist)]
        ratelist.sort((a, b) => b - a);

    });
    // console.log(yearlist)
    // console.log(genlist)
    // console.log(langlist)
    // console.log(ratelist)


    // GENRES

    let genresDev = document.getElementById("genres");
    //Create and append select list
    let label = document.createElement("label");
    label.for = "genres";
    labelText = document.createTextNode("GENERE");
    label.appendChild(labelText);
    genresDev.appendChild(label);
    let selectList = document.createElement("select");
    selectList.id = "mySelect";
    genresDev.appendChild(selectList);

    //Create and append the options
    for (let i = 0; i < genlist.length; i++) {
        let option = document.createElement("option");
        option.value = genlist[i];
        option.text = genlist[i];
        selectList.appendChild(option);
    }

    // YEAR

    let yearsDev = document.getElementById("years");
    //Create and append select list
    label = document.createElement("label");
    label.for = "year";
    labelText = document.createTextNode("YEAR");
    label.appendChild(labelText);
    yearsDev.appendChild(label);
    selectList = document.createElement("select");
    selectList.id = "mySelect";
    yearsDev.appendChild(selectList);

    //Create and append the options
    for (let i = 0; i < yearlist.length; i++) {
        let option = document.createElement("option");
        option.value = yearlist[i];
        option.text = yearlist[i];
        selectList.appendChild(option);
    }

    // Language

    let langDev = document.getElementById("langs");
    //Create and append select list
    label = document.createElement("label");
    label.for = "lang";
    labelText = document.createTextNode("LANGUAGE");
    label.appendChild(labelText);
    langDev.appendChild(label);
    selectList = document.createElement("select");
    selectList.id = "mySelect";
    langDev.appendChild(selectList);

    //Create and append the options
    for (let i = 0; i < langlist.length; i++) {
        let option = document.createElement("option");
        option.value = langlist[i];
        option.text = langlist[i];
        selectList.appendChild(option);
    }

    // Rating

    let ratesDev = document.getElementById("rates");
    //Create and append select list
    label = document.createElement("label");
    label.for = "rate";
    labelText = document.createTextNode("RATING");
    label.appendChild(labelText);
    ratesDev.appendChild(label);
    selectList = document.createElement("select");
    selectList.id = "mySelect";
    ratesDev.appendChild(selectList);

    //Create and append the options
    for (let i = 0; i < ratelist.length; i++) {
        let option = document.createElement("option");
        option.value = ratelist[i];
        option.text = ratelist[i];
        selectList.appendChild(option);
    }

})()