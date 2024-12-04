import styles from "./SellerChannel.module.css";
import Menu from "./components/Menu";
import sale from "../../assets/images/sale.png";
import { Icon } from "@iconify/react";
import SellerNavbar from "./components/SellerNavBar";
import Tabs from "./components/Tabs";
import Chart from "./components/Chart";
import MyCalendar from "./components/Calendar";

function SellerChannel() {
  return (
    <>
      <>
        <SellerNavbar title={"Kênh Người Bán"} />
        <div className={styles.mainContent}>
          <div className={styles.sidebar}>
            <Menu
              title="Quản Lý Đơn Hàng"
              items={[
                "Tất cả",
                "Giao hàng loạt",
                "Đơn trả hàng/Hoàn tiền",
                "Cài đặt vận chuyển",
                "Bàn giao đơn hàng",
              ]}
            />
            <Menu
              title="Quản Lý Sản Phẩm"
              items={["Tất Cả Sản Phẩm", "Thêm Sản Phẩm"]}
              links={["/all-products", "/seller/add-product"]}
            />
            <Menu
              title="Kênh Marketing"
              items={[
                "Kênh marketing",
                "Đấu giá rẻ vô địch",
                "Quảng cáo GreenFood",
                "Tặng đơn cùng KOL",
                "Live & Video",
                "Khuyến mãi của shop",
                "Flash sale của shop",
                "Mã giảm giá của shop",
              ]}
            />
            <Menu
              title="Chăm Sóc Khách Hàng"
              items={["Quản lý chat", "Quản lý đánh giá"]}
            />
            <Menu
              title="Tài Chính"
              items={["Doanh thu", "Số dư TK GreenFood", "Tài khoản ngân hàng"]}
            />
            <Menu
              title="Dữ Liệu"
              items={["Phân tích bán hàng", "Hiệu quả hoạt động"]}
            />
            <Menu
              title="Quản lý shop"
              items={["Hồ sơ shop", "Trang trí shop", "Thiết lập shop"]}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.contentSection}>
              <div className={styles.title}>Danh sách cần làm</div>
              <p className={styles.subTitle}>Những việc bạn sẽ phải làm</p>
              <div className={styles.todoItems}>
                {[
                  "Chờ Xác Nhận",
                  "Chờ Lấy Hàng",
                  "Đã Xử Lý",
                  "Đơn Hủy",
                  "Trả Hàng / Hoàn Tiền Chờ Xử Lý",
                  "Sản Phẩm Bị Tạm Khóa",
                  "Sản Phẩm Hết Hàng",
                  "Chương Trình Khuyến Mãi Chờ Xử Lý",
                ].map((item, index) => (
                  <div key={index} className={styles.todoItem}>
                    <span className={styles.todoCount}>0</span>
                    <span className={styles.todoLabel}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Phân Tích Bán Hàng</h2>
                <p className={styles.time}>Hôm nay 00:00 GMT+7 - 21:00</p>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>
              <p className={styles.subTitle}>
                Tổng quan dữ liệu của shop đối với đơn hàng đã xác nhận
              </p>
              <div className={styles.salesData}>
                <div className={styles.chart}>
                  <Chart />
                </div>
                <div className={styles.dataOverview}>
                  <div className={styles.dataItem}>
                    <span className={styles.dataLabel}>Lượt truy cập</span>
                    <span className={styles.dataValue}>0</span>
                    <span className={styles.dataComparison}>
                      Vs hôm qua 0,00%
                    </span>
                  </div>
                  <div className={styles.dataItem}>
                    <span className={styles.dataLabel}>Lượt xem</span>
                    <span className={styles.dataValue}>0</span>
                    <span className={styles.dataComparison}>
                      Vs hôm qua 0,00%
                    </span>
                  </div>
                  <div className={styles.dataItem}>
                    <span className={styles.dataLabel}>Đơn hàng</span>
                    <span className={styles.dataValue}>0</span>
                    <span className={styles.dataComparison}>
                      Vs hôm qua 0,00%
                    </span>
                  </div>
                  <div className={styles.dataItem}>
                    <span className={styles.dataLabel}>Tỷ lệ chuyển đổi</span>
                    <span className={styles.dataValue}>0,00%</span>
                    <span className={styles.dataComparison}>
                      Vs hôm qua 0,00%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.title}>Kênh Marketing</div>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>

              <p className={styles.subTitle}>
                Công cụ Marketing & Đăng ký chương trình Khuyến Mãi
              </p>
              <div className={styles.calendarWrapper}>
                <MyCalendar />
                <div className={styles.calendarDesc}>
                  <Icon
                    icon="hugeicons:wallet-not-found-01"
                    className={styles.noEventIcon}
                  />
                  <p className={styles.text}>
                    Hiện không có chương trình hoặc sự kiện nào cho tháng này.
                    Shop vui lòng thử lại hoặc xem các tháng sau.
                  </p>
                </div>
              </div>
              <div className={styles.subCard}>
                <div className={styles.subCardTitle}>Công cụ Marketing</div>
                <div className={styles.toolsWrapper}>
                  <div className={styles.tool}>
                    <div className={styles.toolIcon}>
                      <Icon icon="mdi:voucher" />
                    </div>
                    <div className={styles.toolTitle}>Mã Giảm Giá Của Shop</div>
                    <div className={styles.toolDesc}>
                      Công cụ tăng đơn hàng bằng cách tạo mã giảm giá tặng cho
                      người mua
                    </div>
                  </div>
                  <div className={styles.tool}>
                    <div className={styles.toolIcon}>
                      <Icon icon="foundation:burst-sale" />
                    </div>
                    <div className={styles.toolTitle}>
                      Chương Trình Của Shop
                    </div>
                    <div className={styles.toolDesc}>
                      Công cụ tăng đơn hàng bằng cách tạo chương trình giảm giá
                    </div>
                  </div>
                  <div className={styles.tool}>
                    <div className={styles.toolIcon}>
                      <Icon icon="mdi:present" />
                    </div>
                    <div className={styles.toolTitle}>Combo Khuyến Mãi</div>
                    <div className={styles.toolDesc}>
                      Tạo Combo Khuyến Mãi để tăng giá trị đơn hàng trên mỗi
                      người mua
                    </div>
                  </div>
                  <div className={styles.tool}>
                    <div className={styles.toolIcon}>
                      <Icon icon="solar:shop-bold" />
                    </div>
                    <div className={styles.toolTitle}>Flash Sale Của Shop</div>
                    <div className={styles.toolDesc}>
                      Công cụ giúp tăng doanh số bằng cách tạo khuyến mãi khủng
                      trong các khung giờ nhất định
                    </div>
                  </div>
                  <div className={styles.tool}>
                    <div className={styles.toolIcon}>
                      <Icon icon="mdi:love" />
                    </div>
                    <div className={styles.toolTitle}>Ưu Đãi Follower</div>
                    <div className={styles.toolDesc}>
                      Khuyến khích người mua theo dõi Shop bằng cách tặng
                      voucher cho Người theo dõi mới
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.title}>Hiệu quả hoạt động</div>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>
              <p className={styles.subTitle}>
                Bảng Hiệu Quả Hoạt Động giúp Người Bán hiểu rõ hơn về hoạt động
                buôn bán của Shop mình dựa trên những chỉ tiêu sau:
              </p>
              <Tabs />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.title}>Điểm sao quả tạ</div>
                <p className={styles.time}>
                  Từ 7 Tháng 10 2024 đến 5 Tháng 1 2025
                </p>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>
              <p className={styles.subTitle}>
                Hệ thống Sao Quả Tạ giúp Người bán duy trì dịch vụ bán hàng chất
                lượng, mang đến sự hài lòng cho Người mua.
              </p>
              <div className={styles.pointWrapper}>
                <div className={styles.point}>0</div>
                <div className={styles.pointDesc}>
                  Shop đang hoạt động rất hiệu quả, hãy giữ vững kết quả này để
                  Người mua thêm vững lòng tin Shop nhé!
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subContent}>
            <div className={styles.contentImage}>
              <img src={sale} alt="sale" className={styles.image} />
            </div>
            <div className={styles.subContentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.title}>Tin nổi bật</div>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>
              <div className={styles.newsWrapper}>
                <p className={styles.news}>
                  <Icon
                    icon="emojione-monotone:newspaper"
                    className={styles.newsIcon}
                  />
                  NGƯỜI BÁN KINH NGHIỆM ƠI
                </p>
                <p className={styles.desc}>
                  Chương trình GreenFood KOL Sellers - Người bán kinh nghiệm
                  đang tìm kiếm thêm những người bán kinh nghiệm.. Tìm hiểu về
                  chương trình ngay TẠI ĐÂY.
                </p>
              </div>
              <div className={styles.newsWrapper}>
                <p className={styles.news}>
                  <Icon
                    icon="emojione:money-with-wings"
                    className={styles.newsIcon}
                  />
                  ĐẠT MỤC TIÊU ROAS QUẢNG CÁO KHÔNG KHÓ
                </p>
                <p className={styles.desc}>
                  Đừng bỏ lỡ tính năng Tối Đa Doanh Thu Quảng Cáo vì: Tính năng
                  sẽ giúp bạn cải thiện ROAS như mong muốn. Tính năng sẽ giúp
                  bạn tăng lưu lượng truy cập. Tính năng sẽ giúp bạn tăng nhận
                  diện thương hiệu sản phẩm. TRẢI NGHIỆM NGAY!
                </p>
              </div>
              <div className={styles.newsWrapper}>
                <p className={styles.news}>
                  <Icon
                    icon="icon-park:data-arrival"
                    className={styles.newsIcon}
                  />
                  TỐI ƯU GIÁ THẦU QUẢNG CÁO
                </p>
                <p className={styles.desc}>
                  Hãy để GreenFood giúp bạn x2 traffic và kiểm soát chi phí mà
                  không cần tốn nhiều sức với tính năng Giá Thầu Cạnh Cạnh Tranh
                  .TRẢI NGHIỆM NGAY!
                </p>
              </div>
            </div>
            <div className={styles.subContentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.title}>Nhiệm vụ</div>
                {/* eslint-disable-next-line */}
                <a href="#" className={styles.viewMore}>
                  Xem thêm
                  <Icon
                    icon="weui:arrow-outlined"
                    className={styles.moreIcon}
                  />
                </a>
              </div>
              <div className={styles.mission}>
                <p className={styles.missionTitle}>
                  Hoàn thành khoá học bắt đầu
                </p>
                <p className={styles.missionDesc}>
                  <Icon icon="codicon:fold-up" className={styles.pushIcon} />
                  Nhận 5 lần Đẩy sản phẩm
                </p>
                <div className={styles.btnWrapper}>
                  <button className={styles.missionBtn}>Bắt đầu</button>
                </div>
              </div>
              <div className={styles.mission}>
                <p className={styles.missionTitle}>
                  Hoàn thành khoá học bán hàng trên GreenFood
                </p>
                <p className={styles.missionDesc}>
                  <Icon icon="codicon:fold-up" className={styles.pushIcon} />
                  Nhận 5 lần Đẩy sản phẩm
                </p>
                <div className={styles.btnWrapper}>
                  <button className={styles.missionBtn}>Bắt đầu</button>
                </div>
              </div>
              <div className={styles.mission}>
                <p className={styles.missionTitle}>
                  Hoàn thành khoá học đạt được đơn hàng đầu tiên của bạn
                </p>
                <p className={styles.missionDesc}>
                  <Icon icon="codicon:fold-up" className={styles.pushIcon} />
                  Nhận 5 lần Đẩy sản phẩm
                </p>
                <div className={styles.btnWrapper}>
                  <button className={styles.missionBtn}>Bắt đầu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default SellerChannel;
