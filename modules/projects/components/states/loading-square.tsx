import { Loader2Icon } from 'lucide-react';

export default function LoadingSquare() {
	return (
		<div className='size-full min-h-80 flex flex-col items-center justify-center gap-2 backdrop-blur-sm rounded-md border border-brand-teal'>
			<Loader2Icon className='size-16 h-8 text-brand-teal animate-spin' />
			<span className='text-brand-teal'>Loading...</span>
		</div>
	);
}
