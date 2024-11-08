/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="OCRRect.js">
*   Copyright (c) 2021 Aspose.OCR for Cloud
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

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
        root.Asposeocrcloud.OCRRect = factory(root.Asposeocrcloud.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';

    /**
     * The OCRRect model module.
     * @module model/OCRRect
     * @version 20.12.0
     */


    var exports = function() {
        var _this = this;
    };


    /**
     * Constructs a new <code>OCRRect</code>.
     * Represents a rectangle: Left-Top (X1-Y1) to Right-Bottom (X2-Y2)
     * @alias module:model/OCRRect
     * @class
     * @param topLeftX  X-Coordinate of top left corner
     * @param topLeftY  Y-Coordinate of top left corner
     * @param bottomRightX  X-Coordinate of bottom right corner
     * @param bBottomRightY  Y-Coordinate of bottom right corner
     */
    var exports = function(topLeftX, topLeftY, bottomRightX, bBottomRightY) {
        var _this = this;

        _this['topLeftX'] = topLeftX;
        _this['topLeftY'] = topLeftY;
        _this['bottomRightX'] = bottomRightX;
        _this['bBottomRightY'] = bBottomRightY;
    };

    /**
     * Constructs a <code>OCRRect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OCRRect} obj Optional instance to populate.
     * @return {module:model/OCRRect} The populated <code>OCRRect</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
        if (regions) {
            obj = obj || new exports();

            if (data.hasOwnProperty('topLeftX')) {
                obj['topLeftX'] = ApiClient.convertToType(data['topLeftX'], 'Integer');
            }
            if (data.hasOwnProperty('topLeftY')) {
                obj['topLeftY'] = ApiClient.convertToType(data['topLeftY'], 'Integer');
            }
            if (data.hasOwnProperty('bottomRightX')) {
                obj['bottomRightX'] = ApiClient.convertToType(data['bottomRightX'], 'Integer');
            }
            if (data.hasOwnProperty('bBottomRightY')) {
                obj['bBottomRightY'] = ApiClient.convertToType(data['bBottomRightY'], 'Integer');
            }
        }
        return obj;
    }

    /**
     * X-Coordinate of top left corner
     * @member {Integer} topLeftX
     */
    exports.prototype['topLeftX'] = undefined;
    /**
     * Y-Coordinate of top left corner
     * @member {String} topLeftY
     */
    exports.prototype['topLeftY'] = undefined;

    /**
     * X-Coordinate of bottom right corner
     * @member {Integer} bottomRightX
     */
    exports.prototype['bottomRightX'] = undefined;

    /**
     * Y-Coordinate of bottom right corner
     * @member {Integer} bBottomRightY
     */
    exports.prototype['bBottomRightY'] = undefined;

    return exports;
}));
