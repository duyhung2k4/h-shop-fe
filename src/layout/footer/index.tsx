import React from "react";
import "./style.css";

import { Grid, Stack } from "@mantine/core";
import "./style.css";

import location3 from "./image/location3.png";
import phone from "./image/phone.png";
import mail from "./image/mail.png";
import instagram from "./image/instagram.png";
import facebook from "./image/facebook.png";
import youtube from "./image/youtube.png";
import tik_tok from "./image/tik_tok.png";

const Footer: React.FC = () => {
    return (
        <Stack>
            <footer>
                <div className="f_container">
                    <Grid gutter={20} p={40}>
                        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                            <div className="f_lienhe">
                                <p className="f_oquy">H SHOP</p>
                                <p className="f_trch">THỜI TRANG CHÍNH HÃNG</p>
                                <a href="">
                                    <div className="f_diachi">
                                        <div><img src={location3} alt="" /></div>
                                        <div>
                                            <p>Hà Nội: Yên Nghĩa, Hà Đông, Hà Nội </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_diachi">
                                        <div><img src={location3} alt="" /></div>
                                        <div>
                                            <p>Hà Nội: Yên Nghĩa, Hà Đông, Hà Nội </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_phone">
                                        <img src={phone} alt="" />
                                        <p>0919231670</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_mail">
                                        <img src={mail} alt="" />
                                        <p>oquyshop@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </Grid.Col>

                        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <div className="f_CSKH">
                                <p className="f_text-cskh">CHĂM SÓC KHÁCH HÀNG</p>
                                <ul>
                                    <li><a href="">Cam kết từ H Shop</a></li>
                                    <li><a href="">Bảo hành & đổi trả</a></li>
                                    <li><a href="">Vận chuyển & giao nhận</a></li>
                                    <li><a href="">Đặt hàng và thanh toán</a></li>
                                    <li><a href="">Bảo mật thông tin</a></li>
                                    <li><a href="">Điều khoản & dịch vụ</a></li>
                                </ul>
                            </div>
                        </Grid.Col>

                        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <div className="f_follow">
                                <p>Theo dõi chúng tôi</p>
                                <a href="">
                                    <div className="f_theodoi">
                                        <img src={instagram} alt="" />
                                        <p>Instagram</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_theodoi">
                                        <img src={facebook} alt="" />
                                        <p>Facebook</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_theodoi">
                                        <img src={youtube} alt="" />
                                        <p>Youtube</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="f_theodoi">
                                        <img src={tik_tok} alt="" />
                                        <p>TikTok</p>
                                    </div>
                                </a>
                            </div>
                        </Grid.Col>

                        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <div className="f_map">
                                <p>ĐỊA CHỈ</p>
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.748413661275!2d105.74611147443265!3d20.962616190048667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2sus!4v1718555560520!5m2!1svi!2sus"
                                        width="450"
                                        height="280"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
                <div className="f_end">
                    <p>Copyright 2024 oquyshop.com</p>
                </div>
            </footer>
        </Stack>
    )
}

export default Footer;