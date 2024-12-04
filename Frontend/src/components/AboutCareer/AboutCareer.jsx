import './AboutCareer.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import career from "../../assets/images/career.jfif";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AboutCareer = () => {
    const navigate = useNavigate();

    const [departmentCheckedStates, setDepartmentCheckedStates] = useState(new Array(15).fill(false));
    const [levelCheckedStates, setLevelCheckedStates] = useState(new Array(4).fill(false));
    const [positionCheckedStates, setPositionCheckedStates] = useState(new Array(3).fill(false));

    const handleDepartmentCheckboxChange = (index) => {
        const newCheckedStates = [...departmentCheckedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setDepartmentCheckedStates(newCheckedStates);
    };

    const handleLevelCheckboxChange = (index) => {
        const newCheckedStates = [...levelCheckedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setLevelCheckedStates(newCheckedStates);
    };

    const handlePositionCheckboxChange = (index) => {
        const newCheckedStates = [...positionCheckedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setPositionCheckedStates(newCheckedStates);
    };

    const departments = [
        "Business Development and Partnerships",
        "Business Intelligence and Data Analytics",
        "Compliance",
        "Cross Border eCommerce",
        "Data Science",
        "Design",
        "Engineering and Technology",
        "Finance",
        "Legal and Finance",
        "Marketing",
        "Operations",
        "People",
        "Product Management",
        "Risk Management",
        "Shopee & SeaMoney Programmes"
    ];

    const levels = [
        "Internship",
        "Entry Level",
        "Experienced",
        "Manager",
    ];

    const positions = [
        "Miền Bắc",
        "Miền Trung",
        "Miền Nam",
    ];

    return (
        <>
            <div className="career">
                <img src={career} alt="career" className="career-img"/>
                <div className="searchbar">
                    <input type="text" className="search-box" placeholder="Nhập từ khóa"/>
                    <button className="search-button">
                        <MdSearch/>
                        Tìm kiếm
                    </button>
                </div>
                <div className="career-detail">
                    <div className="career-checkbox">
                        <div className="department-checkbox">
                            <span>Phòng ban</span>
                            {departments.map((department, index) => (
                                <label key={index} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                        checked={departmentCheckedStates[index]}
                                        onChange={() => handleDepartmentCheckboxChange(index)}
                                    />
                                    {department}
                                </label>
                            ))}
                        </div>

                        <div className="level-checkbox">
                            <span>Cấp độ</span>
                            {levels.map((level, index) => (
                                <label key={index} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                        checked={levelCheckedStates[index]}
                                        onChange={() => handleLevelCheckboxChange(index)}
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>

                        <div className="position-checkbox">
                            <span>Vị trí</span>
                            {positions.map((position, index) => (
                                <label key={index} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                        checked={positionCheckedStates[index]}
                                        onChange={() => handlePositionCheckboxChange(index)}
                                    />
                                    {position}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="hiring">
                        <div className="hiring-title">
                            <h2 className="hire">Đang tuyển dụng</h2>
                            <h3 className="hire-open">1534 Vị trí tuyển dụng</h3>
                        </div>
                        <div className="hiring-content">
                           <h3 className="hiring-detail">Trưởng nhóm kỹ thuật và bảo trì, </h3>
                            <div className="hiring-icon">
                                <span><FaBriefcase/> Operation</span>
                                <span> <SiLevelsdotfyi/> Experienced</span>
                                <span> <FaLocationDot/> Hà Nội</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="procedure">
                    <h2>Quy trình tuyển dụng</h2>
                    <div className="procedure-content">
                        <div className="procedure-box1">
                            <h3>Ứng tuyển</h3>
                            <p>Ứng viên đăng ký và nộp hồ sơ trực tuyến</p>
                        </div>
                        <div className="procedure-box2">
                            <h3>Phỏng vấn gián tiếp</h3>
                            <p>Ứng viên tham gia phỏng vấn trực tiếp hoặc qua video call</p>
                        </div>
                        <div className="procedure-box3">
                            <h3>Phỏng vấn trực tiếp và làm bài kiểm tra</h3>
                            <p>Ứng viên hãy chuẩn bị tinh thần và kiến thức để đáp ứng bài kiểm tra</p>
                        </div>
                        <div className="procedure-box4">
                            <h3>Chờ thư mời nhận việc</h3>
                            <p>Ứng viên nhận thông báo kết quả và chấp nhận lời mời</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCareer;