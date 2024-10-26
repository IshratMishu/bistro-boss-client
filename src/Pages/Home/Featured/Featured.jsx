import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className="text-white pt-8 my-20 bg-fixed" style={{ backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <SectionTitle
            heading='Featured Item'
            subHeading='Check it out'
            ></SectionTitle>
           <div className="md:flex justify-center items-center bg-slate-900 bg-opacity-40 pb-20 pt-12 px-36">
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">where can i get some?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium magni, voluptatibus tempora cumque mollitia, tempore repellendus ullam a illo soluta, iure odit autem deserunt in nam ducimus possimus iusto eveniet ipsam vero quidem. Ad illo nostrum recusandae error repellat maxime, quaerat explicabo voluptatem officiis reiciendis voluptas exercitationem delectus vitae.</p>
                <button className="btn btn-outline border-0 border-b-4 text-white">ORDER NOW</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;