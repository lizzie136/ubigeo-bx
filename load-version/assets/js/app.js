const state = {
    data : []
}

var init = (e) => {
    e.preventDefault();
    var input = document.getElementsByName("load-file")[0];
    if(input.files && input.files.length > 0) {
        let file = input.files[0];
        if (file.type == 'text/plain') {
            let reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (ev) => {
                let lines = ev.target.result.split("\n").map((e) => e.substring(2, e.length-1));
                state.data = lines.map( (line) => {
                    let tmp = line.split("/");
                    let obj = {};
                    obj[tmp[0]] = tmp[1];
                    obj[tmp[2]] = tmp[3];
                    return obj;
                });
                console.log(state.data);
                document.write(ev.target.result);
            };
        }
    }
};

// window.addEventListener('load', init);
document.getElementById("load-btn").addEventListener("click", init);
