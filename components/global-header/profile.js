"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.assign"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkProps = _interopRequireDefault(require("./check-props"));

var _button = _interopRequireDefault(require("../button"));

var _popover = _interopRequireDefault(require("../popover"));

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * This component is an `Avatar` component that opens a `Popover` component when clicked.
 */
var GlobalHeaderProfile = /*#__PURE__*/function (_React$Component) {
  _inherits(GlobalHeaderProfile, _React$Component);

  var _super = _createSuper(GlobalHeaderProfile);

  function GlobalHeaderProfile(props) {
    var _this;

    _classCallCheck(this, GlobalHeaderProfile);

    _this = _super.call(this, props);
    (0, _checkProps.default)(_constants.GLOBAL_HEADER_PROFILE, props);
    return _this;
  }

  _createClass(GlobalHeaderProfile, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-haspopup': true
      };
      var popoverProps = (0, _lodash.default)({
        align: 'bottom right',
        body: /*#__PURE__*/_react.default.createElement("span", null),
        className: this.props.className,
        heading: this.props.userName,
        id: this.props.id,
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {}); // Note: the default avatar is done this way to prevent documentation from showing this giant string

      /* eslint-disable max-len */

      var avatar = 'data:image/jpeg;base64,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';
      /* eslint-enable max-len */
      // eslint-disable-next-line fp/no-delete

      delete popoverProps.children;
      avatar = this.props.avatar ? this.props.avatar : avatar;
      return /*#__PURE__*/_react.default.createElement(_popover.default, popoverProps, /*#__PURE__*/_react.default.createElement(_button.default, _extends({
        className: (0, _classnames.default)('slds-global-actions__avatar slds-global-actions__item-action', this.props.buttonClassName),
        title: this.props.userName,
        variant: "icon"
      }, buttonAriaProps), typeof avatar === 'string' ? /*#__PURE__*/_react.default.createElement("span", {
        className: "slds-avatar slds-avatar_circle slds-avatar_medium"
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: this.props.userName,
        src: avatar,
        title: "User avatar"
      })) : avatar || null));
    }
  }]);

  return GlobalHeaderProfile;
}(_react.default.Component); // ### Display Name


GlobalHeaderProfile.displayName = _constants.GLOBAL_HEADER_PROFILE; // ### Prop Types

GlobalHeaderProfile.propTypes = {
  /**
   * Extra classnames to apply to the popover.
   */
  className: _propTypes.default.string,

  /**
   * An image URL or avatar node to display for the user profile. Defaults to a base64 encoded generic user avatar image string
   */
  avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * CSS classes to be added to the `button` element.
   */
  buttonClassName: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the popover to the triggering button. If an id is not provided, it will be automatically generated.
   */
  id: _propTypes.default.string,

  /**
   * A `Popover` component. The props from this popover will be merged and override any default props.
   */
  popover: _propTypes.default.node,

  /**
   * The user name of the profile. Defaults to "User Name"
   */
  userName: _propTypes.default.string
}; // ### Default Props

GlobalHeaderProfile.defaultProps = {
  userName: 'User Name'
};
var _default = GlobalHeaderProfile;
exports.default = _default;