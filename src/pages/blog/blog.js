import createMenu from '../../components/menu/menu';
import 'normalize.css';
import './blog.scss';
var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);
console.log('in blog.js')
console.log('Этот чанк должен лежать отдельно в коммон');
