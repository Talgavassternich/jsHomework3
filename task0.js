const fire = () => {
    console.log('Fire!')
};
const once = (fire) => {
    let i = true;
    return () => {
        if (i) {
            fire();
            i = false;
        }
    }
};
const f = once(fire);

f();
f();
f();
f();
