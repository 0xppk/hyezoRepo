export default async function MarketLayout({ children }: LayoutProps) {
  return <div className="col-span-3 select-none p-5 sm:p-7">{children}</div>;
}
