import { Product } from '@wishlist/domain';

import './item-detail.module.scss';

export interface ItemDetailProps {
  product: Product;
}

export function ItemDetail(props: ItemDetailProps) {
  return (
    <div className="group relative shadow-2xl bg-white rounded-lg h-18">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={props.product.imageSrc}
          alt={props.product.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 pb-6">
            <a href={props.product.href} target="_blank" rel="noreferrer">
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.name}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
