import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div id="about" className="mt-20">
        <Section
          title="Discover Deliciousness"
          description="From fresh ingredients to ready-made meals, we've got everything you need to satisfy your cravings. Whether you're looking for quick bites or gourmet groceries, our app brings a variety of food choices to your doorstep."
          imageSrc="/food.avif"
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-8 lg:p-12 h-[70vh] lg:space-x-10 lg:h-[60vh]"
        />
        <Section
          title="Dress to Impress"
          description="Shop the latest fashion trends and update your wardrobe with the click of a button. From casual wear to high-end fashion, you'll find everything you need to stay stylish."
          imageSrc="/clothes.jpg"
          reverse
          customClasses="p-8 lg:p-12 h-[70vh] lg:space-x-10 lg:h-[60vh]"
        />
        <Section
          title="Stay Updated with Technology"
          description="Get the latest gadgets and electronics delivered to you. Whether you're upgrading your phone, shopping for a new laptop, or getting accessories, our collection of tech products has you covered."
          imageSrc="/electronics.jpg"
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-8 lg:p-12 h-[70vh] lg:space-x-10 lg:h-[60vh]"
        />
        <Section
          title="Fresh and Convenient"
          description="No more last-minute grocery runs! With a wide range of fresh produce and daily essentials, we ensure you have everything you need to stock up your pantry, straight from the app."
          imageSrc="/groceries.jpeg"
          reverse
          customClasses="p-8 lg:p-12 h-[70vh] lg:space-x-10 lg:h-[60vh]"
        />

        {/* Section for Uengage */}
        <Section
          title="Seamless Deliveries with uEngage"
          description="Enjoy a 0% commission model. Our trusted delivery partner, Uengage, ensures timely and reliable deliveries, keeping your satisfaction at the forefront of our service."
          imageSrc="https://www.uengage.in/assets/uen_io/images/uengage-logo-white.svg"
          backgroundColor="bg-green-600 text-white"
          customClasses="p-8 lg:p-12 h-[60vh]"
          customImageClasses="w-[300px] lg:w-[450px] lg:mr-20"
        />

        {/* Section for Razorpay */}
        <Section
          title="Secure Payments with Razorpay"
          description="We’ve partnered with Razorpay to offer you a secure and efficient payment gateway. Enjoy T+2 payment settlements and a minimal 2% gateway charge."
          imageSrc="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20140%2030%22%3E%3Cpath%20d%3D%22M%209.055%207.811%20L%207.892%2012.075%20L%2014.549%207.787%20L%2010.195%2023.968%20L%2014.617%2023.972%20L%2021.048%200.072%22%20fill%3D%22rgb(51%2C149%2C255)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%201.89%2017.169%20L%200.059%2023.972%20L%209.121%2023.972%20L%2012.83%2010.133%20Z%20M%2033.37%2011.18%20C%2033.148%2012%2032.721%2012.603%2032.085%2012.987%20C%2031.45%2013.371%2030.559%2013.564%2029.408%2013.564%20L%2025.753%2013.564%20L%2027.036%208.798%20L%2030.691%208.798%20C%2031.84%208.798%2032.63%208.989%2033.058%209.379%20C%2033.486%209.769%2033.59%2010.364%2033.37%2011.188%20Z%20M%2037.154%2011.085%20C%2037.619%209.364%2037.427%208.04%2036.577%207.113%20C%2035.727%206.194%2034.237%205.73%2032.111%205.73%20L%2023.954%205.73%20L%2019.043%2023.98%20L%2023.006%2023.98%20L%2024.985%2016.624%20L%2027.584%2016.624%20C%2028.168%2016.624%2028.627%2016.72%2028.962%2016.904%20C%2029.298%2017.095%2029.495%2017.426%2029.556%2017.904%20L%2030.263%2023.98%20L%2034.509%2023.98%20L%2033.821%2018.316%20C%2033.681%2017.051%2033.099%2016.308%2032.078%2016.087%20C%2033.38%2015.712%2034.471%2015.087%2035.349%2014.219%20C%2036.222%2013.357%2036.845%2012.277%2037.154%2011.093%20Z%20M%2046.787%2017.448%20C%2046.455%2018.684%2045.945%2019.618%2045.256%2020.272%20C%2044.567%2020.927%2043.743%2021.251%2042.781%2021.251%20C%2041.802%2021.251%2041.138%2020.934%2040.788%2020.294%20C%2040.436%2019.655%2040.424%2018.728%2040.751%2017.514%20C%2041.077%2016.3%2041.598%2015.351%2042.314%2014.667%20C%2043.03%2013.983%2043.867%2013.641%2044.829%2013.641%20C%2045.789%2013.641%2046.446%2013.972%2046.778%2014.629%20C%2047.118%2015.289%2047.125%2016.233%2046.793%2017.461%20Z%20M%2048.524%2010.99%20L%2048.028%2012.836%20C%2047.813%2012.174%2047.398%2011.644%2046.783%2011.247%20C%2046.168%2010.857%2045.405%2010.659%2044.496%2010.659%20C%2043.382%2010.659%2042.311%2010.945%2041.284%2011.519%20C%2040.258%2012.093%2039.357%2012.902%2038.589%2013.947%20C%2037.821%2014.991%2037.26%2016.175%2036.898%2017.507%20C%2036.544%2018.845%2036.47%2020.015%2036.684%2021.03%20C%2036.906%2022.052%2037.371%2022.832%2038.087%2023.377%20C%2038.811%2023.928%2039.734%2024.2%2040.864%2024.2%20C%2041.761%2024.205%2042.649%2024.011%2043.463%2023.634%20C%2044.267%2023.272%2044.983%2022.74%2045.56%2022.075%20L%2045.043%2023.999%20L%2048.875%2023.999%20L%2052.374%2010.996%20L%2048.535%2010.996%20Z%20M%2066.146%2010.99%20L%2055.001%2010.99%20L%2054.222%2013.888%20L%2060.707%2013.888%20L%2052.134%2021.265%20L%2051.401%2023.987%20L%2062.905%2023.987%20L%2063.684%2021.089%20L%2056.736%2021.089%20L%2065.44%2013.601%20Z%20M%2075.955%2017.426%20C%2075.61%2018.706%2075.099%2019.668%2074.423%2020.294%20C%2073.747%2020.927%2072.929%2021.243%2071.969%2021.243%20C%2069.96%2021.243%2069.3%2019.971%2069.985%2017.426%20C%2070.325%2016.161%2070.839%2015.21%2071.526%2014.569%20C%2072.212%2013.926%2073.044%2013.605%2074.023%2013.605%20C%2074.983%2013.605%2075.631%2013.924%2075.965%2014.565%20C%2076.299%2015.205%2076.296%2016.159%2075.955%2017.424%20Z%20M%2078.198%2011.479%20C%2077.316%2010.931%2076.19%2010.658%2074.817%2010.658%20C%2073.426%2010.658%2072.139%2010.93%2070.955%2011.474%20C%2069.775%2012.015%2068.739%2012.823%2067.927%2013.833%20C%2067.093%2014.855%2066.493%2016.054%2066.124%2017.422%20C%2065.762%2018.785%2065.718%2019.982%2065.999%2021.007%20C%2066.279%2022.029%2066.87%2022.816%2067.756%2023.36%20C%2068.65%2023.909%2069.787%2024.182%2071.182%2024.182%20C%2072.556%2024.182%2073.833%2023.907%2075.007%2023.36%20C%2076.181%2022.809%2077.185%2022.028%2078.02%2020.998%20C%2078.854%2019.973%2079.452%2018.777%2079.821%2017.409%20C%2080.191%2016.041%2080.235%2014.846%2079.954%2013.819%20C%2079.674%2012.797%2079.09%2012.01%2078.212%2011.462%20Z%20M%2091.879%2014.463%20L%2092.861%2010.925%20C%2092.529%2010.756%2092.094%2010.667%2091.547%2010.667%20C%2090.668%2010.667%2089.827%2010.884%2089.014%2011.322%20C%2088.316%2011.694%2087.722%2012.219%2087.22%2012.877%20L%2087.73%2010.972%20L%2086.617%2010.976%20L%2083.885%2010.976%20L%2080.363%2023.974%20L%2084.249%2023.974%20L%2086.076%2017.179%20C%2086.342%2016.191%2086.821%2015.414%2087.511%2014.862%20C%2088.198%2014.308%2089.054%2014.031%2090.088%2014.031%20C%2090.723%2014.031%2091.314%2014.176%2091.875%2014.465%20Z%20M%20102.692%2017.488%20C%20102.36%2018.702%20101.858%2019.629%20101.171%2020.269%20C%20100.485%2020.912%2099.658%2021.232%2098.698%2021.232%20C%2097.738%2021.232%2097.081%2020.909%2096.734%2020.261%20C%2096.379%2019.61%2096.372%2018.673%2096.704%2017.44%20C%2097.036%2016.208%2097.546%2015.262%2098.247%2014.608%20C%2098.949%2013.948%2099.776%2013.618%20100.736%2013.618%20C%20101.681%2013.618%20102.316%2013.957%20102.656%2014.641%20C%20102.995%2015.325%20103.003%2016.274%20102.676%2017.488%20Z%20M%20105.394%2011.5%20C%20104.674%2010.926%20103.754%2010.639%20102.639%2010.639%20C%20101.662%2010.639%20100.731%2010.86%2099.848%2011.306%20C%2098.966%2011.751%2098.25%2012.358%2097.7%2013.126%20L%2097.713%2013.037%20L%2098.365%2010.97%20L%2094.569%2010.97%20L%2093.602%2014.567%20L%2093.573%2014.692%20L%2089.585%2029.51%20L%2093.477%2029.51%20L%2095.485%2022.051%20C%2095.684%2022.715%2096.091%2023.235%2096.711%2023.612%20C%2097.331%2023.987%2098.097%2024.173%2099.007%2024.173%20C%20100.137%2024.173%20101.215%2023.901%20102.238%2023.357%20C%20103.264%2022.811%20104.15%2022.025%20104.903%2021.01%20C%20105.656%2019.995%20106.215%2018.818%20106.572%2017.487%20C%20106.934%2016.153%20107.008%2014.964%20106.801%2013.923%20C%20106.591%2012.881%20106.125%2012.074%20105.405%2011.503%20Z%20M%20118.301%2017.435%20C%20117.97%2018.664%20117.46%2019.605%20116.773%2020.253%20C%20116.086%2020.904%20115.259%2021.229%20114.299%2021.229%20C%20113.317%2021.229%20112.653%2020.912%20112.306%2020.272%20C%20111.951%2019.632%20111.944%2018.706%20112.269%2017.492%20C%20112.594%2016.278%20113.112%2015.329%20113.828%2014.645%20C%20114.545%2013.961%20115.382%2013.62%20116.344%2013.62%20C%20117.304%2013.62%20117.954%2013.951%20118.293%2014.606%20C%20118.633%2015.262%20118.635%2016.206%20118.304%2017.438%20Z%20M%20120.037%2010.973%20L%20119.54%2012.82%20C%20119.326%2012.154%20118.913%2011.624%20118.299%2011.231%20C%20117.68%2010.838%20116.918%2010.642%20116.011%2010.642%20C%20114.895%2010.642%20113.819%2010.929%20112.791%2011.503%20C%20111.764%2012.077%20110.864%2012.881%20110.096%2013.923%20C%20109.328%2014.965%20108.767%2016.152%20108.405%2017.483%20C%20108.047%2018.82%20107.977%2019.991%20108.191%2021.011%20C%20108.407%2022.026%20108.873%2022.81%20109.594%2023.357%20C%20110.313%2023.902%20111.24%2024.177%20112.37%2024.177%20C%20113.278%2024.177%20114.146%2023.989%20114.969%2023.61%20C%20115.772%2023.247%20116.486%2022.714%20117.061%2022.049%20L%20116.544%2023.975%20L%20120.376%2023.975%20L%20123.875%2010.977%20L%20120.043%2010.977%20Z%20M%20139.964%2010.978%20L%20139.966%2010.974%20L%20137.611%2010.974%20C%20137.535%2010.974%20137.469%2010.978%20137.4%2010.979%20L%20136.179%2010.979%20L%20135.55%2011.847%20L%20135.396%2012.053%20L%20135.328%2012.156%20L%20130.364%2019.047%20L%20129.336%2010.978%20L%20125.27%2010.978%20L%20127.329%2023.24%20L%20122.781%2029.514%20L%20126.836%2029.514%20L%20127.935%2027.96%20C%20127.967%2027.914%20127.995%2027.876%20128.032%2027.827%20L%20129.316%2026.011%20L%20129.353%2025.959%20L%20135.108%2017.831%20L%20139.959%2010.99%20L%20139.966%2010.986%20L%20139.964%2010.986%20Z%22%20fill%3D%22rgb(25%2C40%2C57)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" // Replace with relevant image path for Razorpay
          reverse
          customClasses="lg:p-12"
        />
      </div>
    </div>
  );
}
