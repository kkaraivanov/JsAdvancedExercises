function extensibleObject() {
    let p = {};
    let inst = Object.create(p);

    inst.extend = function (template) {
        Object.entries(template).forEach(([k, v]) => {
            if (typeof v === 'function') p[k] = v;
            else inst[k] = v;
        })
    }

    return inst;
}