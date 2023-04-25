export default async function MarketLayout({ children }: LayoutProps) {
  return <div className="overflow-y-auto p-5 sm:p-7 lg:col-span-3">{children}</div>;
}
