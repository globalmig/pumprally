'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

export default function Slide2() {
  const sliderRef = useRef<Slider>(null);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const width = window.innerWidth;

    setSettings({
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "ease-out",
      slidesToShow: width < 576 ? 1 : width < 992 ? 3 : width < 1200 ? 3 : 4,
      slidesToScroll: 1,
      centerMode: width < 576 ? true : false,
      centerPadding: width < 576 ? "50px" : "0px",
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3, centerMode: false },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2, centerMode: false },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1, centerMode: true, centerPadding: "50px" },
        },
      ],
    });

  }, []);

  if (!settings) return null;

  return (
    <Slider ref={sliderRef} {...settings} className="slider2">
      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_발판.png" alt="LED 발판 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_발판.png" alt="LED 발판 게임 아이콘" width={70} height={70} />
              <p>초록색은 안전 구역, 파란색은 목표 구역, 빨간색은 금지 구역으로, 색상 변화에 유의하며 발판을 밟는 게임입니다.</p>
            </div>
          </div>
        </div>
        <p>LED 발판 게임</p>
      </div>

      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_아레나.png" alt="아레나(던지기) 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_아레나.png" alt="아레나(던지기) 게임 아이콘" width={70} height={70} />
              <p>벽에 있는 특정 발광 육각형 판에 공을 던져 맞추는 게임입니다. </p>
            </div>
          </div>
        </div>
        <p>아레나(던지기) 게임</p>
      </div>

      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_악마의눈.png" alt="악마의 눈 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_악마의눈.png" alt="악마의 눈 아이콘" width={70} height={70} />
              <p>제한 시간 내에 악마의 눈을 피해 버튼을 누르는 게임입니다.</p>
            </div>
          </div>
        </div>
        <p>악마의 눈 추적 게임</p>
      </div>

      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_암벽.png" alt="암벽 등반 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_암벽.png" alt="암벽 등반 게임 아이콘" width={70} height={70} />
              <p>초록색 등반 조명을 사용하여 벽을 통과하고, 빨간색으로 변하는 조명을 피하는 게임입니다.</p>
            </div>
          </div>
        </div>
        <p>암벽 등반 게임</p>
      </div>

      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_레이저.png" alt="형광 레이저 통과 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_레이저.png" alt="형광 레이저 통과 게임 아이콘" width={70} height={70} />
              <p>변화하는 레이저 속에서 조심히 이동하여 제한 시간 내에 반대편 안전 구역으로 이동하는 게임입니다.</p>
            </div>
          </div>
        </div>
        <p>형광 레이저 통과 게임</p>
      </div>

      <div className="slide-item">
        <div>
          <div>
            <Image src="/images/게임소개_농구.png" alt="농구 게임" width={420} height={500} />
          </div>
          <div>
            <div>
              <Image src="/icons/게임소개_농구.png" alt="농구게임 아이콘" width={70} height={70} />
              <p>정해진 시간 안에 많은 공을 골대에 넣어 점수를 획득하는 게임으로, 제한 시간 동안의 최고 기록을 도전할 수 있습니다.</p>
            </div>
          </div>
        </div>
        <p>농구 게임</p>
      </div>

    </Slider>
  )
}