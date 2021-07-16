import page from 'page';
import HomeComponent from './components/HomeComponent';
import ViewComponent from './components/author/ViewComponent';
import ListComponent from './components/author/ListComponent';
import CreateComponent from './components/author/CreateComponent';

function Routes () {
  let display;

  page('/', function () {
    display = <HomeComponent />;
  });

  // Author Components
  page('/authors', function () {
    display = <ListComponent />;
  });
  page('/authors/new', function () {
    display = <CreateComponent />;
  });
  page('/authors/:id', function () {
    display = <ViewComponent />;
  });

  page();

  return display;
}

export default Routes;
