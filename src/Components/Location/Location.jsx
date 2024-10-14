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
              Sohil turar-joy majmuasi Samarqand shahrining rivojlangan va strategik jihatdan muhim qismida joylashgan. Majmua shahar markaziga yaqin bo‘lib, asosiy transport yo‘llariga oson kirish imkoniyatini taqdim etadi. </p>
            <p className="location_text">
              Ushbu joy shahar shovqin-suronidan xoli, osoyishta va ekologik jihatdan toza muhitda joylashgan. Bu yerda yashovchilar tabiatning go‘zalligidan bahramand bo‘lib, tinch va farovon hayot kechirish imkoniyatiga ega bo‘lishadi.</p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              Sohil - Samarqandda sarmoya kiritish uchun juda foydali imkoniyat sifatida ajralib turadi. Bir necha yil ichida uy-joylar narxining oshishi kutilmoqda, bu esa investorlar uchun qo'shimcha foyda manbai bo'lishi mumkin. Bu loyiha orqali nafaqat qulay yashash joyiga ega bo'lish, balki muvaffaqiyatli sarmoya qilish imkoniyatini ham qo'lga kiritasiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
