import page from 'page';
import ReactDOM from 'react-dom';
import HomeComponent from './components/HomeComponent';
import ViewComponent from './components/author/ViewComponent';
import ListComponent from './components/author/ListComponent';
import CreateComponent from './components/author/CreateComponent';

function loadComponent (component) {
  ReactDOM.render(component, document.getElementById('root'));
}
function Routes () {
  page('/', function () {
    loadComponent(<HomeComponent />);
  });

  // Author Components
  page('/authors', function () {
    loadComponent(<ListComponent />);
  });
  page('/authors/new', function () {
    loadComponent(<CreateComponent />);
  });
  page('/authors/:id', function () {
    loadComponent(<ViewComponent />);
  });

  page.start();
}

export default Routes;
