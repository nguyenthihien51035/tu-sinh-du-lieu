
import TopBar from '../components/Topbar';
import Header from '../components/Header';
import CategoriesBar from '../components/CategoriesBar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import ProductCell from '../components/ProductCell';

function Home() {

  const products = [
    {
      id: 1,
      title: "Organic Green Big Sweet Pepper Seeds - Capsicum",
      image: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-vegetables-of-carrot-good-food-for-healthy-png-image_14582062.png",
      weight: "1000gm",
      rating: 4.8,
      price: 24.0,
      tag: "Best Sale",
      frozen: true,
    },
    {
      id: 2,
      title: "Fresh Mango Premium Quality",
      image: "https://pngimg.com/d/potato_PNG7082.png",
      weight: "500gm",
      rating: 4.5,
      price: 12.5,
    },
    {
      id: 3,
      title: "Organic Broccoli Green",
      image: "https://png.pngtree.com/png-vector/20240705/ourmid/pngtree-three-ripe-tomatoes-with-green-leaves-on-a-white-background-png-image_12958345.png",
      weight: "1000gm",
      rating: 4.9,
      price: 18.75,
      tag: "Hot Deal",
    },
    {
      id: 4,
      title: "Organic Green Big Sweet Pepper Seeds - Capsicum",
      image: "https://png.pngtree.com/png-clipart/20250514/original/pngtree-pile-of-banana-png-image_19673540.png",
      weight: "1000gm",
      rating: 4.8,
      price: 24.0,
      tag: "Best Sale",
      frozen: true,
    },
    {
      id: 5,
      title: "Fresh Mango Premium Quality",
      image: "https://static.vecteezy.com/system/resources/thumbnails/041/731/797/small/ai-generated-ripe-mango-and-juicy-on-transparent-background-stock-png.png",
      weight: "500gm",
      rating: 4.5,
      price: 12.5,
    },
    {
      id: 6,
      title: "Organic Broccoli Green",
      image: "https://static.vecteezy.com/system/resources/previews/029/200/225/non_2x/oranges-on-transparent-background-free-png.png",
      weight: "1000gm",
      rating: 4.9,
      price: 18.75,
      tag: "Hot Deal",
    },
  ];

  return (
    <div className="h-auto w-full flex flex-col  bg-gradient-to-br from-blue-50 to-purple-50">

      <TopBar />
      <Header />
      <CategoriesBar />

      <div className="w-full flex  justify-center items-center px-4 sm:px-10 lg:px-14 mt-4">
        <div className=' w-full md:w-[80%] justify-center items-center flex flex-col gap-2 '>
          <Banner />

        </div>

      </div>

      <div className="w-full flex  justify-center items-center px-4 sm:px-10 lg:px-14 mt-4">
        <div className=' w-full md:w-[80%] justify-center items-center flex flex-col gap-2 '>
          <Categories />

        </div>
      </div>

      <div className="w-full flex  justify-center items-center px-4 sm:px-10 lg:px-14 mt-4">
        <div className=' w-full md:w-[80%] justify-center items-center flex flex-col gap-2 '>

          <div className="p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {products.map((item) => (
                <ProductCell
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  weight={item.weight}
                  rating={item.rating}
                  price={item.price}
                  tag={item.tag}
                  frozen={item.frozen}
                />
              ))}
            </div>
          </div>

        </div>
      </div>




    </div>
  );
}

export default Home;
