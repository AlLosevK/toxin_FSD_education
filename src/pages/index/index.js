import createMenu from '../../components/menu/menu';
import 'normalize.css';
import './index.scss';
var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js')
console.log('Этот чанк должен лежать отдельно в коммон');
