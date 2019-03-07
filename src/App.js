import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Page from './components/Page.js';
import Navigation from './components/Navigation.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section>
              {<Page />}
            </section>
          </main>
          <footer class="footer">
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
