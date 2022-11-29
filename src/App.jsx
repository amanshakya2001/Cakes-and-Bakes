// Import Libraries
import { useState } from 'react';
import './App.scss';
import Banner from './Banner';
import BannerCategory from './BannerCategory';
import Category from './Category';
import Feedback from './Feedback';
import Footer from './Footer';
import Header from './Header';
import Itemsection from './Itemsection';
import Itemsection2 from './Itemsection2';
import Data from './Json/product.json';
import Smallbanner from './Smallbanner';
import TwocardSection from './TwocardSection';
import user from './Json/user.json';
import LoginModal from './LoginModal';
import CartModal from './CartModal';
import RegisterModal from './RegisterModal';
import swal from 'sweetalert';
import SearchItem from './SearchItem';
import React from 'react';


export default function App() {
  // Variables
  const file = 'Json/user.json'
  const [cartItemsObject,setCartItemsObject] = useState([]);
  const [login, setLogin] = useState(false);
  const [loginUser,setLoginUser] = useState({});
  const [category] = useState([{'img':'/assests/images/Truck.png','category':'delivery'},{'img':'/assests/images/Cakes.png','category':'cakes'},{'img':'/assests/images/birthday.jpg','category':'birthday'},{'img':'/assests/images/anniversary.png','category':'aniversary'},{'img':'/assests/images/occasion.png','category':'occassions'},{'img':'/assests/images/combos.png','category':'combos'},{'img':'/assests/images/flowers.png','category':'flowers'},{'img':'/assests/images/chocolate.png','category':'Chocolates'}]);
  const [search,setSearch] = useState("");

  // Functions
  function addItemToCart(img,name,price){
    setCartItemsObject((oldArr)=>[...oldArr,{"img":img,"title":name,"price":price}])
    console.log(cartItemsObject);
    swal(name+" added to cart");
  }

  function proceedToBuy(){
    if(login){
      swal("","Order placed successfully",'success');
      setCartItemsObject([]);
    }
    else{
      swal("","Login Required",'warning');
    }
  }
  // FrontEnd
  return (
    <>
      <Header cartItems = {cartItemsObject.length} login={login} setLogin={setLogin} search={search} setSearch={setSearch} />
      <LoginModal setLoginUser={setLoginUser} setLogin={setLogin} />
      <RegisterModal />
      <CartModal cartData={cartItemsObject} proceedToBuy={proceedToBuy}/>

      {search.length == 0 ?
      <>
                <Banner />
        <Category category = {category} />
        <Itemsection title={"Anniversary Special"} offer={true} data={Data} addItemToCart={addItemToCart} setSearch={setSearch} />
        <BannerCategory bannerimg={'assests/images/cakesbannersmall.jpg'} title={'Cakes'} data={Data} addItemToCart={addItemToCart} setSearch={setSearch} />
        <Itemsection title={'Coming Soon'} offer={false} data={Data} addItemToCart={addItemToCart} setSearch={setSearch}  />
        <BannerCategory bannerimg={'assests/images/flowerbannersmall.jpg'} title={'Flowers'} data={Data}addItemToCart={addItemToCart} setSearch={setSearch} />
        <Smallbanner />
        <BannerCategory bannerimg={'assests/images/PersonalisedGift.jpeg'} title={'Personalised Gift'} data={Data} addItemToCart={addItemToCart} setSearch={setSearch} />
        <Itemsection2 title={'Categorized'} offer={false} data={Data} addItemToCart={addItemToCart} setSearch={setSearch} />
        <TwocardSection title={'Conference Hall'} offer={false} data ={[{"img":"./assests/images/him.webp","title":""},{"img":"./assests/images/her.webp","title":"her","desc":"gift for"}]} setSearch={setSearch} />
        <Itemsection2 title={'Comfortable Price'} offer={false} data={Data} addItemToCart={addItemToCart} setSearch={setSearch} />
        <TwocardSection title={'Offers'} offer={false} data ={[{"img":"./assests/images/him.webp","title":""},{"img":"./assests/images/her.webp","title":"gift","desc":"Coperate"}]} setSearch={setSearch} />
        <Feedback users={user} />
      </>
      :
      <>
        <SearchItem data={Data} search = {search} addItemToCart={addItemToCart} />
      </>
      }
      <Footer  />
    </>
  );
}
