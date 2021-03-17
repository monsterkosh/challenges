import Dashboard from 'views/Dashboard.js';
import Profile from 'views/Profile.js';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Person from '@material-ui/icons/Person';
import Tv from '@material-ui/icons/Tv';
import Bluuweb from 'views/Bluuweb';

var routes = [
  {
    path: '/index',
    name: 'Main page',
    icon: Tv,
    iconColor: 'Primary',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/bluuweb',
    name: 'Bluuweb Challenges',
    icon: FormatListBulleted,
    iconColor: 'Error',
    component: Bluuweb,
    layout: '/admin',
  },
  {
    path: '/about-me',
    name: 'About me',
    icon: Person,
    iconColor: 'WarningLight',
    component: Profile,
    layout: '/admin',
  },
];
export default routes;
