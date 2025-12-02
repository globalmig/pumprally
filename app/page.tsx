'use client'
import InquireForm from "@/components/InquireForm";
import Slide2 from "@/components/Slide2";
import Slide from "@/components/Slide";
import Image from "next/image";
import { useRef } from "react";

export interface SlideHandle {
  next: () => void;
  prev: () => void;
}

export default function Home() {

  const slideRef = useRef<SlideHandle>(null);

  return (
    <>
      <main id="pumprally">
        <div>
          <div>
            <Image className="mo" src="/images/banner_mo.jpg" alt="배너" width={1024} height={1536} />
            <Image className="pc" src="/images/banner_pc.png" alt="배너" width={2560} height={846} />
          </div>
          <ul>
            <li>
              <span>펌프랠리</span>는 업계 최초 공장직영 협업 계약 시스템 기반으로, <span>모든 LED 제품 KC인증</span>을 완료했습니다.
            </li>
            <li>발판게임 및 다양한 LED게임들을 <span>중간 마진이 없이</span><br />직접 고객님께 직접 <span>창업, 컨설팅, 판매, 설치까지</span> 서비스를 제공합니다.</li>
            <li>개인 창업부터 프랜차이즈 사업까지 여러가지 원하는 방향에 맞춰<br />
              국내 모든 업체보다 <span>합리적인 비용</span>으로 제시할 수 있습니다.</li>
            <li>인테리어부터 설비 설치 모든 부분을 원하는 만큼 다양하게 컨설팅이 가능합니다.</li>
          </ul>
        </div>
      </main>

      <article className="intro" id="intro">
        <div>

          <div>
            <h1>
              <span>누구나 즐기는</span><br />
              혁신 게임 공간!
            </h1>
            <p>가족, 청소년, 커플 등 모든 연령층이 즐길 수 있는 깨끗하고 쾌적한 실내 게임 공간을 제공합니다.</p>
          </div>

          <div>
            <section>
              <p>2세대 혁신 발판게임, 전세계 유행 선도</p>
            </section>
            <section>
              <p>다양한 연령층이 함께 즐기는 쾌적한 실내 자유 공간</p>
            </section>
            <section>
              <p>투자 대비 높은 순수익과 지속 가능한 수익 구조 </p>
            </section>
            <section>
              <p>특별한 교육과 어려움없이 누구나 운영 가능</p>
            </section>
          </div>
        </div>
      </article>

      <Slide2 />

      <article className="competitive" id="competitive">
        <div>

          <div>
            <h1> 펌프랠리의 <span>경쟁력</span></h1>
            <h3>언제까지 프랜차이즈의 과한 비용과
              부당한 조건으로 사업의 본질을 떠나
              초기 부담과 지속적인 부담을 초래하는
              가맹 계약을 하실건가요?</h3>
          </div>

          <section>
            <div className="display-flex-flow">
              <div>
                <Image src="/images/competitive_발판.png" alt="발판 게임 이미지" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/competitive_암벽.png" alt="암벽등반 게임 이미지" width={670} height={420} />
              </div>
            </div>
            <div className="pink-box">
              <h2>저희는 <span>가맹사업을 하지 않습니다.</span></h2>
              <p>단순한 가맹사업이 아닌 창업주들의 입장에서 원하는 만큼 원하는 방향으로 컨설팅해드리기에 <span>가맹비와 교육 및 개설비, 상표권, 계약 이행금, 월 로얄티를 절대 받지 않습니다.</span></p>
              <p>또한 모든 업계 비교 견적을 받아보시고 저희와 상담하시면 방당 개설 비용 조차 저희가 합리적이라고 자부합니다.</p>
            </div>
          </section>

          <section>
            <div className="display-flex-flow">
              <div>
                <Image className="pc" src="/images/발판게임_pc.png" alt="발판 게임 이미지" width={670} height={420} />
                <Image className="mo" src="/images/발판게임_mo.png" alt="발판 게임 이미지" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/악마의눈.png" alt="악마의 눈 게임 이미지" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/레이저게임.png" alt="레이저 게임 이미지" width={670} height={420} />
              </div>
            </div>
            <div className="pink-box">
              <p>일반 발판 게임뿐만 아니라 레이저 게임, 악마의 눈, 암벽 등반 등 <span>다양한 게임 요소를 제공</span>합니다.
                이를 통해 고객 체류 시간과 만족도를 높이고, 단순 놀이 공간을 넘어
                <span>수익과 경험을 동시에 창출</span>할 수 있도록 지원합니다.</p>
            </div>
          </section>

        </div>
      </article>

      <article className="interior" id="interior">
        <div>
          <div>
            <h1>믿고 맡기는<br /><span>맞춤 설계 인테리어</span></h1>
            <p>함께 창업주와 성장하는 맞춤 설계를 통해, 믿고 맡길 수 있는 인테리어 서비스를 제공합니다.</p>
          </div>

          <div className="display-flex-flow">
            <div>
              <Image src="/images/kc.jpg" alt="KC정품 인증서" width={670} height={420} />
            </div>
            <div>
              <h2>KC 인증된 자재 시공으로<br />안정성과 신뢰성</h2>
              <h1>UP!</h1>
            </div>
            <div className="yellow-box">
              <p>업계 최초, 공장 직영 협업 계약을 통해 LED 포함한 모든 시공 자재는 <span>KC 인증</span>을 완료한 정품만을 사용합니다.</p>
            </div>
          </div>

          <div>
            <div className="display-flex-flow">
              <div>
                <Image src="/images/interior_1.png" alt="인테리어 이미지1" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/interior_2.png" alt="인테리어 이미지2" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/interior_3.png" alt="인테리어 이미지3" width={670} height={420} />
              </div>
              <div>
                <Image src="/images/interior_4.png" alt="인테리어 이미지4" width={670} height={420} />
              </div>
            </div>
            <div className="yellow-box">
              <p>직영 전문 인테리어 장기계약 체결로 <span>중간 마진없이 시공</span> 가능하며, A형(일반가성비), B형(퀄리티) 원하는 방향으로 타업체보다 합리적인 인테리어 제시해드립니다.</p>
            </div>
          </div>

          <div className="display-flex-flow">
            <div>
              <Image src="/images/design.png" alt="간판 디자인 시안" width={740} height={750} />
            </div>
            <div className="yellow-box">
              <p>개인자율 인테리어 또한 적극적으로 지원해 드리며, <span>상표 로고 시안과 개설 디자인 설계도를 무상으로 지원</span>해드립니다.</p>
            </div>
          </div>

          <div className="display-flex-flow">
            <section>
              <div>
                <Image src="/images/open.png" alt="동두천 11월 오픈" width={257} height={214} />
              </div>
              <p>동두천<br />11월 오픈</p>
            </section>
            <section>
              <div>
                <Image src="/images/open.png" alt="천안 12월 오픈" width={257} height={214} />
              </div>
              <p>천안<br />12월 오픈</p>
            </section>
            <section>
              <div>
                <Image src="/images/open.png" alt="원주 1월 오픈" width={257} height={214} />
              </div>
              <p>원주<br />1월 오픈</p>
            </section>
            <section>
              <div>
                <Image src="/images/open.png" alt="춘천 오픈 예정" width={257} height={214} />
              </div>
              <p>춘천<br />오픈 예정</p>
            </section>
            <section>
              <div>
                <Image src="/images/wip.png" alt="양산 계약 진행중" width={257} height={214} />
              </div>
              <p>양산<br />계약 진행중</p>
            </section>
          </div>
          <div>
            <h1>공장 내부 제품 <br /><span>작업 과정</span></h1>
            <div>
              <Slide ref={slideRef} />
              <div className="display-flex slide-arrow" style={{ gap: "10px", marginTop: "10px" }}>
                <button onClick={() => slideRef.current?.prev()} className='arrow-prev'>
                  <Image src="/icons/prev.png" alt="이전" width={20} height={30} />
                </button>
                <button onClick={() => slideRef.current?.next()} className='arrow-next'>
                  <Image src="/icons/next.png" alt="다음" width={20} height={30} />
                </button>
              </div>
            </div>
            <div className="yellow-box">
              <p>
                LED 현지 최대 생산시설로 <span>전제품 수작업</span>으로  제조 공정하며, 제품 생산후 테스트 시연후 출고합니다.
              </p>
            </div>
            <div>
              <p>프랜차이즈 업자가 아닌 <span>전문 인테리어팀이 직접 진행</span>하기 때문에 모든 과정을 책임질 수 있습니다.</p>
            </div>
          </div>

        </div>
      </article>

      <article className="price" id="price">
        <div>

          <div>
            <h1><span>소상공인 소자본창업</span>을 위한<br />합리적인 비용 제시</h1>
            <p>과도한 초기 투자 없이 안정적으로 창업을 시작해보세요</p>
          </div>
          
          <div className="mo">
            <Image src="/images/비용_mo.png" alt="비용" width={1000} height={2000} quality={100} />
          </div>
          <div className="pc">
            <Image src="/images/비용_pc.png" alt="비용" width={800} height={1098} quality={100} />
          </div>

          <div>
            <Image src="/icons/arrow_blue.png" alt="화살표" width={59} height={140} />
          </div>

        </div>
      </article>

      <div className="inquire" id="inquire">
        <div>
          <h2>자세한 사항은<br />상담문의!</h2>
        </div>
        <InquireForm />
      </div>

    </>
  );
}
