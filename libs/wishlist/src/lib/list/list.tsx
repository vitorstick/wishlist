import { ItemDetail } from '@wishlist/ui';
import { Product } from '@wishlist/domain';
import './list.module.scss';

const products: Product[] = [
  {
    id: '1',
    name: 'Porsche 718 Cayman',
    href: 'https://www.porsche.com/international/models/718/718-models/718-cayman/',
    imageSrc:
      'https://files.porsche.com/filestore/image/multimedia/none/modelseries-718-models-360-exterior-cayman-desktop-001/normal/b3493589-7ccd-11eb-80d3-005056bbdc38;sJ;twebp;c1350;gc/porsche-normal.webp',
    imageAlt: 'Porsche 718 Cayman',
  },
  {
    id: '2',
    name: 'West Ham 21/22 Adults Home Shirt',
    href: 'https://www.officialwesthamstore.com/kits/home-kit-202122/adults/7598_WEST-HAM-2122-ADULTS-HOME-SHIRT.html?nosto=frontpage-nosto-1-fallback-nosto-1',
    imageSrc:
      'https://www.officialwesthamstore.com/siteimg/prodhires/7598-874.jpg',
    imageAlt: 'West Ham 21/22 Adults Home Shirt',
  },
  {
    id: '3',
    name: 'Meia Bruno Aleixo III',
    href: 'https://mistercimba.com/collections/piugos/products/meia-bruno-aleixo-iii',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0100/3877/1797/products/meia-bruno-aleixo-3-edicao_1024x1024@2x.jpg?v=1604672412',
    imageAlt: 'Meia Bruno Aleixo III',
  },
  {
    id: '4',
    name: 'Nike Pro Warm',
    href: 'https://www.nike.com/pt/en/t/pro-warm-tights-TfF63T/CU4961-010',
    imageSrc:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7259319b-638f-4079-bbd0-97dfaa18b15c/pro-warm-tights-TfF63T.png',
    imageAlt: 'Nike Pro Warm',
  },
];

export function List() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ItemDetail key={product.id} product={product}></ItemDetail>
      ))}
    </div>
  );
}

export default List;
