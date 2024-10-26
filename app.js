let btn = document.querySelector("button");
let p = document.querySelector("#message");

btn.addEventListener("click", () => {
    p.innerText = "Your message has been submitted successfully!";
});
