import React from "react";
import { Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function NavBar() {
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = "/login";
    };

    const items = [
        {
            key: "1",
            label: <a href="/" style={{ textDecoration: "none" }}>Home</a>,
        },
        {
            key: "2",
            label: <a href="/marsroverphotos" style={{ textDecoration: "none" }}>Mars Rover Photos</a>,
        },
        {
            key: "3",
            label: <a href="/APOD" style={{ textDecoration: "none" }}>APOD</a>,
        },
        {
            key: "4",
            label: (
                <li
                    onClick={handleLogout}
                    style={{ textDecoration: "none" }}>
                    Logout
                </li>
            ),
        },
    ];

    return (
        <div style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
            backgroundColor: 'rgba(85, 83, 84, 0.7)',
            marginTop: 0
        }}>
            <Row justify="space-between" align="middle">
                <Col xs={12} sm={24} md={6} lg={6}>
                    <h1 style={{ margin: "0", padding: "10px" }}>
                        <b>
                            <Link
                                to="/"
                                style={{
                                    color: 'rgba(255, 255, 255, 0.74)',
                                    fontSize: "20px",
                                    fontFamily: "serif",
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                }}
                            >
                                <img
                                    src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
                                    alt="logo"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        marginRight: "10px",
                                        verticalAlign: "middle",
                                    }}
                                />
                                NASA API
                            </Link>
                        </b>
                    </h1>
                </Col>
                <Col xs={12} sm={24} md={18} lg={18}>
                    <Row justify="end">
                        <Col>
                            <Dropdown
                                 menu={{
                                    items
                                }}
                                placement="bottomRight"
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        paddingRight: "20px",
                                    }}
                                >
                                    <img
                                        src="https://res.cloudinary.com/desnqqj6a/image/upload/v1683887268/User-Profile-PNG-High-Quality-Image_mwetdc.png"
                                        alt="profile"
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <p style={{ color: "white", fontWeight: "bold", margin: "0" }}>
                                        {user.user.username}
                                        //User Name
                                        </p>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
