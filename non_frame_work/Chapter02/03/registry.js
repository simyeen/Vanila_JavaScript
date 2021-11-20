const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;
      console.log("0", target);
      const child = registry[name];
      if (!child) {
        return;
      }
      console.log("1", target);
      target.replaceWith(child(target, state));
      console.log("2", target);
    });
    console.log("엘리먼트", childComponents, element);
    return element;
  };
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};
