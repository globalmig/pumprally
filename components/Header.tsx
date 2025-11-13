'use client';
import Image from "next/image";

export default function Header() {

    const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

    return (
        <header>
            <div>
                <div>
                    <div>
                        <Image src="/icons/logo.png" alt="로고" width={245} height={125} />
                    </div>
                </div>
                <nav>
                    <ul className="display-flex">
                        <li onClick={() => handleScroll('pumprally')}>펌프랠리?</li>
                        <li onClick={() => handleScroll('competitive')}>경쟁력</li>
                        <li onClick={() => handleScroll('interior')}>인테리어</li>
                        <li onClick={() => handleScroll('inquire')}>문의하기</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}