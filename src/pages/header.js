const createHeader = (() => {
    const header = document.createElement("div");
    header.classList.add("header");
    const header_top = document.createElement("div");
    header_top.classList.add("header-top");
    const h1_header = document.createElement("h1");
    h1_header.classList.add("Home");
    h1_header.textContent = 'My Cookbook';
    const ul = document.createElement("ul");
    const links = ['Facebook', 'Youtube', 'Google'];
    const href =["https://www.facebook.com/", "https://youtube.com", "https://google.com"];
    
    links.forEach(rederLi)
        function rederLi(link, index){
            const li = document.createElement("li");
            ul.appendChild(li);
            const ul_a = document.createElement("a");
            ul_a.textContent = link;
            ul_a.href = href[index]
            li.appendChild(ul_a);
        }

    const header_bottom = document.createElement("div");
    header_bottom.classList.add("header-bottom");

    const div1 = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button1 = document.createElement("button");
    button1.classList.add("Crunch");
    button1.textContent = "Crunch"
    h2.textContent = 'Welcome to our family cookbook!'
    p.textContent = "This is a small project that i made, it's in the early stages, but slowly it will to evolve to something cool.";
    
    const div2 = document.createElement("div");
    const imageHolder = document.createElement("div");
    imageHolder.classList.add("placeholder")
    imageHolder.textContent = "This is a placeholder for an image."
    
    content.append(header)
    header.appendChild(header_top);
    header_top.appendChild(h1_header)
    header_top.appendChild(ul);
    header.appendChild(header_bottom);
    header_bottom.appendChild(div1);
    div1.appendChild(h2);
    div1.appendChild(p);
    div1.appendChild(button1);
    header_bottom.appendChild(div2);
    div2.appendChild(imageHolder);

    return header
})

export default createHeader