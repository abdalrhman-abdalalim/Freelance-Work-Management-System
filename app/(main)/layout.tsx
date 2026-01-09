import Header from '@/shared/components/Header';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
