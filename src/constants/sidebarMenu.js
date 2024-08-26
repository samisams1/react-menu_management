import SettingsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import GroupOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const sidebarMenu = [
    {
        title: 'Systems',
        icon: HomeOutlinedIcon,
        path: '/',
    },
    {
        title: 'System Code',
        icon: AppsOutlinedIcon,
        path: '/team',
    },
    {
        title: 'Properties',
        icon: TrendingUpOutlinedIcon,
        path: '/contacts',
    },
    {
        title: 'Menus',
        icon: TrendingUpOutlinedIcon,
        path: '/invoices',
    },
    {
        title: 'API List',
        icon: GroupOutlinedIcon,
        path: '/form',
    },
    {
        title: 'User & Group',
        icon: GroupOutlinedIcon,
        path: '/form',
    },
    {
        title: 'Competition',
        icon: SettingsOutlinedIcon,
        path: '/calendar',
    }
]

