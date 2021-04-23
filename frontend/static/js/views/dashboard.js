import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");

    }
    async getHtml() {
        return `<h1>Single Page Applicaton</h1>
        <p>this is Single page application, this page is made with Native Javascript, No frameworks included.</p>
        `;
    }
}