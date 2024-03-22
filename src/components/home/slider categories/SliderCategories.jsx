import "./sliderCategories.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/apiCalls/productApiCall";
import { SingleCard } from "../../../allPagesPaths";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// to avoid the console error
import { LeftArrow, RightArrow } from "../../common/customSliderArrows";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const SliderCategories = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product);

    /*===========================================*/

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    /*===========================================*/

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        dots: false,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    };

    /*===========================================*/

    // show the first 7 products from whole products to draw the cart slider
    const slicedProducts = products?.slice(0, 7)

    return (
        <div className="slider-categories">
            <div className="myContainer">
                <div className="slider-content">
                    {slicedProducts.length > 0
                        &&
                        <>
                            <h5 className="homeH5">CUSTOMER FAVORITES</h5>
                            <h2 className="homeH2">Popular Catagories</h2>
                            <Slider {...settings}>
                                {
                                    slicedProducts?.map(el => (
                                        <SingleCard product={el} key={el.id} />
                                    ))
                                }
                            </Slider>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SliderCategories;