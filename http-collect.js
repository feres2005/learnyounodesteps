
const http = require('http');
const bl = require('bl')
const two = process.argv[2]
if (process.argv.length < 3) {
    console.log('specify');
    return;
}
http.get(two, (request, response) => {
    response.pipe(bl, ((error, data) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log(data.length);
        console.log(data.toString());
    }));
});