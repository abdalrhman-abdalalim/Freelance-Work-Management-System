import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProjectStatusCard({ item }: { item: { value: number; label: string } }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{item?.value || ''}</CardTitle>
				<CardDescription>{item?.label || ''}</CardDescription>
			</CardHeader>
		</Card>
	);
}
