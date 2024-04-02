import img1 from "../../assets/images/14.jpg"
import img2 from "../../assets/images/27.jpg"
import img3 from "../../assets/images/29.png"
import img4 from "../../assets/images/img_03.png"
import img5 from "../../assets/images/Rectangle 10.png"
import img6 from "../../assets/images/Rectangle 11.png"
import img7 from "../../assets/images/Rectangle 12.png"
import img8 from "../../assets/images/Rectangle 13.png"
import img9 from "../../assets/images/Rectangle 14.png"


const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto gap-4">
            <div>
                <img className="w-96 h-96 rounded-lg" src={img1} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img2} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img3} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img4} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img5} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img6} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img7} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img8} alt="" />
            </div>
            <div>
                <img className="w-96 h-96 rounded-lg" src={img9} alt="" />
            </div>   
        </div>
    );
};

export default Home;