


function callBackFunction(errors, path) {
    if(errors) {
        console.log(errors);
        return new Error(errors);
    }
    else {
        console.log(path);
        return path;
    }
}

callBackFunction(null, './public/...');