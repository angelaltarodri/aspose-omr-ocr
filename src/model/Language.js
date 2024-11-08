(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.Asposeocrcloud) {
            root.Asposeocrcloud = {};
        }
        root.Asposeocrcloud.Language = factory(root.Asposeocrcloud.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';

    const Language = {
        "English":1,
        "German":2,
        "French":3,
        "Spanish":4,
        "Portuguese":5,
        "Italian":6,
        }
    Object.freeze(Language)

    /**
     * Text recognition Language
     * @member {Language} Language
     */
    var exports = Language

    return exports;
}));