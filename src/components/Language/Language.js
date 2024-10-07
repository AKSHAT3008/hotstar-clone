import "./Language.css";

const Language = () => {
  const genres = [
    {
      id: 1,
      elanguage: "odia",
      language: "ଓଡ଼ିଆ",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5444/1265444-h-d76f7b771fe4",
    },
    {
      id: 2,
      elanguage: "Hindi",
      language: "हिन्दी",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2155/1272155-h-53b5cac1c094",
    },
    {
      id: 3,
      elanguage: "Bengali",
      language: "বাংলা",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2156/1272156-h-069fc6816144",
    },
    {
      id: 4,
      elanguage: "Telugu",
      language: "తెలుగు",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1381/1121381-h-6c23f89e0ba2",
    },
    {
      id: 5,
      elanguage: "Malayalam",
      language: "മലയാളം",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2159/1272159-h-54c3e895c74e",
    },
    {
      id: 6,
      elanguage: "Tamil",
      language: "தமிழ்",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2160/1272160-h-d078165f23bb",
    },
    {
      id: 7,
      elanguage: "Marathi",
      language: "मराठी",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2157/1272157-h-e0d5706adae2",
    },
    {
      id: 8,
      elanguage: "English",
      language: "अंग्रेज़ी",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2158/1272158-h-aa2d20facda2",
    },
    {
      id: 9,
      elanguage: "Kannada",
      language: "ಕಂದ",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/LANGUAGE/5711/5711/5711-h",
    },
    {
      id: 10,
      elanguage: "Korean",
      language: "한국어",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7339/1307339-h-303abe8ea3d6",
    },
    {
      id: 11,
      elanguage: "Japanese",
      language: "日本",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/848/1330848-h-4ede10b7d754",
    },
  ];
  const list = [];

  genres.forEach((genre) => {
    list.push(
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
        <img
          className="d-block w-100 rounded"
          src={genre.image}
          alt="test.png"
        />
        <div class="centered">
          {genre.language} <br />
          {genre.elanguage}
        </div>
      </div>
    );
  });

  return (
    <div className="outer-container">
      <div className="p-4"></div>
      <div class="inner-container">
        <h3 className="text-color-white">Language</h3>
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Language;
