import createHeader from "./header";
import createNav from "./nav-bar";
import createFooter from "./footer";
import createMeals from "./meals";
import createDesserts from "./desserts";
import createSalads from "./salads"
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
    
    const createDessertsPage = (() => {
        content.textContent = "";
        createHeader();
        createDesserts()
        createFooter();
        MealsListeners()
    })

    const createSaladsPage = (() => {
        content.textContent = "";
        createHeader();
        createSalads()
        createFooter();
        MealsListeners()
    })
    

    const HomePagelisteners = (() => {
        const meals = document.getElementsByClassName('Meals')[0];
        const desserts = document.getElementsByClassName('Desserts')[0];
        const salads = document.getElementsByClassName('Salads')[0];
        const home = document.getElementsByClassName('Home')[0];
        meals.addEventListener('click', createMealsPage);
        desserts.addEventListener('click', createDessertsPage);
        salads.addEventListener('click', createSaladsPage);
        home.addEventListener('click', createHomePage);
    })

    const MealsListeners = (() => {
        const home = document.getElementsByClassName('Home')[0];
        home.addEventListener('click', createHomePage);
    })
    return createHomePage()
})()
