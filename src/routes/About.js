import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about__box'>
      <p className='greeting'>안녕하세요 영화 공방입니다.</p>
      <p className='desc'>
        안타깝게도 이곳 영화 공방은 영화를 제공해주지 않습니다.
      </p>
      <p className='detail_desc'>
        이 프로젝트는 <b>React</b>의 동작 원리에 대해 공부하기 위해 만든 정적 웹
        사이트입니다. 모바일 환경에서는 예쁘지 않은 디자인이지만 추후에 더
        완성도 높은 웹 어플리케이션으로 찾아뵙겠습니다. 조금만 기다려주세요! 😊
      </p>
      <p className='final'>페이지에 방문해주셔서 감사합니다.</p>
    </div>
  );
}

export default About;
