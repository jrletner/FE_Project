// ---- Simple ID helper ----
let __id = 1;
function makeId(prefix) {
    return `${prefix}_${__id++}`;
}


// ---- Models ----
export class Member {
    constructor(name, role = "member") {
        this.id = makeId("m");
        this.name = name;
        this.role = role;
    }
}