import { IconType } from 'react-icons/lib';
import { GrTechnology } from 'react-icons/gr';
import {
  MdOutlineScience,
  MdOutlineSportsSoccer,
  MdLocalMovies,
  MdOutlineScreenshotMonitor,
  MdEmojiEvents,
  MdSportsCricket,
} from 'react-icons/md';
import {
  IoNewspaperOutline,
  IoPeople,
  IoTennisballOutline,
} from 'react-icons/io5';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import {
  FaClipboardUser,
  FaWarehouse,
  FaArrowTrendUp,
  FaMoneyCheckDollar,
  FaSpaceAwesome,
} from 'react-icons/fa6';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { TbReportMoney, TbReportSearch } from 'react-icons/tb';
import { IoIosPeople, IoIosFootball } from 'react-icons/io';
import { FaMusic, FaBasketballBall } from 'react-icons/fa';
import { GiMaterialsScience, GiRun } from 'react-icons/gi';

import {
  PiBriefcaseDuotone,
  PiBrowserDuotone,
  PiCalendarDuotone,
  PiCurrencyCircleDollarDuotone,
  PiFolderNotchDuotone,
  PiShapesDuotone,
} from 'react-icons/pi';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const mainMenuItems: MenuItemsType[] = [
  {
    id: '1',
    name: 'MENU_GENERAL',
    title: 'MENU_GENERAL',
    icon: PiBrowserDuotone,
    menuItems: [
      {
        name: 'MENU_GENERAL_WORLD_NEWS',
        href: '',
        icon: IoNewspaperOutline,
      },
      {
        name: 'MENU_GENERAL_POLITICS',
        href: '',
        icon: IoIosPeople,
      },
      {
        name: 'MENU_GENERAL_SOCIAL_ISSUES',
        href: '',
        icon: AiOutlineIssuesClose,
      },
      {
        name: 'MENU_GENERAL_JOB_BOARD',
        href: '',
        icon: FaClipboardUser,
      },
      {
        name: 'MENU_GENERAL_WEATHER_UPDATES',
        href: '',
        icon: TiWeatherPartlySunny,
      },
    ],
  },
  {
    id: '2',
    name: 'MENU_BUSINESS',
    title: 'MENU_BUSINESS',
    icon: PiBriefcaseDuotone,
    menuItems: [
      {
        name: 'MENU_BUSINESS_FINANCE',
        href: '',
        icon: TbReportMoney,
      },
      {
        name: 'MENU_BUSINESS_STARTUPS',
        href: '',
        icon: FaWarehouse,
      },
      {
        name: 'MENU_BUSINESS_MARKET_TRENDS',
        href: '',
        icon: FaArrowTrendUp,
      },
      {
        name: 'MENU_BUSINESS_INDUSTRY_ANALYSIS',
        href: '',
        icon: TbReportSearch,
      },
      {
        name: 'MENU_BUSINESS_INVESTMENTS',
        href: '',
        icon: FaMoneyCheckDollar,
      },
    ],
  },
  {
    id: '3',
    name: 'MENU_ENTERTAINMENT',
    title: 'MENU_ENTERTAINMENT',
    icon: PiShapesDuotone,
    menuItems: [
      {
        name: 'MENU_ENTERTAINMENT_MOVIES',
        href: '',
        icon: MdLocalMovies,
      },
      {
        name: 'MENU_ENTERTAINMENT_MUSIC',
        href: '',
        icon: FaMusic,
      },
      {
        name: 'MENU_ENTERTAINMENT_TV_SHOWS',
        href: '',
        icon: MdOutlineScreenshotMonitor,
      },
      {
        name: 'MENU_ENTERTAINMENT_CELEBRITIES',
        href: '',
        icon: IoPeople,
      },
      {
        name: 'MENU_ENTERTAINMENT_EVENTS',
        href: '',
        icon: MdEmojiEvents,
      },
    ],
  },
  {
    id: '4',
    name: 'MENU_SCIENCE',
    title: 'MENU_SCIENCE',
    icon: MdOutlineScience,
    menuItems: [
      {
        name: 'MENU_SCIENCE_SPACE_EXPLORATION',
        href: '',
        icon: FaSpaceAwesome,
      },
      {
        name: 'MENU_SCIENCE_BIOLOGY',
        href: '',
        icon: MdOutlineScience,
      },
      {
        name: 'MENU_SCIENCE_PHYSICS',
        href: '',
        icon: PiBriefcaseDuotone,
      },
      {
        name: 'MENU_SCIENCE_ENVIRONMENTAL_SCIENCE',
        href: '',
        icon: PiShapesDuotone,
      },
      {
        name: 'MENU_SCIENCE_SCIENTIFIC_DISCOVERIES',
        href: '',
        icon: GiMaterialsScience,
      },
    ],
  },
  {
    id: '5',
    name: 'MENU_TECHNOLOGY',
    title: 'MENU_TECHNOLOGY',
    icon: GrTechnology,
    menuItems: [
      {
        name: 'MENU_TECHNOLOGY_GADGETS',
        href: '',
        icon: PiFolderNotchDuotone,
      },
      {
        name: 'MENU_TECHNOLOGY_SOFTWARE_DEVELOPMENT',
        href: '',
        icon: PiCalendarDuotone,
      },
      {
        name: 'MENU_TECHNOLOGY_ARTIFICIAL_INTELLIGENCE',
        href: '',
        icon: PiBriefcaseDuotone,
      },
      {
        name: 'MENU_TECHNOLOGY_CYBERSECURITY',
        href: '',
        icon: PiShapesDuotone,
      },
      {
        name: 'MENU_TECHNOLOGY_EVENTS',
        href: '',
        icon: PiCurrencyCircleDollarDuotone,
      },
    ],
  },
  {
    id: '6',
    name: 'MENU_SPORTS',
    title: 'MENU_SPORTS',
    icon: MdOutlineSportsSoccer,
    menuItems: [
      {
        name: 'MENU_SPORTS_FOOTBALL',
        href: '',
        icon: IoIosFootball,
      },
      {
        name: 'MENU_SPORTS_BASKETBALL',
        href: '',
        icon: FaBasketballBall,
      },
      {
        name: 'MENU_SPORTS_TENNIS',
        href: '',
        icon: IoTennisballOutline,
      },
      {
        name: 'MENU_SPORTS_CRICKET',
        href: '',
        icon: MdSportsCricket,
      },
      {
        name: 'MENU_SPORTS_ATHLETICS',
        href: '',
        icon: GiRun,
      },
    ],
  },
];
