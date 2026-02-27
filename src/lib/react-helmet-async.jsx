import { Children, useEffect } from 'react';

const MANAGED_ATTR = 'data-rha-managed';

const upsertMeta = (attributes) => {
  const selectorParts = [];
  if (attributes.name) selectorParts.push(`name=\"${attributes.name}\"`);
  if (attributes.property) selectorParts.push(`property=\"${attributes.property}\"`);
  const selector = selectorParts.length ? `meta[${selectorParts.join('][')}]` : '';

  let element = selector ? document.head.querySelector(selector) : null;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.setAttribute(MANAGED_ATTR, 'true');

  return element;
};

export const HelmetProvider = ({ children }) => children;

export const Helmet = ({ children }) => {
  useEffect(() => {
    const managedNodes = [];

    Children.forEach(children, (child) => {
      if (!child || !child.type) return;

      if (child.type === 'title') {
        document.title = child.props.children;
        return;
      }

      if (child.type === 'meta') {
        const node = upsertMeta(child.props);
        managedNodes.push(node);
      }
    });

    return () => {
      managedNodes.forEach((node) => {
        if (node?.getAttribute(MANAGED_ATTR) === 'true') {
          node.remove();
        }
      });
    };
  }, [children]);

  return null;
};
