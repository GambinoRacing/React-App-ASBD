import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import Meteorology from '../../images/meteorology.jpg';
import synoptichni from '../../images/synoptichni.jpg';
import klimatichni from '../../images/klimatichni.jpg';



export default class Weather extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="hello">
              Сектор Метеорология
            </p>
            <img src={Meteorology} className="Meteorology" alt="Meteorology" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <br />
            <p>Сектор Метеорология на Национален Институт по Метеорология и Хидрология - филиал Пловдив ръководи методически мрежа от 40 метеорологични станции разположени на територията на областите Пловдив, Стара Загора, Смолян, Кърджали, Ямбол, Сливен и Пазарджик. В сектора се извършва анализ и систематизиране на получените от метеорологичната мрежа данни за нуждите на климатични разработки, оперативни нужди, както и за обслужване на широк спектър от потребители на информация от всички сфери на икономика. В състава на сектора са включени високо квалифицирани научни сътрудници, експерти и специалисти, извършващи редица  експертни дейности и осъществяващи контакти с всички държавни институции и редица юредически лица ползващи услугите на НИМХ-БАН, филиал Пловдив
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="basicActivities">Експертизи на метеорологичната обстановка касаещи прокуратура, съд, застрахователни институции.
            Климатични оценки.</p>
            <p className="basicActivities">Организации за които сектор Метеорология е извършвал услуги през 2008 година:</p>
            <ul>
              <li>EVN - България електроразпределение АД</li>
              <li>Петрол АД</li>
              <li>A.T.E.S.E.A.E.</li>
              <li>"ЕКО - България" ЕАД</li>
              <li>Денил АД</li>
              <li>"Булсафио" ЕООД</li>
              <li>"Експрес - ЕГ" ООД</li>
              <li>НЕК ЕАД кл. Хидроелинвест Белово</li>
              <li>"Международен панаир Пловдив"АД</li>
              <li>"ЕКОНТ ЕКСПРЕС" ООД</li>
              <li>"Напоителни системи" ЕАД</li>
              <li>Държавно лесничейство - Карлово</li>
              <li>Хидрострой АД</li>
              <li>Община Девин, обл.Смолян</li>
              <li>ВиК ЕООД</li>
              <li>Елстрой ЕООД -Смолян</li>
              <li>Община Ракитово</li>
              <li>Община Девин</li>
              <li>ВПК"Напредък" гр.Кричим</li>
              <li>"Ермакс" ООД</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p className="basicActivities">Филиал Пловдив обслужва 40 метеорологични станции</p>
            <p className="basicActivities">Синоптични станции на територията на филиал Пловдив:</p>
            <img src={synoptichni} className="synoptichni" alt="synoptichni" />
            <br /> <br />
            <p className="basicActivities">Климатични станции:</p>
            <img src={klimatichni} className="synoptichni" alt="synoptichni" />
          </div>
        </div>
      </div>
    );
  }
}


