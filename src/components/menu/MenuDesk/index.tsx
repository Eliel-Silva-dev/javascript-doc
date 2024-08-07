import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/functions'}>Funções</Link>
      </li>
      <li>
        <Link href={'/typeData'}>Tipos de dados</Link>
      </li>
      <li>
        <Link href={'/loops'}>Loops</Link>
      </li>
    </ul>
  );
};

export default MenuDesk;
