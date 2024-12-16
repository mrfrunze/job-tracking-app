import EditJobForm from '@/components/EditJobForm';
import { getSingleJobAction } from '@/utils/actions';

import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';


async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  console.log("Params received:", params);
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ['job', resolvedParams.id],
    queryFn: () => getSingleJobAction(resolvedParams.id),
  });
  
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditJobForm jobId={resolvedParams.id} />
      </HydrationBoundary>
    );
}

export default JobDetailPage;