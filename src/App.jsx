import Header1 from './components/header1';
import Header2 from './components/header2';
import ImgHeader from './components/img';
import Products from './components/products';
import { ProductContextProvider } from './context/ContextProvider';

function App() {

  return (
    <>
      <ProductContextProvider>
        <Header1></Header1>
        <Header2></Header2>
        <ImgHeader></ImgHeader>
        <Products></Products>
      </ProductContextProvider>
    </>
  )
}

export default App
