'use client';
import AppLayout from '@/components/AppLayout';
import { FiDollarSign, FiUsers, FiHeart, FiTrendingUp, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const STATS = [
    { label: 'Total Earnings', value: '$12,450', change: '+12.5%', isPositive: true, icon: FiDollarSign, color: 'text-green-500' },
    { label: 'Active Subscribers', value: '1,204', change: '+5.2%', isPositive: true, icon: FiUsers, color: 'text-blue-500' },
    { label: 'Total Likes', value: '45.2K', change: '-1.2%', isPositive: false, icon: FiHeart, color: 'text-red-500' },
    { label: 'Profile Views', value: '89.1K', change: '+24.3%', isPositive: true, icon: FiTrendingUp, color: 'text-purple-500' },
];

const RECENT_ACTIVITY = [
    { user: 'AlexM', action: 'subscribed to your profile', time: '2 mins ago', amount: '$15.00' },
    { user: 'SarahJ', action: 'liked your post', time: '15 mins ago', amount: '' },
    { user: 'MikeT', action: 'tipped you', time: '1 hour ago', amount: '$50.00' },
    { user: 'Anon24', action: 'unlocked a message', time: '3 hours ago', amount: '$10.00' },
];

const CHART_DATA = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
    { name: 'Jul', value: 7000 },
    { name: 'Aug', value: 6500 },
    { name: 'Sep', value: 8000 },
    { name: 'Oct', value: 7500 },
    { name: 'Nov', value: 9000 },
    { name: 'Dec', value: 10000 },
];

export default function AnalyticsPage() {
    return (
        <AppLayout>
            <div className="p-4 md:p-8 bg-neutral-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Creator Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg bg-neutral-50 ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                <div className={`flex items-center text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.isPositive ? <FiArrowUp className="mr-1" /> : <FiArrowDown className="mr-1" />}
                                    {stat.change}
                                </div>
                            </div>
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-neutral-500 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Chart */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                        <h2 className="text-lg font-bold mb-6">Earnings Overview</h2>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={CHART_DATA}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00aff0" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00aff0" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        cursor={{ stroke: '#00aff0', strokeWidth: 1, strokeDasharray: '4 4' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#00aff0"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                        <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
                        <div className="flex flex-col gap-6">
                            {RECENT_ACTIVITY.map((activity, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex-shrink-0" /> {/* Avatar Placeholder */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">
                                            <span className="font-bold">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-xs text-neutral-500">{activity.time}</p>
                                    </div>
                                    {activity.amount && (
                                        <div className="text-sm font-bold text-green-600">{activity.amount}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 text-sm font-medium text-neutral-500 hover:text-primary transition-colors border-t border-neutral-100">
                            View All Activity
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
