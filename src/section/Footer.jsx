import { socialImgs } from "../constant";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={item.imgPath}
                                alt={item.name}
                                className="w-8 h-8 transition-transform duration-300 transform hover:scale-125 hover:brightness-125"
                            />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Esrom Basazinaw. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;