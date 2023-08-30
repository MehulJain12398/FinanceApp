import React, { useMemo } from 'react'
import { AreaChart,LineChart,BarChart,Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import DashboardBox from "@/components/DashboardBox"
import {useGetKpisQuery} from "@/state/api"
import { useTheme } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';

type Props = {}

const Row1 = (props: Props) => {
  const {palette} = useTheme()
  const {data} = useGetKpisQuery()

  const revenueExpenses = useMemo(() => {
return(
  data && 
  data[0].monthlyData.map(({month,revenue,expenses}) => {
    return{
      name:month.substring(0,3),
      revenue:revenue,
      expenses:expenses
    }
  })
)
  },[data]) 

  const revenueProfit = useMemo(() => {
    return(
      data && 
      data[0].monthlyData.map(({month,revenue,expenses}) => {
        return{
          name:month.substring(0,3),
          revenue:revenue,
          profit:(revenue - expenses).toFixed(2)
        }
      })
    )
      },[data]) 

      const revenueByMonth = useMemo(() => {
        return(
          data && 
          data[0].monthlyData.map(({month,revenue}) => {
            return{
              name:month.substring(0,3),
              revenue:revenue,
              
            }
          })
        )
          },[data]) 
  return (
      <>
      <DashboardBox bgcolor="#fff" gridArea="a">
        <BoxHeader 
        title='Revenue and Expenses'
        subtitle="top line represents revenue and bottom line is expenses"
        sideText='+4%' />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1" >
            <stop
            offset="5%"
            stopColor={palette.primary[300]}
            stopOpacity={0.5} />
             <stop
            offset="95%"
            stopColor={palette.primary[300]}
            stopOpacity={0.0} />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1" >
            <stop
            offset="5%"
            stopColor={palette.primary[300]}
            stopOpacity={0.5} />
             <stop
            offset="95%"
            stopColor={palette.primary[300]}
            stopOpacity={0.0} />
          </linearGradient>
        </defs>
          <XAxis dataKey="name" tickLine={false} style={{fontSize:"0.8rem"}}/>
          <YAxis
          tickLine={false} 
          style={{fontSize:"0.7rem"}}
          axisLine={{strokeWidth:"0"}}
          domain={[8000,24000]}
          />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} dot={true} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="expenses" stroke={palette.primary.main}  dot={true} fillOpacity={1} fill="url(#colorExpenses)" />

        </AreaChart>
      </ResponsiveContainer></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="b">
      
    <BoxHeader 
        title='Revenue and Profit'
        subtitle="top line represents revenue and bottom line is profit"
        sideText='+4%' />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={revenueProfit}
          margin={{
            top: 15,
            right: 10,
            left: -10,
            bottom: 60,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{fontSize:"0.8rem"}}/>
          <YAxis
          yAxisId="left"
          tickLine={false} 
          style={{fontSize:"0.7rem"}}
          axisLine={false}
          // domain={[8000,24000]}
          />
            <YAxis
            yAxisId="right"
            orientation='right'
          tickLine={false} 
          style={{fontSize:"0.7rem"}}
          axisLine={false}
          // domain={[8000,24000]}
          />
          <Tooltip />
          <Legend height={20} wrapperStyle={{
            margin:"0 0 10px 0"
          }} />
          <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]}  />
          <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />

        </LineChart>
      </ResponsiveContainer></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="c">
    <BoxHeader 
        title='Revenue by Month'
        subtitle="bar stack are mentioned as revenue by month"
        sideText='+4%' />
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
           width={500}
           height={400}
          data={revenueByMonth}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
                  <defs>
          <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1" >
            <stop
            offset="5%"
            stopColor={palette.primary[300]}
            stopOpacity={0.8} />
             <stop
            offset="95%"
            stopColor={palette.primary[300]}
            stopOpacity={0.0} />
          </linearGradient>

        </defs>
          <CartesianGrid vertical={false}  stroke={palette.grey[800]}/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} style={{fontSize:"0.8rem"}}/>
          <YAxis
            tickLine={false} 
            axisLine={false}
            style={{fontSize:"0.7rem"}}
            
           
          />
          <Tooltip />
         
          <Bar dataKey="revenue"  stroke={palette.primary.main} fillOpacity={1} fill="url(#revenue)" />
        
        </BarChart>
      </ResponsiveContainer></DashboardBox>
      </>
    
  )
}

export default Row1 