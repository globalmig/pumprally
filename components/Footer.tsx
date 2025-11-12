import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <h2>펌프랠리</h2>
                    <ul>
                        <li>
                            <span>상호명</span>
                            펌프랠리
                        </li>
                        <li>
                            <span>대표자</span>
                            김법진, 김혜정
                        </li>
                        <li>
                            <span>사업장 주소</span>
                            동두천시 지행동719 한스빌딩3층 304호
                        </li>
                        <li>
                            <span>사업자 등록번호</span>788-34-01647
                        </li>
                        <li>
                            <span>대표전화</span>010-5534-4424
                        </li>
                        <li>
                            <span>이메일</span>qjqwlssl@naver.com
                        </li>
                        <li>Copyright ⓒ 2025 펌프랠리 All rights reserved.</li>
                    </ul>
                </div>
                <div>
                    <Image src="/images/명함.jpg" alt="명함" width={500} height={300} />
                </div>
            </div>
        </footer>
    )
}