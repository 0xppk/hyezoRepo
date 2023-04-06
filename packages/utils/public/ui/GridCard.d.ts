type GridCardProps = {
    data?: {
        id: string;
        title: string;
        price: number;
        layout?: string | null;
        color?: string | null;
        message?: string | null;
        category: "BUY" | "SELL";
        status: "ING" | "END" | "PENDING";
    }[];
};
declare function GridCard({ data }: GridCardProps): JSX.Element;

export { GridCard as default };
