console.log('hello')
let cont = document.querySelector(".container")
let random1 = Math.floor(Math.random() * (5 - 1) + 1) * 1000;



async function space() {
    return new Promise((resolve) => {
        cont.insertAdjacentHTML("beforeend", "<br><br>");
        resolve();
    })

}


async function statement(text) {
    await new Promise((resolve) => {
        setTimeout(() => {
            cont.insertAdjacentHTML("beforeend", text);
            resolve()
        }, random1)

    })
    await repeatdot(450, 3)
    await space()


}


async function repeatdot(interval, times) {
    return new Promise((resolve) => {
        let count = 0;
        const work = setInterval(() => {
            cont.insertAdjacentText("beforeend", ".");
            count++;
            if (count >= times) {
                clearInterval(work);
                resolve();
            }
        }, interval);
    });
}



async function main() {
    cont.innerHTML = ""
    await statement("Initializing Hacking")
    await statement("Reading your Files")
    await statement("Password files Detected")
    await statement("Sending all passwords and personal files to server")
    await statement("Cleaning up")
    cont.insertAdjacentHTML("beforeend", "<b>-----YOUR DEVICE IS HACKED NOW-----</b>");
    


}
main()


