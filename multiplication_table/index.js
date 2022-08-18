var max = 9;
for (x = 1; x<=max; x++){
    var line = '';
    for(var y = 1; y <= x; y++){
        product = x * y;
        line = line + x + "*" + y + "=" + product + " ";
    }
    console.log(line)
}