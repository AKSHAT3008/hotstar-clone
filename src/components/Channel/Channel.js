import "./Channel.css";

const Channel = () => {
  const genres = [
    {
      id: 1,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9946/1429946-h-e85beaad8fd9",
    },
    {
      id: 2,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2046/1102046-h-cc9479e5f2a0",
    },
    {
      id: 3,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1119/661119-h",
    },
    {
      id: 4,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6970/956970-h",
    },
    {
      id: 5,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1121/661121-h",
    },
    {
      id: 6,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h",
    },
    {
      id: 7,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1137/661137-h",
    },
    {
      id: 8,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8774/1308774-h-524cdf69effa",
    },
    {
      id: 9,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1103/661103-h",
    },
    {
      id: 10,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6620/776620-h",
    },
    {
      id: 11,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8966/1268966-h-988295dc6dd8",
    },
    {
      id: 12,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1138/661138-h",
    },
    {
      id: 13,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1105/661105-h",
    },
    {
      id: 14,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1117/661117-h",
    },
    {
      id: 15,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1116/661116-h",
    },
    {
      id: 16,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1100/661100-h",
    },
    {
      id: 17,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h",
    },
    {
      id: 18,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1102/661102-h",
    },
    {
      id: 19,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6373/836373-h",
    },
    {
      id: 20,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1112/661112-h",
    },
    {
      id: 21,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3048/1293048-h-ae12f43d4d9e",
    },
    {
      id: 22,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1167/661167-h",
    },
    {
      id: 23,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1168/661168-h",
    },
    {
      id: 24,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1180/661180-h",
    },
    {
      id: 25,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1174/661174-h",
    },
    {
      id: 26,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1171/661171-h",
    },
    {
      id: 27,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1178/661178-h",
    },
    {
      id: 28,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1173/661173-h",
    },
    {
      id: 29,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1176/661176-h",
    },
    {
      id: 30,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1177/661177-h",
    },
    {
      id: 31,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1170/661170-h",
    },
    {
      id: 32,
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1172/661172-h",
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
      </div>
    );
  });

  return (
    <div className="outer-container">
      <div className="p-4"></div>
      <div class="inner-container">
        <h3 className="text-color-white">Channel</h3>
        <div className="row">
          {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
          <img
            className="d-block w-100 rounded"
            alt="test.png"
          />
          <div class="centered">Centered</div>
        </div>         */}
          {list}
        </div>
      </div>
    </div>
  );
};

export default Channel;
