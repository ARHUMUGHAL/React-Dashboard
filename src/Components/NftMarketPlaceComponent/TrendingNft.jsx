import React from "react";
import { Flex2 } from "../../CustomClasses/flex1";
import CardOne from "./CardOne";
import ProfilePicOne from "../../Assets/Prfimg1.png";
import ProfilePicTwo from "../../Assets/Prfimg2.png";
import ProfilePicThree from "../../Assets/prfimg.jpg";

const TrendingNft = ({heading , top , interest1 ,interest2 ,interest3,interest4,Image1,Image2,Image3,name,investment,nickname}) => {
  return (
    <div className={`absolute ${top} w-[100%] mb-5 mx-5`}>
      <div className={`${Flex2} items-center`}>
        <h2 className={`text-[25px] font-bold component-text`}>
          {heading}
        </h2>
        <div
          className={`w-[35%] relative right-[80px] ${Flex2} component-text`}
        >
          <p>{interest1}</p>
          <p>{interest2}</p>
          <p>{interest3}</p>
          <p>{interest4}</p>
        </div>
      </div>
      <div className={`w-[95%] ${Flex2}`}>
        <CardOne
          prfImg={ProfilePicOne}
          prfImg2={ProfilePicTwo}
          prfImg3={ProfilePicThree}
          investment={investment}
          name={name}
          nickname={nickname}
          image={Image1}
        />
        <CardOne
          prfImg={ProfilePicOne}
          prfImg2={ProfilePicTwo}
          prfImg3={ProfilePicThree}
          investment={investment}
          name={name}
          nickname={nickname}
          image={Image2}
        />
        <CardOne
          prfImg={ProfilePicOne}
          prfImg2={ProfilePicTwo}
          prfImg3={ProfilePicThree}
          investment={investment}
          name={name}
          nickname={nickname}
          image={Image3}
        />
      </div>
    </div>
  );
};

export default TrendingNft;
