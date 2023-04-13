import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        {/* Title and a overview of cycle store start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Companion Of Your Miles
          </div>
          <div className="text-md md:text-xl">
            Welcome to our cycle shop! We offer a wide selection of bikes for
            all ages and skill levels, including mountain bikes, road bikes,
            city bikes, and kids' bikes. Our knowledgeable staff can help you
            find the perfect bike and provide expert advice on accessories,
            maintenance, and repairs. We also offer bike rentals and guided
            tours for those looking to explore the beautiful trails and roads in
            our area. Visit us today and let's get you riding!
          </div>
        </div>
        {/* Title and a overview of cycle store end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))} */}
          <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}
