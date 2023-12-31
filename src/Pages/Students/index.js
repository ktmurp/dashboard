import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

function Students() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    
    useEffect(() => {
        setLoading(true)
        getInventory().then(res=>{
            setDataSource(res.products)
        })
    }, [])
    
    return (<div>
    <Space>
    <Typography.Title level={4}>INDIVIDUAL STUDENT STATS</Typography.Title>
    </Space>
    <br/>
    <Typography.Text>Use the dropdowns to select a puzzle and sorting pattern. *Once the correct data is added, there will be the option to sort by ascending or descending order of any of the categories.</Typography.Text>
    <Table 
    columns={[
        {
        title: "Name",
        dataIndex: 'title',
        },
        {
            title: "Active Time",
            dataIndex: 'discountPercentage',
        },
        {
            title: "# of Solved Puzzles",
            dataIndex: 'price',
        },
        {
            title: "# of Attempted Puzzles",
            dataIndex: 'rating',
        },
        {
            title: "# of Events",
            dataIndex: 'stock',
        },
        {
            title: "Completion Time",
            dataIndex: 'discountPercentage',
        },
        {
            title: "Percent Incorrect",
            dataIndex: 'discountPercentage',
        },
        {
            title: "Perfect Counter",
            dataIndex: 'discountPercentage',
        },
    ]}
    dataSource={dataSource}
    className="alternate-row-colors"
    ></Table>
    </div>
    );
}
export default Students;