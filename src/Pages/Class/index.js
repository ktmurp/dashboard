import { Card, Space, Statistic, Typography, Table } from "antd";
import { ThunderboltOutlined, CheckCircleOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { getRevenue, getOrders, getEvents, getCustomers } from "../../API";
//import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Class() {
    const [orders, setOrders] = useState(0)
    const [events, setEvents] = useState(0)
    const [customers, setCustomers] = useState(0)
    const [revenue, setRevenue] = useState(0)

    useEffect(() =>{
      getOrders().then((res)=>{
        setOrders(res.total);
        setRevenue(res.discountedTotal)
      });
      getEvents().then((res)=>{
        setEvents(res.total);
      });
      getCustomers().then((res)=>{
        setCustomers(res.total);
      });
    }, [])

    return (<div>
        <Typography.Title level={4}>CLASS OVERVIEW</Typography.Title>
        <Typography>Summary statistics about the whole class.</Typography>
        <Space>
        <DashboardCard icon={<UserOutlined 
        style={{
          color: "rgba(38, 34, 97, 255)",
          backgroundColor: "rgba(224, 222, 255)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
        />} title={"Total Users"} value={orders} />
        <DashboardCard icon={<ClockCircleOutlined 
        style={{
          color: "rgba(139, 132, 232, 255)",
          backgroundColor: "rgba(219, 217, 252)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
        />} title={"Total Minutes Spent"} value={customers} />
        <DashboardCard icon={<ThunderboltOutlined 
        style={{
          color: "rgba(78, 208, 237, 255)",
          backgroundColor: "rgba(192, 241, 252)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
        />} title={"Total Events"} value={events} />
        <DashboardCard icon={<CheckCircleOutlined 
        style={{
          color: "rgba(40, 173, 203, 255)",
          backgroundColor: "rgba(192, 241, 252)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
        />} title={"Total Accuracy"} value={revenue} />
        </Space>    
        <Typography.Title level={4}>EVENT TRACKER</Typography.Title>
        <Typography>The number of "events" done by each student, where an "event" in this puzzle is clicking a question or making a guess.</Typography>
        <Space>
        <EventTracker />
        </Space>
        <Typography.Title level={4}>ATTEMPTS TRACKER</Typography.Title>
        <Typography>The number of correct and incorrect attempts taken by each student, where a correct "attempt" is a correct quadrilateral guess.</Typography>
        <Space>
        <AttemptsTracker />
        </Space>
        <Typography.Title level={4}>PERFECT COUNTER</Typography.Title>
        <Typography>The number of puzzles completed perfectly on a student's first try. *Student's names will go here instead of filler text</Typography>
        <Space>
        <PerfectCounter />
        </Space>
        </div>
    );
    }

    function DashboardCard({title, value, icon}) {
    return (
            <Card>
                {icon}
                <Statistic title={title} value={value}/>
            </Card>
    )
}

function EventTracker() {

    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets:[],
    });

    useEffect (() => {
        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
              return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
              return cart.discountedTotal;
            });
            
            const dataSource = {
                labels,
                datasets: [
                  {
                    label: 'Events',
                    data: data,
                    backgroundColor: "rgba(38, 34, 97, 255)",
                  },
                ],
              };

            setRevenueData(dataSource);
        });
    }, []);
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
        },
      };

      return (
        <div className="chart-container">
          <Bar options={options} data={revenueData} />
        </div>
      );
}

function AttemptsTracker() {

    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets:[],
    });
  
    useEffect (() => {
        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
              return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
              return cart.discountedTotal;
            });
            
            const dataSource = {
                labels,
                datasets: [
                  {
                    label: 'Correct Attempts',
                    data: data,
                    backgroundColor: "rgba(38, 34, 97, 255)",
                  },
                  {
                    label: 'Incorrect Attempts',
                    data: data,
                    backgroundColor: "rgba(40, 173, 203, 255)",
                  },
                ],
              };
  
            setRevenueData(dataSource);
        });
    }, []);
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
        },
      };
  
      return (
        <div className="chart-container">
          <Bar options={options} data={revenueData} />
        </div>
      );  
  }

  function PerfectCounter(){
    const [dataSource, setdataSource] = useState([]);
    const [loading, setloading] = useState(false);
  
    useEffect(() => {
        setloading(true);
        getOrders().then((res)=>{
        setdataSource(res.products);
        setloading(false);
        });
    }, [])
  
    return (
    <>
      <Table
    columns={[
        {
        title: "Name",
        dataIndex: "title",
        width: 420,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
        },
    ]}
    loading={loading}
    dataSource={dataSource}
    pagination={false}
    ></Table>
    </>
    );
  }

export default Class;