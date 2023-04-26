export default async function MarketLayout({ children }: LayoutProps) {
  return (
    <div className="select-none overflow-y-auto overflow-x-hidden p-5 sm:p-7 lg:col-span-3">
      {children}
    </div>
  );
}
