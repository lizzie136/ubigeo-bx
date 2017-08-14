const Table = (update) => {

    let title = document.createElement("h3");
    title.append(document.createTextNode(update.title));

    let main = document.createElement("table");
    let head =  document.createElement("thead");
    for(hTitle of settings.headers){
        let th =  document.createElement("th");
        th.append(document.createTextNode(hTitle));
        head.append(th);
    }
    main.append(head);

    let body = document.createElement("tbody");
    update.data.map((data) => {
        let tr = document.createElement("tr");
        data.reverse().splice(0,2).map((element) => {
            let spacePosition = element.indexOf(" ");
            let parts = [element.slice(0,spacePosition), element.slice(spacePosition+1)];
            let tdCode = document.createElement("td");
            tdCode.append(document.createTextNode(parts[0]));
            tr.append(tdCode);

            let td = document.createElement("td");
            td.append(document.createTextNode(parts[1]));
            tr.append(td);
        });
        body.append(tr);
    });
    main.append(body);

    return {table : main, title : title };
}