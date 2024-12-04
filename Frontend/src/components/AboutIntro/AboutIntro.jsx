import './AboutIntro.scss';
import React from 'react';
import infoimage from "../../assets/images/companyroom.webp";
import { useNavigate } from 'react-router-dom';
const AboutIntro = () => {
    const navigate = useNavigate();

    return (
    <>
        <div className="image-intro">
            <img src={infoimage} alt="biginfoimage" className="infoimage"/>
        </div>

        <div className="intro">
            <h2 className="title-info">GreenFood là nền tảng thương mại điện tử hàng đầu tại Việt Nam</h2>
            <div className="line1">
                <span className="info-detail">Ra mắt vào năm 2020, GreenFood mang đến cho người dùng trong khu vực trải nghiệm mua sắm
                    trực tuyến đơn giản, an toàn và nhanh chóng thông qua hệ thống hỗ trợ thanh toán và vận hành vững mạnh.</span>
            </div>
            <div className="line2">
                <span className="info-detail">Chúng tôi tin rằng trải nghiệm mua sắm trực tuyến cần đơn giản, dễ dàng và mang lại niềm
                    vui cho người dùng. Sứ mệnh này cũng là nguồn cảm hứng thúc đẩy chúng tôi phát triển từng ngày.</span>
            </div>
        </div>

       <div className="learn-more" >
           <button className="learn-more-button" onClick={() => window.open('/')}>Tìm hiểu thêm</button>
       </div>

        <div className="target-posi">
            <div className="target">
                <h3>Mục tiêu của chúng tôi</h3>
                <span>GreenFood mong muốn góp phần làm cho Việt Nam trở nên tốt đẹp hơn bằng sức mạnh công nghệ thông qua việc kết nối
                    cộng đồng người mua và người bán.</span>
            </div>
            <div className="posi">
                <h3>Định vị của chúng tôi</h3>
                <span>Thông qua GreenFood, người dùng Internet trên toàn quốc có thể trải nghiệm mua sắm trực tuyến với các sản phẩm
                    đa dạng, kết nối với cộng đồng người bán, và tận hưởng quá trình nhận hàng liền mạch.</span>
            </div>

        </div>

        <div className="motto">
            <div className="motto-detail">
                <h3>Phương châm của chúng tôi</h3>
                <span>Phương châm Simple, Happy and Together xác định tính cách thương hiệu Shopee thông qua lời nói và hành động.
                    Phương châm này hiện hữu ở bất cứ đâu trong hành trình phát triển của chúng tôi.</span>
            </div>

            <div className="motto-info">
                <div className="motto-simple">
                    <h4>Simple</h4>
                    <span>Chúng tôi tin vào sự đơn giản và toàn vẹn, đảm bảo một cuộc sống chân thật và đúng với bản thân mình.</span>
                </div>
                <div className="motto-happy">
                    <h4>Happy</h4>
                    <span>Chúng tôi thân thiện, vui vẻ, và tràn đầy năng lượng, lan tỏa niềm vui với mọi người.</span>
                </div>
                <div className="motto-together">
                    <h4>Together</h4>
                    <span>Chúng tôi thích dành thời gian cùng nhau, khi mua sắm trực tuyến với bạn bè và gia đình - cùng nhau làm những việc chúng tôi yêu thích</span>
                </div>
            </div>

        </div>
    </>
    );
};
export default AboutIntro;