const MyReact = (function() {
  let _val; // hold our state in module scope
  const result = {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(initialValue) {
      _val = _val || initialValue; // assign anew every run
      function setState(newVal) {
        _val = newVal;
      }
      return [_val, setState];
    }
  };
  return result;
})();

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  return {
    click: () => setCount(count + 1),
    render: () => console.log('render:', { count })
  };
}
let App;
App = MyReact.render(Counter); // render: { count: 0 }
App.click();
App = MyReact.render(Counter); // render: { count: 1 }
