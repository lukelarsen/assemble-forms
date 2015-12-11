var assign  = require('object-assign');
var postcss = require('postcss');

var processors = [
    {
        plugin:    require('postcss-assemble-form-helper'),
        namespace: 'formHelper',
        defaults:  {}
    }
];

module.exports = postcss.plugin('assembleForms', function (opts) {
    opts = assign({}, opts);

    var instance = postcss();

    processors.forEach(function (processor) {
        var namespaceOptions = processor.namespace in opts ? opts[processor.namespace] : opts;
        var processorOptions = {};

        processorOptions = assign({}, processor.defaults, namespaceOptions);

        if (namespaceOptions && !processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});