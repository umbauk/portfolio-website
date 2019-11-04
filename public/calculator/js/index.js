var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var App = (function(_React$Component) {
  _inherits(App, _React$Component);
  function App(props) {
    _classCallCheck(this, App);
    var _this = _possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).call(this, props),
    );
    _this.state = {
      display: '0',
      total: 0,
      calculation: '',
      lastKeyWasOperator: false,
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.digitEntered = _this.digitEntered.bind(_this);
    _this.operatorEntered = _this.operatorEntered.bind(_this);
    _this.doCalc = _this.doCalc.bind(_this);
    return _this;
  }
  _createClass(App, [
    {
      key: 'digitEntered',
      value: function digitEntered(event) {
        if (this.state.display === '0') {
          // if display is just '0' then overwrite value
          if (event.target.value === '.') {
            this.setState({
              display: '0.',
              lastKeyWasOperator: false,
            });
          } else {
            this.setState({
              display: event.target.value,
              lastKeyWasOperator: false,
            });
          }
        } else {
          // else add number to display
          // if user trying to add 2 decimals in a row do nothing
          if (this.state.display.indexOf('.') > -1 && event.target.value === '.') {
            return;
          } else {
            this.setState({
              display: this.state.display + event.target.value,
              lastKeyWasOperator: false,
            });
          }
        }
      },
    },
    {
      key: 'operatorEntered',
      value: function operatorEntered(event) {
        // assign operator to state
        // handle equals

        if (event.target.value === '=') {
          var result = this.doCalc();
          this.setState({
            display: result.toString(),
            total: result,
            calculation: '',
            lastKeyWasOperator: false,
          });

          // if this is the first time operator is being pressed record the number on display
        } else if (this.state.calculation === '') {
          this.setState({
            calculation: event.target.value,
            total: parseFloat(this.state.display),
            display: '0',
            lastKeyWasOperator: true,
          });

          // if this is not the first time the operator is being pressed don't update previousNumber
        } else if (this.state.calculation !== '' && this.state.lastKeyWasOperator === false) {
          var _result = this.doCalc();
          this.setState({
            total: _result,
            calculation: event.target.value,
            display: '0',
            lastKeyWasOperator: true,
          });

          // entered operator twice in a row
        } else if (this.state.calculation !== '' && this.state.lastKeyWasOperator === true) {
          this.setState({
            calculation: event.target.value,
          });
        } else {
          console.log('You should not be here!');
        }
      },
    },
    {
      key: 'doCalc',
      value: function doCalc() {
        var result = 0;
        switch (this.state.calculation) {
          case '+':
            return this.state.total + parseFloat(this.state.display);
          case '-':
            return this.state.total - parseFloat(this.state.display);
          case '/':
            return this.state.total / parseFloat(this.state.display);
          case '*':
            return this.state.total * parseFloat(this.state.display);
          default:
            return 0;
        }
      },
    },
    {
      key: 'handleClick',
      value: function handleClick(event) {
        if (event.target.className === 'digit') {
          // if user has entered a number or decimal
          this.digitEntered(event);
        } else if (event.target.className === 'operator') {
          // if user has entered +, -, *, /, =
          this.operatorEntered(event);
        } else {
          // AC button was pressed
          this.setState({
            display: '0',
            total: false,
            calculation: '',
          });
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'App' },
          React.createElement(
            'div',
            { id: 'calculator' },
            React.createElement('div', { id: 'display' }, this.state.display),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'clear', value: 'clear' },
              'AC',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'multiply', className: 'operator', value: '*' },
              'X',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'divide', className: 'operator', value: '/' },
              '/',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'seven', value: '7' },
              '7',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'eight', value: '8' },
              '8',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'nine', value: '9' },
              '9',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'subtract', className: 'operator', value: '-' },
              '-',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'four', value: '4' },
              '4',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'five', value: '5' },
              '5',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'six', value: '6' },
              '6',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'add', className: 'operator', value: '+' },
              '+',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'one', value: '1' },
              '1',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'two', value: '2' },
              '2',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'three', value: '3' },
              '3',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, id: 'equals', className: 'operator', value: '=' },
              '=',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'zero', value: '0' },
              '0',
            ),
            React.createElement(
              'button',
              { onClick: this.handleClick, className: 'digit', id: 'decimal', value: '.' },
              '.',
            ),
          ),
        );
      },
    },
  ]);
  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
