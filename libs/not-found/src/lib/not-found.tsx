import { NoUser } from './no-user/no-user';
import './not-found.module.scss';

/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  return <NoUser></NoUser>;
}

export default NotFound;
