setInterval(() => {
    console.log("shivam");
    const data = new Date();
    const htime = data.getHours();
    const mtime = data.getMinutes();
    const stime = data.getSeconds();

    const hrotesun = 30 * htime + mtime / 2;
    const mrotesun = 6 * mtime;
    const srotesun = 6 * stime;

    const hour = document.querySelector("#hrours");
    const mint = document.querySelector("#minutes");
    const second = document.querySelector("#second");

    hour.style.transform = `rotate(${hrotesun}deg)`;
    mint.style.transform = `rotate(${mrotesun}deg)`;
    second.style.transform = `rotate(${srotesun}deg)`;
}, 1000);