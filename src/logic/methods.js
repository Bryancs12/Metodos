
const nerdamer = require("nerdamer/all.min");

export const methods = () => {

    const derivate = (func) => {
        let derivate = nerdamer('diff(' + func + ')');
        return derivate.text();
    }

    const test1 = (vBegin, func) => {
        var e = nerdamer(func, { x: vBegin });
        return e.text();

    }


   
    function calculateXDerivate(func, vBegin, iteraciones) {
        let spaceX = 1;
        let itercion = [];
        let xn = [];
        let fx = [];
        let f_x = [];
        xn.push(vBegin);
        let derivada = derivate(func);
        for (let i = 0; i <= iteraciones; i++) {
            itercion.push(spaceX++);
            fx.push((test1(xn[i], func)));
            f_x.push((test1(xn[i], derivada)));
            xn.push((xn[i] - (fx[i] / f_x[i])));

        }
        
        return {
            "ite": itercion,
            "x": xn,
            "f(x)": fx,
            "f_(x)": f_x
        };
    }

    return [calculateXDerivate];

}


