import React from 'react';

import Header from './header';
import ItemsList from './items_list';

const App = () => (
  <div>
    <Header
      title="Code Challenge"
      subtitle="- coded by CDAN Dharmasena"
    />
    <div className="page-container">
      <ItemsList />
    </div>
  </div>
);

export default App;
