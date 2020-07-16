function output(inp) {
    document.body.innerHTML ='<div style="width: auto;height: auto;"><pre style="min-height: 200px; font-size:12px; min-width: 200px;">'+inp+'</pre></div>';
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


let button = document.getElementById('button');

button.onclick = function(element) {
    var element = document.getElementById("json");
    var obj = JSON.parse(element.value);
    var str = JSON.stringify(obj, undefined, 4);
    output(syntaxHighlight(str));
};