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

const Links = [
  { name: "HOME", path: URLS.HOME },
  { name: "ABOUT US", path: URLS.ABOUT_US },
  { name: "ACTIVITIES", path: URLS.ACTIVITIES },
  { name: "PEOPLE", path: URLS.PEOPLE },
  { name: "JOIN US", path: URLS.JOIN_US },
];

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
  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
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
              {shouldRender && (
                <S.MenuContainer
                  isOpen={isOpen}
                  onAnimationEnd={handleAnimationEnd}
                >
                  <Menu
                    theme="dark"
                    mode="inline"
                    onOpenChange={onOpenChange}
                    openKeys={openKeys}
                  >
                    <Menu.Item
                      key="0"
                      onClick={() => {
                        router.push("home");
                      }}
                    >
                      HOME
                    </Menu.Item>
                    <SubMenu key="sub1" title="ABOUT US">
                      <Menu.Item
                        key="1"
                        onClick={() => router.push("/about", "1")}
                      >
                        Introduction
                      </Menu.Item>
                      <Menu.Item
                        key="2"
                        onClick={() => router.push("/about", "2")}
                      >
                        History
                      </Menu.Item>
                      <Menu.Item
                        key="3"
                        onClick={() => router.push("/about", "3")}
                      >
                        Curriculum
                      </Menu.Item>
                      <Menu.Item
                        key="4"
                        onClick={() => router.push("/about", "4")}
                      >
                        Alumni
                      </Menu.Item>
                      <Menu.Item
                        key="5"
                        onClick={() => router.push("/about", "5")}
                      >
                        Achievement
                      </Menu.Item>
                      <Menu.Item
                        key="6"
                        onClick={() => router.push("/about", "6")}
                      >
                        Press Release
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="ACTIVITIES">
                      <Menu.Item
                        key="7"
                        onClick={() => router.push("/activities", "1")}
                      >
                        Session
                      </Menu.Item>
                      <Menu.Item
                        key="8"
                        onClick={() => router.push("/activities", "2")}
                      >
                        Hackathon
                      </Menu.Item>
                      <Menu.Item
                        key="9"
                        onClick={() => router.push("/activities", "3")}
                      >
                        Start-up
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10" onClick={() => router.push("/join")}>
                      JOIN US
                    </Menu.Item>
                    <S.NoticeContainer>
                      <p>ⓒ NEXT X Likelion</p>
                      <p>korea@likelion.org</p>

                      <p>korea university, Anam-dong, Seongbuk-gu,</p>
                      <p>Seoul, South Korea</p>
                    </S.NoticeContainer>
                  </Menu>
                </S.MenuContainer>
              )}
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
