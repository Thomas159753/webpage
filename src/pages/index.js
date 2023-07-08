import createHeader from "./header";
import createNav from "./nav-bar";
import createFooter from "./footer";
import createMeals from "./menu";
import '../styles/style.css';

const diployWebsite = (() => {
    const content = document.getElementById('content');
    
    const createHomePage = (() => {
        content.textContent = "";
        createHeader();
        createNav();
        createFooter();
        HomePagelisteners()
    })
    
    const createMealsPage = (() => {
        content.textContent = "";
        createHeader();
        createMeals()
        createFooter();
        MealsListeners()
    })
    
    const HomePagelisteners = (() => {
        const meals = document.getElementsByClassName('Meals')[0];
        const desserts = document.getElementsByClassName('Desserts')[0];
        meals.addEventListener('click', createMealsPage);
        const home = document.getElementsByClassName('Home')[0];
        home.addEventListener('click', createHomePage);
    })

    const MealsListeners = (() => {
        const home = document.getElementsByClassName('Home')[0];
        home.addEventListener('click', createHomePage);
    })
    return createHomePage()
})()
