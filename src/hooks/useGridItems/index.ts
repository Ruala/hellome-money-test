import { IGridItem } from "interfaces/gridItem";

import intl from "intl";

import Trade from "icons/Trade";
import Security from "icons/Security";
import Solution from "icons/Solution";
import Banking from "icons/Banking";
import Growth from "icons/Growth";

const useGridItems = () => {
  const { homeGrid, businessGrid } = intl;

  const iconsHome = [Security, Trade];
  const iconsBusiness = [Solution, Banking, Growth];

  const homeGridList: IGridItem[] = homeGrid.map((item, index) => ({
    ...item,
    icon: iconsHome[index],
  }));

  const businessGridList: IGridItem[] = businessGrid.map((item, index) => ({
    ...item,
    icon: iconsBusiness[index],
  }));

  return {
    homeGridList,
    businessGridList,
  };
};

export default useGridItems;
