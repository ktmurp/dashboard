import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";

function AppHeader() {
    return <div className="AppHeader">
        
        <Image 
        width={300}
        src="https://education.mit.edu/wp-content/uploads/2018/06/logoonwhite.png">
        </Image>
        <Typography.Title style={{fontSize: 24}}>Dashboard Prototype</Typography.Title>
        <Space>
        <Badge count={7} dot>
            <MailOutlined style={{fontSize: 24}}/>
        </Badge>
        <Badge count={2}>
            <BellOutlined style={{fontSize: 24}}/>
        </Badge>
        </Space>
    </div>
}
export default AppHeader;