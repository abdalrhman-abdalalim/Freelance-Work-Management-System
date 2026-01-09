'use client';

import { Button } from '@/components/ui/button';
import { AlertCircleIcon, RefreshCcwIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
	const router = useRouter();

	const handleRetry = () => {
		router.refresh();
		resetErrorBoundary();
	};

	return (
		<div className='flex flex-col items-center justify-center p-10 border-2 border-dashed border-red-200 rounded-xl bg-red-50/50'>
			<AlertCircleIcon className='h-10 w-10 text-red-500 mb-4' />
			<h6 className='text-xl font-semibold text-red-800 mb-2'>Something went wrong!</h6>
			<p className='text-red-600 mb-6 text-center max-w-md'>
				{error.message || 'can not get projects list at this time. please try again'}
			</p>

			<Button onClick={handleRetry} variant='destructive' className='flex items-center gap-2'>
				<RefreshCcwIcon className='h-4 w-4' />
				<span>Retry</span>
			</Button>
		</div>
	);
}
