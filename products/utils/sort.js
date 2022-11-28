function discSort(){
    let temp = JSON.parse(localStorage.getItem("curData"));
    temp.sort((a, b) => {
        return b.off - a.off;
    });
    return temp;
}

function lthSort(){
    let temp = JSON.parse(localStorage.getItem("curData"));
    temp.sort((a, b) => {
        return a.price - b.price;
    });
    return temp;
}

function htlSort(){
    let temp = JSON.parse(localStorage.getItem("curData"));
    temp.sort((a, b) => {
        return b.price - a.price;
    });
    return temp;
}

function atzSort(){
    let temp = JSON.parse(localStorage.getItem("curData"));
    temp.sort((a, b) => {
        if(a.title > b.title) return 1;
        else if(b.title > a.title) return -1;
        else 0;
    });
    return temp;
}

function ztaSort(){
    let temp = JSON.parse(localStorage.getItem("curData"));
    temp.sort((a, b) => {
        if(a.title > b.title) return -1;
        else if(b.title > a.title) return 1;
        else 0;
    });
    return temp;
}

export {discSort, lthSort, htlSort, atzSort, ztaSort};