import './AboutWhy.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import why from "../../assets/images/companyroom.webp";

const AboutWhy = () => {
    const navigate = useNavigate();
    return (
    <>
        <div className="why">
            <img src={why} alt="big-image-why" className="image-why" />
            <div className="line1">
                <h2 className="title-why">Vì sao nên chọn GreenFood ?</h2>
                <span className="why-detail">Chúng tôi mong muốn đem lại sự hỗ trợ tốt nhất cho
                    tất cả các bạn nhân viên. Tại Shopee, bạn sẽ có cơ hội phát triển bản thân
                    trong một môi trường làm việc nhiệt huyết, vui vẻ và hỗ trợ lẫn nhau.</span>
            </div>
            <div className="line2">
                <h2 className="title-why">Đào tạo và phát triển</h2>
                <span className="why-detail">GreenFood Academy phối hợp chặt chẽ với ban lãnh đạo,
                    các phòng ban và con người tại GreenFood để thiết kế những phương pháp học tập
                    hiệu quả. Chúng tôi mong muốn xây dựng văn hóa học tập nơi mà tất cả các bạn
                    nhân viên đều cùng được phát triển. Vì vậy, chúng tôi xây dựng và duy trì hàng
                    loạt những khóa đào tạo kỹ năng, chuyên môn và lãnh đạo dành cho từng nhóm nhân viên khác nhau.</span>
            </div>

            <div className="line3">
                <div className="line3-1">
                    <h3>Kỹ năng</h3>
                    <span>Các chương trình đào tạo và phát triển kỹ năng cần thiết như giao tiếp, tư duy sáng tạo
                        và đổi mới, v.v. giúp nhân viên làm việc hiệu quả hơn.</span>
                </div>
                <div className="line3-2">
                    <h3>Chuyên môn</h3>
                    <span>Các buổi đào tạo về công nghệ và kiến thức chuyên ngành để nâng cao kiến thức và rèn luyện khả năng chuyên môn.</span>
                </div>
                <div className="line3-3">
                    <h3>Lãnh đạo</h3>
                    <span>Chuỗi các khóa học về kỹ năng lãnh đạo, hoạt động giao lưu, các buổi huấn luyện, khai vấn, đào tạo chuyên sâu
                        dành cho các nhà lãnh đạo trên khắp khu vực.</span>
                </div>
            </div>

            <h2>Môi trường làm việc hợp tác và nhiệt huyết</h2>
            <div className="line4">
                <div className="line3-1">
                    <h3>Kết nối</h3>
                    <span>Mạng lưới văn phòng rộng lớn và dễ dàng kết nối -
                        cũng giống như cách Shopee kết nối hàng triệu người mua và người bán trên nền tảng của mình.</span>
                </div>
                <div className="line3-2">
                    <h3>Hợp tác</h3>
                    <span>Tất cả nhân viên từ nhiều bộ phận cùng làm việc, thảo luận, và cộng tác trong không gian mở.</span>
                </div>
                <div className="line3-3">
                    <h3>Cộng đồng</h3>
                    <span>Môi trường trẻ trung, vui vẻ, sôi động, tạo cho nhân viên cảm giác gắn kết và thoải mái như ở nhà.</span>
                </div>
            </div>
        </div>
    </>
    );

};
export default AboutWhy;