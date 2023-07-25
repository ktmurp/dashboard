import { AppstoreOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate()
    return <div className="SideMenu">
        <Menu 
        mode="inline"
        onClick={(item) => {
            //item.key
            navigate(item.key);
        }}
        items={[
            {
            label: "Class",
            icon: <TeamOutlined />,
            key: '/class'
            },
            {
                label: "Students",
                icon: <UserOutlined />,
                key: '/students'
            },
            {
                label: "Puzzles",
                icon: <AppstoreOutlined />,
                key: '/',
                children: [
                    { label: "Quadrilaterals", key: "/quadrilaterals"},
                ],
                },
        ]}>

        </Menu>

    </div>
}
export default SideMenu;