/*
    Juan Carcedo 2023
    Footer element reusable for the whole webpage.
*/

// Declaration of the extended class for footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }
    // Define the HTML code
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>Juan Carcedo </p>
            <p>Copyright &copy; 2022-2023</p>
            <!-- Icons -->
            <div class="bucket-images">
                <a href="https://www.linkedin.com/in/juancarcedoaldecoa/en" target="_blank" rel="noopener noreferrer">
                    <img src="resources/images/footer/linkedin_2.gif" alt="LinkedIn">
                </a>
                <a href="https://github.com/JuanCarcedo" target="_blank" rel="noopener noreferrer">
                    <img src="resources/images/footer/github-mark-white.png " alt="GitHub">
                </a>
            </div>
        </footer>
        `;
    }
}

// Register footer-element
customElements.define('footer-element', Footer);
// Deploy in HTML --> <footer-element></footer-element>