import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import marica from '../../images/marica.jpg';
import kolichestvo from '../../images/kolichestvo.png';
import godishna from '../../images/godishna.png';
import hydra from '../../images/hydra.png';
import grafika from '../../images/grafika.png';
import hydro from '../../images/hydro.jpg';


export default class Hydro extends Component {


  render() {
    return (
      <div className="container">


        <div className="row">
          <div className="col-md-12">
            <p className="hello">
              Сектор Хидрология
            </p>
            <img src={marica} className="marica" alt="marica" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <br />
            <p className="basicActivities">Значение на водата за явленията и процесите, развиващи се на земята:</p>
            <p>Водата е едно от най-разпространените вещества на нашата планета.Тя участва във всички физични,химични и биологични процеси, развиващи се на земята.Особено голямо е значението
              на водата за появата и развитието на живота върху земята. Всички основни явления на живота се извършват във водната среда. Водата е мощна сила, която крие неизчерпаема енергия, но не винаги
              нейната енергия и присъствие са полезни за човека. Често пъти тя предизвиква наводнения, с които се нарушава естественото развитие на живота, залива градове и села, разрушава
              постройки, унищожава земеделски култури и големи ценности и взема много жертви.
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="basicActivities">Задачи на Хидрологията:</p>
            <p>Всичко това налага необходимостта от непрекъснато разширяване на изследванията и наблюденията върху водните изтоници. Постигнатите резултати и нарастващите нужди от водата, отнасящи се към тази област, да се обединятв самостоятелна научна дисциплина- Хидрология. Следователно хидрологията се занимава с изучаването на природните води, на явленията и процесите, развиващи се в тях, и закономерностите, изразяващи причинноследствените им връзки. Предмет за изучаване на хидрологията са водните обекти- океани, морета,реки,езера,блата,ледници,запасите на вода във вид на снежна покривка и подземни води.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={hydra} className="kolichestvo" alt="hydra" />
          </div>
          <div className="col-md-4">
            <img src={godishna} className="kolichestvo" alt="godishna" />
          </div>
          <div className="col-md-4">
            <img src={kolichestvo} className="kolichestvo" alt="kolichestvo" />
          </div>
        </div>



        <div className="row">
          <div className="col-md-6">
            <br/>
            <br/>
            <p className="basicActivities">Сектор "Хидрология" извършва услуги със следната режимна информация :</p>
            <ul>
              <span className="basicActivities">Среднодневни:</span>
              <li> среднодневни водни стоежи (нива); </li>
              <li> среднодневни водни количества.</li>
              <br />
              <span className="basicActivities">Средномесечни:</span>
              <li>  средномесечни водни стоежи (нива);</li>
              <li> средномесечни водни количества;</li>
              <li>  минимални месечни водни количества;</li>
              <li>  максимални месечни водни количества;</li>
              <li>средномесечни наносни количества.</li>
              <br />
              <span className="basicActivities">Годишни:</span>
              <li> средногодишни водни стоежи (нива);</li>
              <li> средногодишни водни количества;</li>
              <li> минимални годишни водни количества;</li>
              <li> максимални годишни водни количества;</li>
              <li>средногодишни наносни количества.</li>
            </ul>
          </div>

          <div className="col-md-6">
          <br/>
            <br/>
            <img src={grafika} className="srednodnevni" alt="srednodnevni" />
          </div>
        </div>
        <div className="row">
                    <div className="col-md-12">
                        <br />
                        <p className="paragraph">Хидроложки станции на територията на филиал Пловдив</p>
                        <img src={hydro} className="hydro" alt="Hydro" />
                    </div>
                </div>
      </div>

      
    );
  }
}


