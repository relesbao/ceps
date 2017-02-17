fs = require('fs');

exports['test is file'] = function (assert) {
    fs.readdirSync('data', {}).forEach(function (filename) {
        assert.ok(fs.lstatSync('data/' + filename).isFile(), filename);
    });
};

exports['test filenames'] = function (assert) {
    fs.readdirSync('data', {}).forEach(function (filename) {
        assert.ok(/^[0-9]{8}\.json$/.test(filename), filename);
    });
};

if (module == require.main) require('test').run(exports);
