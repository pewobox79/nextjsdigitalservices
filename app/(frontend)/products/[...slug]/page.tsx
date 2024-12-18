import {getSingleProduct} from "@/utils/productHelper";
import SingleProductPage from "@/pages/SingleProductPage";
import {Suspense} from "react";
import Heading from "@/components/globals/Heading";

const SingleProduct = async ({params, searchParams})=>{
    const data = await params;
    //const {search} = await searchParams;

    const product = await getSingleProduct(data.slug[0]);
    console.log("single product",product);

    return <Suspense fallback={"loading..."}>
        <SingleProductPage product={product}/>

    </Suspense>
}

export default SingleProduct