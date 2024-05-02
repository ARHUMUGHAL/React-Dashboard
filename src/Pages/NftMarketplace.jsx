import React from "react";
import Layout from "../Components/Layout";
import { Flex2, Flex1 } from "../CustomClasses/flex1";
import Discover from "../Components/NftMarketPlaceComponent/Discover";
import TrendingNft from "../Components/NftMarketPlaceComponent/TrendingNft";
import Image1 from "../Assets/Component 1.png";
import Image2 from "../Assets/Component 2.png";
import Image3 from "../Assets/Component 3.png";
import Image4 from "../Assets/Component 4.png";
import Image5 from "../Assets/Component 5.png";
import Image6 from "../Assets/Component 6.png";
import TopCreators from "../Components/NftMarketPlaceComponent/TopCreators";
import History from "../Components/NftMarketPlaceComponent/History";

const NftMarketplace = () => {
  return (
    <Layout>
      <div className={`relative top-[140px] w-[100%] h-[170vh] ${Flex2}`}>
        <div className={` relative ${Flex1} flex-col w-[62%]`}>
          <Discover />
          <TrendingNft
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            top="top-[32%]"
            heading="Trending NFTs"
            interest1="Art"
            interest2="Music"
            interest3="Collectibles"
            interest4="Sports"
            name="Abstract Colors"
            investment="Current Bid: 0.91 ETH"
            nickname="By Esthera Jackson"
          />
          <TrendingNft
            Image1={Image4}
            Image2={Image5}
            Image3={Image6}
            top="top-[67%]"
            heading="Recently Added"
            name="Swipe Circles"
            investment="Current Bid: 12.1 ETH"
            nickname="By Peter Will"
          />
        </div>
        <div className="w-[35%]">
          <TopCreators/>
          <History/>
        </div>
      </div>
    </Layout>
  );
};

export default NftMarketplace;
