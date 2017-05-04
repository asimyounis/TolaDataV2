import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

import App from './components/App';
import NotFound from './components/NotFound';

/* Example of Routing URL in React using react-router */
class Root extends React.Component {
    componentWillMount() {
    }
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <BrowserRouter>
                    <div>
                        <Match exactly pattern="/" component={App} />
                        <Miss component={NotFound}/>
                    </div>
                </BrowserRouter>
            </Provider>
        ); 
    }
}


render(<Root/>, document.querySelector('#main')); // JSX Syntax