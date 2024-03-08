import React from 'react';

export const ApiContext = React.createContext();

export function ApiStorage({ children }) {
  const [api, setApi] = React.useState(null);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/Possomato/portfolio/main/data/profile.json')
      .then(response => response.json())
      .then(json => setApi(json))
  }, [])

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
