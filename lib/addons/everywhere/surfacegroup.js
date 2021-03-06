'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SurfaceGroup = (function (_Component) {
  _inherits(SurfaceGroup, _Component);

  _createClass(SurfaceGroup, null, [{
    key: 'displayName',
    value: 'SurfaceGroup',
    enumerable: true
  }]);

  function SurfaceGroup(props, context) {
    _classCallCheck(this, SurfaceGroup);

    _get(Object.getPrototypeOf(SurfaceGroup.prototype), 'constructor', this).call(this, props, context);
    this._parentId = typeof props.parentId === 'string' && props.parentId.length ? props.parentId : context['--everywhere-parentId'] || null;
  }

  _createClass(SurfaceGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        '--everywhere-parentId': this.props.id,
        '--everywhere-prev-parentId': this._parentId
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var id = _props.id;
      var _props$parentId = _props.parentId;
      var parentId = _props$parentId === undefined ? '' : _props$parentId;

      var props = _objectWithoutProperties(_props, ['children', 'id', 'parentId']);

      return _react2['default'].createElement('div', props, children);
    }
  }], [{
    key: 'propTypes',
    value: {
      id: _react.PropTypes.string.isRequired,
      parentId: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      '--everywhere-parentId': _react.PropTypes.string,
      '--everywhere-prev-parentId': _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'contextTypes',
    value: {
      '--everywhere-parentId': _react.PropTypes.string
    },
    enumerable: true
  }]);

  return SurfaceGroup;
})(_react.Component);

exports.SurfaceGroup = SurfaceGroup;