
class HashStorageFunc {
    constructor(callb1, callb2) {
    this.alco = {};
    this.status;
    this.flock = callb1;
    this.funlock = callb2;

}

startAdd(key, value) {
    updatePassword = Math.random();
    this.alco[key] = value;
    $.ajax({
        url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
        data: { f: 'LOCKGET', n: stringlabel, p: updatePassword },
        success: this.upgradeValue, error: this.errorHandler
    }
    );
}

upgradeValue= (callresult) => {
    this.flock();
    $.ajax({
        url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
        data: { f: 'UPDATE', n: stringlabel, v: JSON.stringify(this.alco), p: updatePassword },
        success: this.updateReady, error: this.errorHandler
    }
    );
}

updateReady= (callresult) => {
    this.funlock();
    if (callresult.error != undefined)
        alert(callresult.error);
}

getValue(key) {

    if (key in this.alco)
        return 'алкогольность ' + (this.alco[key].a === true ? "да" : "нет") + " рецепт " + this.alco[key].b;
    else
        return 'нема такого, пробуй ещё';
}


startDelete(key) {
    updatePassword = Math.random();
    if (key in this.alco) { delete this.alco[key]; this.status = true }
    else {this.status = false};
    $.ajax({
        url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
        data: { f: 'LOCKGET', n: stringlabel, p: updatePassword },
        success: this.upgradeValue, error: this.errorHandler
    }
    );
}


getKeys() {
    var all = [];
    for (var i in this.alco)
        all.push(i);
    return all;
}

downloadKeys() {
    this.flock();
    $.ajax(
        {
            url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
            data: { f: 'READ', n: stringlabel },
            success: this.readReady, error: this.errorHandler
        }
    );
}

readReady = (callresult) => {
    this.funlock();
    this.alco = JSON.parse(callresult.result);
}

errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}
}
