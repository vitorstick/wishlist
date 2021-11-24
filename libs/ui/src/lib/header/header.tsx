import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
      Christmas Wish List
    </h2>
  );
}

export default Header;
