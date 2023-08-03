import Header1 from './components/header1';
import Header2 from './components/header2';
import ImgHeader from './components/img';
import Products from './components/products';
import { ProductContextProvider } from './context/ContextProvider';
import Category from './components/category';
import AllProducts from './components/AllListProduct';
import ForYou from './components/ForYou';
import Footer from './components/footer';
function App() {

  return (
    <>
      <div style={{ maxWidth: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
        <div style={{ maxWidth: '1440px', display: 'flex', justifyItems: 'center', flexDirection: `column`, }}>
          <ProductContextProvider>
            <Header1></Header1>
            <Header2></Header2>
            <ImgHeader></ImgHeader>
            <Products></Products>
            <Category></Category>
            <AllProducts></AllProducts>
            <ForYou></ForYou>
            <Footer></Footer>
          </ProductContextProvider>
        </div>

      </div >
    </>
  )
}

export default App
