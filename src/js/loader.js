/**
 *  Load data needed for Ticker.
 */
class Loader {
    constructor() {
    }

    /**
     * Load a JSON from the URL.
     * @param {String} url
     * @returns {Promise} JSON data.
     */
    load(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }

}

exports.Loader = Loader;
