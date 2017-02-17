fs     = require('fs');
config = JSON.parse(fs.readFileSync('tests/config.json', 'utf8'))

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

        assert.equal(typeof element, 'object', filename + ' contains an object');

        assert.equal(typeof element._id, 'string', filename + ' "_id" exists');
        assert.ok(/^[0-9]{8}$/.test(element._id), filename + ' "_id" is valid');
        assert.equal(filename.substring(0, 8), element._id, filename + ' "_id" is equal to filename');

        assert.equal(typeof element.tipo, 'string', filename + ' "tipo" exists');
        assert.ok(config.tipos.indexOf(element.tipo) >= 0, filename + ' "tipo" is valid');

        assert.equal(typeof element.logradouro, 'string', filename + ' "logradouro" exists');
        assert.ok(element.logradouro.length > 0, filename + ' "logradouro" is valid')

        assert.equal(typeof element.bairro, 'string', filename + ' "bairro" exists');
        assert.ok(element.bairro.length > 0, filename + ' "bairro" is valid');

        assert.equal(typeof element.cidade, 'string', filename + ' "cidade" exists');
        assert.ok(element.cidade.length > 0, filename + ' "cidade" is valid');

        assert.equal(typeof element.estado, 'string', filename + ' "estado" exists');
        assert.ok(config.estados.indexOf(element.estado) >= 0, filename + ' "estado" is valid');

        assert.ok(Object.keys(element).length == 6, filename + ' contains only needed attributes');
    });
};

if (module == require.main) require('test').run(exports);
