fs = require('fs');

exports['test is file'] = function (assert) {
    fs.readdirSync('data', {}).forEach(function (filename) {
        assert.ok(fs.lstatSync('data/' + filename).isFile(), filename);
    });
};

exports['test filename'] = function (assert) {
    fs.readdirSync('data', {}).forEach(function (filename) {
        assert.ok(/^[0-9]{8}\.json$/.test(filename), filename);
    });
};

exports['test content'] = function (assert) {
    fs.readdirSync('data', {}).forEach(function (filename) {
        // Carrega JSON
        var element = JSON.parse(fs.readFileSync('data/' + filename, 'utf8'));

        // Verificações

        assert.equal(typeof element._id, 'string', filename + ' "_id" exists');
        assert.ok(/^[0-9]{8}$/.test(element._id), filename + ' "_id" has correct pattern');
        assert.equal(filename.substring(0, 8), element._id, filename + ' "_id" is equal to filename');
    });
};

if (module == require.main) require('test').run(exports);
