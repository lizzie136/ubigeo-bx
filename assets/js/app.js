const state = {
    data : []
};

const settings = {
    headers : [
        "Código",
        "Nombre",
        "Código Padre",
        "Descripción Padre"
    ],
    parts : [
        {title : "Departamento", minimal : 1},
        {title : "Provincia", minimal : 2},
        {title : "Distrito", minimal : 3}
    ]
};

var render = (data) => {
    let main = document.getElementById("info");

    let tables = settings.parts.map( (part) => {
        return Table({data:data.filter( (element) => {
            return element.length == part.minimal;
        }), title:part.title});
    });
    tables.forEach( (element) => {
        main.append(element.title);
        main.append(element.table);
    });
};

var transform = (ev) => {
    let lines = ev.target.result.split("\n").map((e) => e.substring(2, e.length-1));
    state.data = lines.map( (line) => {
        line = line.split("/");
        let list = [];
        console.log(line);
        for(element of line){
            if (element.trim() != "") list.push(element.trim());
        }
        return list;
    });
    render(state.data);
};

var init = (e) => {
    e.preventDefault();
    var input = document.getElementsByName("load-file")[0];
    if(input.files && input.files.length > 0) {
        let file = input.files[0];
        if (file.type == 'text/plain') {
            let reader = new FileReader();
            reader.onload = transform;
            reader.readAsText(file, 'UTF-8');
        }
    }
};

// window.addEventListener('load', init);
document.getElementById("load-btn").addEventListener("click", init);
