import Link from 'next/link';
import style from './style.min.module.css';
import { FaCode } from 'react-icons/fa';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <FaCode />
      <h2>
        <Link href={'/'}>Doc JavaScript</Link>
      </h2>
    </div>
  );
};

export default Logo;
