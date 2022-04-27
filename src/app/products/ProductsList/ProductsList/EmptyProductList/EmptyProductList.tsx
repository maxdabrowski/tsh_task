import './EmptyProductList.css';
import { ReactComponent as IconSvg } from 'assets/emptyListIcon.svg';

export const EmptyProductList:React.FC = () => {

  return (
    <div className="empty_product_section"> 
    <div className="empty_product_data">
      <IconSvg/>
      <p className="empty_product_title">Ooops... It's empty here</p>
      <p className="empty_product_description">There are no products on the list</p>
    </div>

     
    </div>
  );
};
