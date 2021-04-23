import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Settings");

    }
    async getHtml() {
        return `<h1>This Is Setting Page</h1>
        <p>you can manage settings here.</p>
        `;
    }
}