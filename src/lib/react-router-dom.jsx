import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
});

export const BrowserRouter = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
  };

  const value = useMemo(() => ({ path, navigate }), [path]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const Routes = ({ children }) => {
  const { path } = useContext(RouterContext);
  const routeList = Array.isArray(children) ? children : [children];
  const match = routeList.find((child) => child?.props?.path === path) ?? routeList[0] ?? null;
  return match?.props?.element ?? null;
};

export const Route = () => null;

export const Link = ({ to, className, children }) => {
  const { navigate } = useContext(RouterContext);

  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};

export const NavLink = ({ to, className, children }) => {
  const { path, navigate } = useContext(RouterContext);
  const isActive = path === to;
  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <a
      href={to}
      className={computedClassName}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};
