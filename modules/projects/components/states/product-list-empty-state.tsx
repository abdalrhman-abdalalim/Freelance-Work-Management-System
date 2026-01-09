import { cn } from '@/lib/utils';
import { CaptionsOffIcon } from 'lucide-react';

export default function ProductListEmptyState({ message, className }: { message?: string; className?: string }) {
	return (
		<div
			className={cn('col-span-full flex gap-2 justify-center items-center text-center text-muted-foreground', className)}
		>
			<CaptionsOffIcon className='h-6 w-6' />
			{message || 'There are no projects yet.'}
		</div>
	);
}
