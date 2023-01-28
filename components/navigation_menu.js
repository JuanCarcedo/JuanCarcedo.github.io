/*
    Juan Carcedo 2023
    Navigation Menu rehusable for the whole webpage.
*/

// Declaration of the extended class for navigational bar
class navigationMenu extends HTMLElement {
    constructor() {
        super();
    }
    // Define the HTML code
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <ul class="nav-links">
                <!-- Navigation menu using checkbox for small screens -->
                <input type="checkbox" id="checkbox_toggle" />
                <!-- Include hamburger symbol -->
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="nav-menu">
                    <li><a href="index.html" rel="noopener">Home</a></li>
                    <li><a href="experience.html" rel="noopener">Experience</a></li>
                    <li><a href="about_me.html" rel="noopener">About</a></li>
                    <li><a href="./shop/shop_main.html" rel="noopener">Bootstrap shop</a></li>
                </div>
            </ul>
        </nav>
        `;
    }
}

// Register navigational menu/bar
customElements.define('navigation-menu', navigationMenu);
// Deploy in HTML --> <navigation-menu></navigation-menu>