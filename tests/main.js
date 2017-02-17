exports['test dumb'] = function (assert) {
    assert.ok(true, 'Dumb');
};

if (module == require.main) require('test').run(exports);
