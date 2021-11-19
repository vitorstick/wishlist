import './item-detail.module.scss';

/* eslint-disable-next-line */
export interface ItemDetailProps {}

export function ItemDetail(props: ItemDetailProps) {
  return (
    <div className="product__item">
      <div className="product__link">
        <div className="product__link-image-container">
          <span className="image-background">
            <img
              className="product__image"
              src="https://lmstwsuk.blob.core.windows.net/images-product/b846862f-9d18-4bd3-831e-6f57d2d2c303.jpeg"
              alt=""
            />
          </span>
        </div>
        <div className="product__title">Nest Set of 3 large chopping</div>
        <div className="product__brand">Joseph Joseph</div>
      </div>
      <div className="product__summary-container">
        <span className="product__summary">
          <span className="truncated">To be chosen</span>
        </span>
        <div className="product__inline-buttons">
          <button
            className="button button-small button--sorbet"
            type="button"
            name="Add to basket"
          >
            Pick this
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
