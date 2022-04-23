import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./RoadMap.css";
import RoadMapItem from "./RoadMapItem/RoadMapItem";

const RoadMap = () => {
  //screen width
  const [width, setWidth] = useState(0);
  // to show path
  const [showSvg, setShowSvg] = useState(false);
  // section ref
  const ref = useRef();
  // path animations
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 15,
      },
    },
  };
  // add event listeners on mount
  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    document.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", () => {
      setWidth(document.documentElement.clientWidth);
    });
  }, []);

  // to acivate the animation
  const scrollHandler = () => {
    const oberserver = new IntersectionObserver((e) => {
      if (e[0].intersectionRect.height >= 100) {
        setShowSvg(true);
      }
    });
    oberserver.observe(ref?.current);
  };

  const svgHeightHandler = (e) => {
    console.log(e.target.height.baseVal.value);
    console.log("sfdfsd");
  };

  return (
    <section ref={ref} className="roadmap__section section__padding">
      <div className="roadmap__title">
        <h3>Roadmap</h3>
      </div>

      {/*  the line svg  */}
      {(showSvg && width > 1072) || width < 791 ? (
        <div className="svgContener">
          <svg
            strokeWidth={width <= 486 ? "4px" : "6px"}
            viewBox="0 0 52 2047"
            fill="none"
          >
            <motion.path
              initial="hidden"
              animate="visible"
              variants={pathVariants}
              d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049"
              stroke="black"
            />
          </svg>
        </div>
      ) : null}
      <span className="roadMapItems__contener">
        <div className="roadMapItem__div-right">
          <RoadMapItem title="Grand Opening" />
          <RoadMapItem title="Early Access" />
          <RoadMapItem title="Holders Ranking" />
        </div>
        <div className="roadMapItem__div-left">
          <RoadMapItem title="Great Benefits" />
          <RoadMapItem title="New Merch" />
        </div>
      </span>
    </section>
  );
};

export default RoadMap;
