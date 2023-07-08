import meals from  '../img/meals-menu-181.jpg';
import desserts from  '../img/dessert-menu-181.jpg';
import salads from  '../img/salad-men-181.jpg';
import '../styles/nav.css';

const createNav = (() => {
    const body = document.createElement("div");
    body.classList.add("body");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Recipes Menu";
    const div1 = document.createElement("div");
    const imgs = [meals, desserts, salads]
    const classList = ['Meals', 'Desserts', 'Salads']
    classList.forEach(CreateNav)
    function CreateNav(index, i){
        const navDiv = document.createElement("div");
        navDiv.classList.add(index)
        div1.appendChild(navDiv);
        const navImageHolder = document.createElement("img");
        navImageHolder.src = imgs[i];
        navDiv.appendChild(navImageHolder);
        const p = document.createElement("p");
        p.textContent = index;
        navDiv.appendChild(p)
    }

    const div2 = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.textContent = "This lamb is so undercooked, it's following Mary to school!";
    p2.textContent = "-Gordon Ramsay";

    content.append(body)
    body.appendChild(h1);
    body.appendChild(div1);
    body.appendChild(div2);
    div2.appendChild(p)
    div2.appendChild(p2)

    return body
})

export default createNav