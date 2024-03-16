import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div className="rounded-3xl py-20 md:py-24 lg:py-32 bg-cover bg-no-repeat my-6" style={{ backgroundImage: `linear-gradient(180deg,rgba(3,7,18,0.50)0%,rgba(3,7,18,0.00)100%),url(${banner})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:w-2/3">
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold leading-normal lg:leading-[60px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="md:text-lg mb-5">Embark on a culinary adventure with Sassy Cuisine, where every dish is a journey of exquisite flavors.</p>
                    <div className="*:rounded-full *:w-56 *:text-lg md:*:text-2xl *:font-semibold *:px-6 *:py-4 flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="bg-spring-green-500 border hover:bg-spring-green-600 text-haiti-950">Explore Now</button>
                        <button className="border border-white hover:text-haiti-200">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;