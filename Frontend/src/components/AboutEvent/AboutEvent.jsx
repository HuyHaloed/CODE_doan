import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import career from "../../assets/images/event.png";
import './AboutEvent.scss';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

const AboutEvent = () => {
    const navigate = useNavigate();
    const [visitedLocaButtons, setVisitedLocaButtons] = useState([true, false, false, false]);
    const [visitedTimeButtons, setVisitedTimeButtons] = useState([true, false, false, false]);
    const [visitedDateButtons, setVisitedDateButtons] = useState([true, false, false]);
    const [events, setEvents] = useState([
        { id: 1, title: "Event 1", time: "01/09/2021 - 30/09/2021", location: "All stores", description: "20% discount on all products" },
        { id: 2, title: "Event 2", time: "01/10/2021 - 31/10/2021", location: "Store A", description: "Buy 1 get 1 free" },
        { id: 3, title: "Event 3", time: "01/11/2021 - 30/11/2021", location: "Store B", description: "30% off on selected items" },
        { id: 4, title: "Event 4", time: "01/12/2021 - 31/12/2021", location: "Store C", description: "Free gift with every purchase" },
        { id: 5, title: "Event 5", time: "01/01/2022 - 31/01/2022", location: "Store D", description: "New Year Sale" },
        { id: 6, title: "Event 6", time: "01/02/2022 - 28/02/2022", location: "Store E", description: "Valentine's Day Special" },
        { id: 7, title: "Event 7", time: "01/03/2022 - 31/03/2022", location: "Store F", description: "Spring Sale" },
        { id: 8, title: "Event 8", time: "01/04/2022 - 30/04/2022", location: "Store G", description: "Easter Sale" },
        { id: 9, title: "Event 9", time: "01/05/2022 - 31/05/2022", location: "Store H", description: "Mother's Day Special" },
        { id: 10, title: "Event 10", time: "01/06/2022 - 30/06/2022", location: "Store I", description: "Summer Sale" },
        { id: 11, title: "Event 11", time: "01/07/2022 - 31/07/2022", location: "Store J", description: "Independence Day Sale" },
        { id: 12, title: "Event 12", time: "01/08/2022 - 31/08/2022", location: "Store K", description: "Back to School Sale" },
        { id: 13, title: "Event 13", time: "01/09/2022 - 30/09/2022", location: "Store L", description: "Labor Day Sale" },
        { id: 14, title: "Event 14", time: "01/10/2022 - 31/10/2022", location: "Store M", description: "Halloween Sale" },
        { id: 15, title: "Event 15", time: "01/11/2022 - 30/11/2022", location: "Store N", description: "Thanksgiving Sale" },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 12;

    useEffect(() => {
        const locaVisited = JSON.parse(sessionStorage.getItem("visitedLocaButtons")) || [true, false, false, false];
        const timeVisited = JSON.parse(sessionStorage.getItem("visitedTimeButtons")) || [true, false, false, false];
        const dateVisited = JSON.parse(sessionStorage.getItem("visitedDateButtons")) || [true, false, false];
        setVisitedLocaButtons(locaVisited);
        setVisitedTimeButtons(timeVisited);
        setVisitedDateButtons(dateVisited);
    }, []);

    const handleLocaClick = (index) => {
        const newVisitedLocaButtons = [false, false, false, false];
        newVisitedLocaButtons[index] = true;
        setVisitedLocaButtons(newVisitedLocaButtons);
        sessionStorage.setItem("visitedLocaButtons", JSON.stringify(newVisitedLocaButtons));
    };

    const handleTimeClick = (index) => {
        const newVisitedTimeButtons = [false, false, false, false];
        newVisitedTimeButtons[index] = true;
        setVisitedTimeButtons(newVisitedTimeButtons);
        sessionStorage.setItem("visitedTimeButtons", JSON.stringify(newVisitedTimeButtons));
    };

    const handleDateClick = (index) => {
        const newVisitedDateButtons = [false, false, false];
        newVisitedDateButtons[index] = true;
        setVisitedDateButtons(newVisitedDateButtons);
        sessionStorage.setItem("visitedDateButtons", JSON.stringify(newVisitedDateButtons));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(events.length / eventsPerPage);

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
            </div>
            <div className="distribute">
                <div className="loca">
                    <label>Khu vực :</label>
                    <button className={`loca-button ${visitedLocaButtons[0] ? "visited" : ""}`}
                            onClick={() => handleLocaClick(0)}>Tất cả
                    </button>
                    <button className={`loca-button ${visitedLocaButtons[1] ? "visited" : ""}`}
                            onClick={() => handleLocaClick(1)}>Miền Bắc
                    </button>
                    <button className={`loca-button ${visitedLocaButtons[2] ? "visited" : ""}`}
                            onClick={() => handleLocaClick(2)}>Miền Trung
                    </button>
                    <button className={`loca-button ${visitedLocaButtons[3] ? "visited" : ""}`}
                            onClick={() => handleLocaClick(3)}>Miền Nam
                    </button>
                </div>
                <div className="time">
                    <label>Sự kiện :</label>
                    <button className={`loca-button ${visitedTimeButtons[0] ? "visited" : ""}`}
                            onClick={() => handleTimeClick(0)}>Tất cả sự kiện
                    </button>
                    <button className={`loca-button ${visitedTimeButtons[1] ? "visited" : ""}`}
                            onClick={() => handleTimeClick(1)}>Sắp diễn ra
                    </button>
                    <button className={`loca-button ${visitedTimeButtons[2] ? "visited" : ""}`}
                            onClick={() => handleTimeClick(2)}>Đang diễn ra
                    </button>
                    <button className={`loca-button ${visitedTimeButtons[3] ? "visited" : ""}`}
                            onClick={() => handleTimeClick(3)}>Đã kết thúc
                    </button>
                </div>

                <div className="date">
                    <label>Thời gian :</label>
                    <button className={`loca-button ${visitedDateButtons[0] ? "visited" : ""}`}
                            onClick={() => handleDateClick(0)}>Tất cả các ngày
                    </button>
                    <button className={`loca-button ${visitedDateButtons[1] ? "visited" : ""}`}
                            onClick={() => handleDateClick(1)}>Trong tháng này
                    </button>
                    <button className={`loca-button ${visitedDateButtons[2] ? "visited" : ""}`}
                            onClick={() => handleDateClick(2)}>Tháng tiếp theo
                    </button>
                </div>
            </div>

            <div className="event">
                {currentEvents.map(event => (
                    <div className="event-item" key={event.id}>
                        <div className="event-img">
                            <img src={career} alt="career"/>
                        </div>
                        <div className="event-detail">
                            <h3>{event.title}</h3>
                            <p>Thời gian: {event.time}</p>
                            <p>Địa điểm: {event.location}</p>
                            <p>Mô tả: {event.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button
                    className="page-button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <TbPlayerTrackPrevFilled/>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-button ${currentPage === index + 1 ? "disabled" : ""}`}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="page-button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <TbPlayerTrackNextFilled />
                </button>
            </div>
        </>
    );
};

export default AboutEvent;