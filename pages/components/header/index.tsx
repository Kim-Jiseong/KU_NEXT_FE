import React, { useEffect, useState } from "react";
import { URLS } from "pages/constants/urls";
import * as S from "styles/components/header/style";
import LogoImg from "public/assets/logo.png";
import BlackLogoImg from "public/assets/blackLogo.png";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "antd/dist/reset.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const Links = [
  { name: "HOME", path: URLS.HOME },
  { name: "ABOUT US", path: URLS.ABOUT_US },
  { name: "ACTIVITIES", path: URLS.ACTIVITIES },
  { name: "PEOPLE", path: URLS.PEOPLE },
  { name: "JOIN US", path: URLS.JOIN_US },
];
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fullscreen, setFullscreen] = useState<number>();
  const logoSrc =
    pathname === URLS.HOME || pathname === URLS.JOIN_US
      ? LogoImg
      : BlackLogoImg;
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const { SubMenu } = Menu;
  const [shouldRender, setShouldRender] = useState(false);
  const rootSubmenuKeys = ["sub1", "sub2"];
  const menuClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });

  useEffect(() => {
    setFullscreen(window.innerHeight);
    window.addEventListener("scroll", updateScroll);
    console.log(pathname, URLS.HOME);
  }, []);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // const handleAnimationEnd = () => {
  //   if (!isOpen) {
  //     setShouldRender(false);
  //   }
  // };
  const sidebar = {
    open: (height = 1000) => ({
      x: 0,
      // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        // restDelta: 2,
      },
    }),
    closed: {
      x: "-100%",
      // clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };
  useEffect(() => {
    if (isOpen) {
      setShouldRender(isOpen);
    }
  }, [isOpen]);
  if (isMobile) {
    return (
      <>
        {fullscreen && (
          <>
            <S.Container isOpen={isOpen}>
              <S.Header>
                <S.NavBarLogo
                  src={LogoImg.src}
                  onClick={() => router.push("home")}
                  alt="NEXT 로고"
                />
                <S.HamburgerContainer
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  click={isOpen}
                  isWhite={pathname === URLS.HOME}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </S.HamburgerContainer>
              </S.Header>
              <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={sidebar}
                initial={false}
              >
                <S.MenuContainer
                  isOpen={isOpen}
                  // animate={isOpen ? "open" : "closed"}
                  // variants={sidebar}
                >
                  <S.MenuWrapper>
                    {Links.map(({ name, path }) => (
                      <>
                        <S.Menu
                          onClick={() => {
                            router.push(path);
                            setIsOpen((prev) => !prev);
                          }}
                          selected={pathname === path ? true : false}
                          key={name}
                        >
                          {name}
                        </S.Menu>
                        {path === "/about" && (
                          <S.SubMenuContainer>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "1" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Introductions
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "2" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Greeting
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "3" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              History
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "4" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Achievement
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "5" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Partners
                            </S.SubMenu>
                          </S.SubMenuContainer>
                        )}
                        {path === "/activities" && (
                          <S.SubMenuContainer>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "1" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Curriculum
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "2" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Session
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "3" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Project
                            </S.SubMenu>
                            <S.SubMenu
                              onClick={() => {
                                router.push({
                                  pathname: path,
                                  query: { key: "4" },
                                });
                                setIsOpen((prev) => !prev);
                              }}
                            >
                              Demoday
                            </S.SubMenu>
                          </S.SubMenuContainer>
                        )}
                      </>
                    ))}
                  </S.MenuWrapper>
                  <S.NoticeContainer>
                    <p>ⓒ NEXT X Likelion</p>
                    <p>korea@likelion.org</p>
                    <p>korea university, Anam-dong, Seongbuk-gu,</p>
                    <p>Seoul, South Korea</p>
                  </S.NoticeContainer>
                </S.MenuContainer>
              </motion.nav>
            </S.Container>

            {/* <S.HeaderWhiteSpace /> */}
          </>
        )}
      </>
    );
  }
  return (
    <>
      {fullscreen && (
        <S.NavBarContainer
          scroll={scrollPosition > fullscreen * 0.3 ? true : false}
          pathname={pathname}
        >
          <S.NavBarLogo
            src={logoSrc.src}
            onClick={() => router.push("home")}
            alt="NEXT 로고"
          />

          <S.NavLinkWrapper>
            {Links.map(({ name, path }) => (
              <S.StyledNav
                isWhite={pathname === URLS.HOME || pathname === URLS.JOIN_US}
                onClick={() => {
                  router.push(path);
                }}
                selected={pathname === path ? true : false}
                key={name}
              >
                {name}
              </S.StyledNav>
            ))}
          </S.NavLinkWrapper>
        </S.NavBarContainer>
      )}
    </>
  );
};

export default NavBar;
