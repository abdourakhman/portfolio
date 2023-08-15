// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Conception of web and mobile applications and occasionally desktop with the most common technology.',
  },
  {
    icon: <RxInfoCircled />,
    title: 'Consulting',
    description: 'Advice and technical expertise to companies to assess, plan and improve their development projects.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Maintenance',
    description: 'Ongoing maintenance services, including bug fixing, security updates, and feature enhancements.',
  },
  {
    icon: <RxCrop />,
    title: 'E-commerce',
    description: 'Creation of online stores using platforms such as Shopify or PrestaShop custom development.',
  }
];

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'; 

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxInfoCircled
} from 'react-icons/rx';

//import required modules
import {FreeMode, Pagination} from 'swiper';

const ServiceSlider = () => {
  return(
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween:15,
      },
      640:{
        slidesPerView: 3,
        spaceBetween:15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable:true
    }}t
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px] md:min-h-[240px]'
    >
      {
        serviceData.map((item, index)=>{
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(15,47,123,0.15)]  h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
            transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'> {item.icon} </div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'> {item.title} </div>
                <p className='max-w-[350px] leading-normal'> {item.description} </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent
                transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
   );
};

export default ServiceSlider;
