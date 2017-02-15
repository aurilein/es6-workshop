class Renderer {
    constructor(data) {

    }

    render(news) {
        console.log(`render: ${news.getText()}`);
    }
}

exports.Renderer = Renderer;
