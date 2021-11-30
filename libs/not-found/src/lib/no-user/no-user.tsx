import './no-user.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NoUserProps {}

export function NoUser(props: NoUserProps) {
  const navigate = useNavigate();

  const params = useParams();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center">
      <div className="text-center space-y-2 sm:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
          <span className="xl:inline text-black">Why offer to</span>{' '}
          <span className="text-indigo-600 xl:inline">{params?.name}</span>
        </h1>
        <button
          type="button"
          className="text-indigo-600 font-medium hover:text-indigo-500 space-y-0.5"
          onClick={async (event) => {
            navigate(`/vitor`);
          }}
        >
          Offer to Vítor instead<span aria-hidden="true"> &rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default NoUser;
