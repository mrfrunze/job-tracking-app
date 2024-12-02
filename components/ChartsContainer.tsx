
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useQuery } from '@tanstack/react-query';
import { getChartsDataAction } from '@/utils/actions';

const ChartsContainer = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  });
  // Логируем состояние
  // console.log('Loading state:', isPending);
  // console.log('Error state:', error);
  // console.log('Data:', data);

  if (isPending) return <h2 className='text-xl font-medium'>Please wait...</h2>;
  if (error) return <h2 className='text-xl font-medium'>Error loading data.</h2>;
  if (!data || data.length < 1) return null;
  // console.log('Chart data for rendering:', data);
  return (
    <section className='mt-16'>
      <h1 className='text-4xl font-semibold text-center'>
        Monthly Applications
      </h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey='count' fill='#2563eb' barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

export default ChartsContainer