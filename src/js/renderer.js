class Renderer {
    constructor(data) {

    }

    render(news) {
        console.log(`render: ${news.getText()} (${news.getDate()})`);
    }
}

exports.Renderer = Renderer;
