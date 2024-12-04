import React, { useState, Component} from "react";
import Faded from "../effect/Faded";
import '../css/Page/info.css';

import airBoardImg from '../img/Page/info/AirBoard.png';
import yoriJoriImg from '../img/Page/info/YoriJori.png';
import gitImg from '../img/Page/info/github.png';
import testImg from '../img/Page/info/Test.png';
import gitHoverImg from '../img/Page/info/github_hover.png';
import logoImg from '../img/Page/info/logo.PNG';

function MyInfo(props) {
    const [linkIndex, setLinkIndex] = useState(0);
    function renderItem(imgLink, gitLink, title,desc,tech,idx) {
        return (<div className="info-item">
                  <a href="#/infoPage" style={{backgroundImage:`url(${imgLink})`}} className="info-image"/>
                  <a href="#/infoPage" className="info-title">{title}</a>
                  <div className="info-desc">{desc}</div>
                  <div className="info-tech"><pre>{tech}</pre></div>
                  <a href={gitLink} onMouseOver={() => setLinkIndex(idx) }
                           onMouseOut={() => setLinkIndex(0)} style={linkIndex===idx? {backgroundImage:`url(${gitHoverImg})`}:{backgroundImage:`url(${gitImg})`}} className="info-link"/>
              </div>);
    }
    return (
        <Faded>
            <div className="info-wrap">
                  <div className="info-container">
                      <div className="info-class">Team Project</div>
                      {renderItem(airBoardImg,"https://github.com/rjsah5676/Capstone-Design-2021-1-","캠 필기 웹 화상 회의 서비스 [AirBoard]",
                          "웹 캠을 통한 필기 기능을 제공하는 화상 회의 플랫폼입니다.",
                          "Javascript   PeerJS   OpenCV   NodeJS   MongoDB",1)}
                      {renderItem(testImg,"https://github.com/rjsah5676","TEST","테스트 중","T  T  T  T",2)}
                      <div className="info-class">Personal Project</div>
                      {renderItem(yoriJoriImg,"https://github.com/rjsah5676/WebProject","음식 레시피 공유 사이트 [요리조리]",
                          "음식 레시피를 공유하는 커뮤니티 웹 사이트입니다. 이용자들은 음식 레시피를 등록할 수 있고 자유롭게 음식에 대한 리뷰를 남길 수 있습니다.",
                          "React   NodeJS   Ajax   JQuery   MongoDB",3)}
                      {renderItem(logoImg,"https://github.com/rjsah5676/rjsah5676.github.io","[Gunmo's Dev Life]","React를 사용하여 만든 나를 소개하는 사이트입니다.","React Firebase NodeJS",4)}
                  </div>
              <div style={{height:'50px'}}></div>
            </div>
        </Faded>
    )
}

export default MyInfo;
