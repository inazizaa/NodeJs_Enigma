exports.ok = function (values, res) {
    var data = {
        'status': 0,
        'values': values
    };
    res.json(data);
    res.end();
};

exports.err = function (values, res) {
    var data = {
        'status': 99,
        'values': values
    };
    res.json(data);
    res.end();
};

exports.notfound = function (values, res) {
    var data = {
        'status': 14,
        'values': (values ? values : 'data not found')
    };
    res.json(data);
    res.end();
};