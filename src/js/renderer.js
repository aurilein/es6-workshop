/**
 * Show model on UI.
 */
class Renderer {
    constructor(data) {

    }

    render(news) {
        var message = `render: ${news.getText()} (${news.getDate()})`;

        console.log(message);
        document.getElementById('output').innerHTML = message;
    }
}

exports.Renderer = Renderer;
