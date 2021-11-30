import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Christmas Wish List
      </h1>
    </div>
  );
}

export default Header;
