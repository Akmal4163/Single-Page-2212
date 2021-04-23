import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Posts");

    }
    async getHtml() {
        return `<h1>This Is Posts Page</h1>
        <p>you can add posts here.</p>
        `;
    }
}