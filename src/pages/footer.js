const createFooter = (() => {
    const content = document.getElementById('content');

    const footer = document.createElement("div");
    footer.classList.add("footer")

    const div1 = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Sign up for our e-newsletter"
    const button2 = document.createElement("button");
    button2.classList.add("sign-up");
    button2.textContent = "Sign up"

    const div2 = document.createElement("div");
    const p2 = document.createElement("p");
    p2.textContent = "Copyright © The Odin Project 2023"
    
    content.append(footer)
    footer.appendChild(div1);
    div1.appendChild(p);
    div1.appendChild(button2);
    footer.appendChild(div2);
    div2.appendChild(p2);
    return footer
})

export default createFooter