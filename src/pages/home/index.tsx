import { Group, Stack } from "@mantine/core";
import React from "react";

import anhgiay4 from "./image/anhgiay4.png"
import logofeature from "./image/logofeature.png"
import anhgiay5 from "./image/anhgiay5.png"
import review_content from "./image/review_content.png"
import logoavatar from "./image/logoavatar.png"
import anhgiay6 from "./image/anhgiay6.png"

import "./style.css";
import { useAppSelector } from "@/redux/hook";

const Home: React.FC = () => {

    const { categorys } = useAppSelector(state => state.typeProductSlice);

    return (
        <Stack>
            <div className="container">
                <div className="content1">
                    <div className="img-content1">
                        <a href=""><img src={anhgiay4} alt="" /></a>
                    </div>
                    <div className="text-content1">
                        <p className="nike">Nike</p>
                        <br />
                        <p className="nike">Self-Lacing</p>
                        <br />
                        <p className="shoes">shoes</p>.
                        <p className="text-gt">Nike là thương hiệu giày nổi tiếng thế giới, được thành lập năm 1964. Giày Nike nổi bật với thiết kế tinh tế và công nghệ tiên tiến như Air Max và Flyknit, mang lại sự thoải mái và hiệu suất cao. Thương hiệu này được ưa chuộng bởi cả vận động viên chuyên nghiệp và người yêu thể thao.
                        </p>
                        <div className="btn">
                            <a href=""><button className="btn-addcart">Thêm</button></a>
                            <a href=""><button className="btn-shop">Xem ngay</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature">
                <a href="" className="text-fea1">THÀNH VIÊN</a>
                <a href="" className="text-fea2">Đây là thành viên của nhóm tôi</a>
                <div className="cards-feature">
                    <a href="">
                        <div className="card">
                            <div className="card-img"> <img src={logofeature} alt="" /></div>
                            <div className="text-card">
                                <p className="quality">Nguyễn Hưng</p>
                                <p className="text-quality">
                                    Đẹp trai - tài năng - tư duy đỉnh cao là những gì mà anh ấy có, quản lí các công việc trong team
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card2">
                            <div className="card-img"> <img src={logofeature} alt="" /></div>
                            <div className="text-card">
                                <p className="quality">Trọng Tấn</p>
                                <p className="text-quality">
                                    Thành viên cốt cán trong việc design và thiết kế, quản lí toàn bộ về hình ảnh sản phẩm
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className="card-img"> <img src={logofeature} alt="" /></div>
                            <div className="text-card">
                                <p className="quality">Duy Hùng</p>
                                <p className="text-quality">
                                    Tay mơ - Tấu hài - Phân tích dữ liệu về thị trường cho sản phẩm
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="video">
                <div className="text-video">
                    <p className="text-vid1">VIDEO</p>
                    <p className="text-vid2">Giới thiệu về chúng tôi</p>
                    <p className="text-vid3">
                        Một clip ngắn về sự hình thành và phát triển của nhóm
                    </p>
                    <a href=""><button className="btn-learn">Xem thêm</button></a>
                </div>
                <div className="video-container">
                    <div className="box-border">
                    </div>
                    <div className="main-video">
                        <iframe width="380" height="280" src="https://www.youtube.com/embed/dUoRchsBt28?si=T8I9oZpDZCup5Nvs"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <p className="text-gallery">Sản phẩm</p>
                <p className="text-gallery2">Có rất nhiều loại sản phẩm khác nhau cho bạn lựa chọn</p>
                <div className="menu-gallery">
                    <ul>
                        <Group justify="center">
                            {
                                categorys.map(item =>
                                    <a href="" key={item.ID}>
                                        <li className="text-menu">{item.name}</li>
                                    </a>
                                )
                            }
                        </Group>
                    </ul>
                </div>
                <div className="cards-gallery">
                    <div className="card-gal">
                        <img src={anhgiay5} alt="" />
                        <p className="air-max">Giày xanh 2023</p>
                        <div className="rate">
                            <p className="star">&#9733;</p>
                            <p>4.7/5 (881)</p>
                        </div>
                        <p className="price">Giá: 2,000,000 VND</p>
                        <div className="btn-icon">
                            <a href=""><button className="btn-addcart">Thêm</button></a>
                            <p className="icon-heart">&#9825;</p>
                        </div>
                    </div>
                    <div className="card-gal">
                        <img src={anhgiay5} alt="" />
                        <p className="air-max">Giày xanh 2023</p>
                        <div className="rate">
                            <p className="star">&#9733;</p>
                            <p>4.7/5 (881)</p>
                        </div>
                        <p className="price">Giá: 2,000,000 VND</p>
                        <div className="btn-icon">
                            <a href=""><button className="btn-addcart">Thêm</button></a>
                            <p className="icon-heart">&#9825;</p>
                        </div>
                    </div>
                    <div className="card-gal">
                        <img src={anhgiay5} alt="" />
                        <p className="air-max">Giày xanh 2023</p>
                        <div className="rate">
                            <p className="star">&#9733;</p>
                            <p>4.7/5 (881)</p>
                        </div>
                        <p className="price">Giá: 2,000,000 VND</p>
                        <div className="btn-icon">
                            <a href=""><button className="btn-addcart">Thêm</button></a>
                            <p className="icon-heart">&#9825;</p>
                        </div>
                    </div>
                    <div className="card-gal">
                        <img src={anhgiay5} alt="" />
                        <p className="air-max">Giày xanh 2023</p>
                        <div className="rate">
                            <p className="star">&#9733;</p>
                            <p>4.7/5 (881)</p>
                        </div>
                        <p className="price">Giá: 2,000,000 VND</p>
                        <div className="btn-icon">
                            <a href=""><button className="btn-addcart">Thêm</button></a>
                            <p className="icon-heart">&#9825;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review">
                <p className="text-review">GIỚI THIỆU</p>
                <p className="text-testiminial">Về phương châm</p>
                <div className="review-content">
                    <div><img src={review_content} alt="" /></div>
                    <div className="info">
                        <img src={logoavatar} alt="" />
                        <p className="text-review1">Phương châm của Nike, "Just Do It," là một thông điệp đơn giản nhưng mạnh mẽ, khuyến khích mọi người vượt qua giới hạn của bản thân và hành động. Slogan này thể hiện tinh thần quyết tâm, sự tự tin và khát khao chinh phục, tạo cảm hứng cho hàng triệu người trên khắp thế giới.</p>
                        <div className="btn-next-prev">
                            <button className="btn-next">&larr;</button>
                            <button className="btn-next">&rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subcribe">
                <div className="text-subcribe">
                    <p className="text-sub">THAM GIA NGAY</p>
                    <p className="text-signup">Viết thư cho chúng tôi</p>
                    <p className="text-sub-content">Chúng tôi xin trân trọng cảm ơn Quý khách đã luôn tin tưởng và ủng hộ thương hiệu Nike trong suốt thời gian qua. Với phương châm "Just Do It," chúng tôi cam kết mang đến những sản phẩm giày chất lượng cao, thiết kế tinh tế và công nghệ tiên tiến nhất để hỗ trợ Quý khách trên hành trình chinh phục mọi thử thách.</p>
                    <div className="email-form-container">
                        <form>
                            <input type="email" placeholder="Nhập email của bạn" required />
                            <button className="btn-send" type="submit">Gửi &rarr;</button>
                        </form>
                    </div>
                </div>
                <div className="img-subcribe">
                    <a href=""><img src={anhgiay6} alt="" /></a>
                </div>
            </div>
        </Stack>
    )
}

export default Home;