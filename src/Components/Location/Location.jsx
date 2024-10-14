/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/location.jpg";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card1" data-aos="fade-right" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Baraka turar-joy majmuasi Sirdaryo viloyatida, strategik ahamiyatga ega bo‘lgan hududda qurilmoqda. Majmua shahar markaziga yaqin joylashgan bo‘lib, asosiy transport yo‘llariga qulay kirish imkoniyatini taqdim etadi. </p>
            <p className="location_text">
              Shahar shovqinidan yiroq, ekologik jihatdan toza muhitda joylashgan bu majmua, yashovchilarga tinch va osoyishta hayot kechirish imkoniyatini beradi. Atrofda barcha zarur infratuzilmalar va xizmatlar mavjud.</p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              Baraka turar-joy majmuasi Sirdaryo viloyatida sarmoya kiritish uchun foydali imkoniyat sifatida ajralib turadi. Kelgusi yillarda uy-joylar narxining oshishi kutilmoqda, bu esa investorlar uchun qo'shimcha daromad manbai bo'lishi mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
