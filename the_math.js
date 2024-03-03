

function calcuate_defence(base,iv,ev,nature,level,item) {
    if (item == "eviolite") {
        return Math.floor(Math.floor(((((2 * base + iv + Math.floor((ev/4))) * level)/100)+5)*nature)*1.5)
    }
    else {
        return Math.floor(((((2 * base + iv + Math.floor((ev/4))) * level)/100)+5)*nature)
    }
}

function calcuate_hp(base,iv,ev,level) {
    return Math.floor((((2*base+iv+Math.floor(ev/4))*level)/100)+level+10)
}
function in_array(array,nature){
    for (let i = 0; i < array.length;i++){
        if (nature == array[i]) {
            return Boolean(1);
        }
    }
}
function get_nature_multi(nature) {
    const natures_plus = ["bold","impish","lax","relaxed"];
    const natures_minus = ["lonely","mild","gentle","hasty"];
    if (in_array(natures_plus,nature)) {
        return 1.1
    }
    else if (in_array(natures_minus,nature)) {
        return 0.9
    }
    else {
        return Number(1)
    }
}

function damage_calc(nature,def,hp,item) {
    const berrys = ["passho berry","sitrus berry","oran berry","kee berry","enigma berry","auguav berry"]
    if item 
}